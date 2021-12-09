import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setStepRegistration,
  setCodePhone,
  registerUserPhoneConfirmation,
  registerUserPhone,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'
import { useTranslation } from 'react-i18next'

export const Step2: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.auth.phone)
  const codePhone = useAppSelector((state) => state.auth.codePhone)

  const [validValue, setValidValue] = useState(true)
  const [error, setError] = useState('')
  const [counter, setCounter] = useState(59)

  const onChange = (event) => {
    const number = Number(event.target.value)
    if (!isNaN(number)) {
      dispatch(setCodePhone(event.target.value))
      setValidValue(true)
    }
  }

  const prevStep = () => dispatch(setStepRegistration(1))

  const resendCode = () => {
    dispatch(registerUserPhone({ phone: `+${phone}` }))
    setCounter(59)
  }

  const nextStep = async () => {
    // в теле отправить unique_identifier и code. В ответ придет токен
    if (codePhone.length < 4) {
      setValidValue(false)
      setError(t('err_code4'))
      return
    }

    const data = {
      code: codePhone,
      unique_identifier: localStorage.getItem('uniqueId'),
    }

    const response = await dispatch(registerUserPhoneConfirmation(data))

    if (response.error) {
      switch (response.error.message) {
        case 'phone_already_verified':
          setValidValue(false)
          setError(t('err_phoneVerified'))
          break
        case 'need_get_code_again':
          setValidValue(false)
          setError(t('err_needCodeAgain'))
          break
        case 'code_invalid':
          setValidValue(false)
          setError(t('err_codeInvalid'))
          break
        default:
          setValidValue(false)
          setError(t('err_smthWentWrong'))
          break
      }
    } else {
      const jwtObj = { ...response.payload.data }
      localStorage.setItem('jwtToken', JSON.stringify(jwtObj))
      dispatch(setStepRegistration(3))
    }
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.title}>{t('cellCodeFromSms')}</h3>
        <div className={Styles.progress}>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>1</span>
            </div>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
          </div>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>2</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
            <div className={Styles.number}>
              <span>3</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={Styles.line}>{}</span>
            <div className={Styles.number}>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={Styles.block}>
          <span className={Styles.notification}>
            {t('weSentCode')} +{phone} <ButtonSmall onClick={prevStep}>{t('change')}</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codePhone} validValue={validValue} />
          <div className={Styles.wrap}>
            {counter < 1 ? (
              <ButtonSmall onClick={resendCode}>{t('getNewCode2')}</ButtonSmall>
            ) : (
              <>
                <span className={Styles.time}>
                  {t('getNewCode')} {counter >= 10 ? `00:${counter}` : `00:0${counter}`}
                </span>
                <p className={Styles.error}>{error}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!codePhone}>
          {t('next')}
        </ButtonBig>
      </div>
    </>
  )
}
