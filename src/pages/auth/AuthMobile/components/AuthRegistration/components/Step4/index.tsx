import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setStepRegistration,
  setCodeEmail,
  registerUserEmailConfirmation,
  setIsAuth,
  registerUserEmail,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'
import { useTranslation } from 'react-i18next'

export const Step4: React.FC = () => {
  const [t] = useTranslation()
  const history = useHistory()
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.auth.email)
  const codeEmail = useAppSelector((state) => state.auth.codeEmail)

  const [validValue, setValidValue] = useState(true)
  const [error, setError] = useState('')
  const [counter, setCounter] = useState(59)

  const onChange = (event) => {
    const number = Number(event.target.value)

    if (!isNaN(number)) {
      setValidValue(true)
      dispatch(setCodeEmail(event.target.value))
    }
  }

  const prevStep = () => dispatch(setStepRegistration(3))

  const resendCode = () => {
    dispatch(registerUserEmail({ email, unique_identifier: localStorage.getItem('uniqueId') }))
    setCounter(59)
  }

  const completeRegistration = async () => {
    // нужно отдать code + unique_identifier
    const data = {
      code: codeEmail,
      unique_identifier: localStorage.getItem('uniqueId'),
    }

    const response = await dispatch(registerUserEmailConfirmation(data))

    if (response.error) {
      switch (response.error.message) {
        case 'email_already_verified':
          setValidValue(false)
          setError(t('err_mailConfirmed'))
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
      dispatch(setIsAuth(true))
      history.push('/my')
      // dispatch(registerUserEmailConfirmation(data))
      // dispatch(setProcessType('authorization'))
    }
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.title}>{t('enterCode')}</h3>
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
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>3</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={Styles.block}>
          <span className={Styles.notification}>
            {t('weSentCodeOnEmail')} {email} <ButtonSmall onClick={prevStep}>{t('change')}</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codeEmail} validValue={validValue} />
          <div className={Styles.wrap}>
            {counter < 1 ? (
              <ButtonSmall onClick={resendCode}>{t('getNewCode2')}</ButtonSmall>
            ) : (
              <>
                <span className={Styles.time}>
                  {t('getNewCode2')} {counter >= 10 ? `00:${counter}` : `00:0${counter}`}
                </span>
                <p className={Styles.error}>{error}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={completeRegistration} disabled={!codeEmail}>
          {t('signUp')}
        </ButtonBig>
      </div>
    </>
  )
}
