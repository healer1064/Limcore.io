import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setStepAuthorization,
  setCodePhoneOrEmail,
  getJwtToken,
  setIsAuth,
  setTypeAuthorization,
  setCode2FA,
  login2FA,
  getJwtTokenTest,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'

export const Step2: React.FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const [t] = useTranslation()

  const typeAuthorization = useAppSelector((state) => state.auth.typeAuthorization)
  const phoneOrEmail = useAppSelector((state) => state.auth.phoneOrEmail)
  const codePhoneOrEmail = useAppSelector((state) => state.auth.codePhoneOrEmail)
  const code2FA = useAppSelector((state) => state.auth.code2FA)

  const [validValue, setValidValue] = useState(true)
  const [authCodeError, setAuthCodeError] = useState('')
  const [uniqId, setUniqId] = useState('')
  const [counter, setCounter] = useState(59)

  const onChange = (event) => {
    const number = Number(event.target.value)

    if (!isNaN(number)) {
      dispatch(setCodePhoneOrEmail(event.target.value))
    }
  }

  const onChange2FA = (event) => {
    const number = Number(event.target.value)

    if (!isNaN(number)) {
      dispatch(setCode2FA(event.target.value))
    }
  }

  const resendCode = () => {
    dispatch(getJwtTokenTest({ phone: `+${phoneOrEmail}` }))
    setCounter(59)
  }

  const prevStep = () => dispatch(setStepAuthorization(1))

  const completeAuthorization = async () => {
    // в теле отправить unique_identifier и code. В ответ придет токен
    if (codePhoneOrEmail.length < 4) {
      setAuthCodeError(t('err_code4'))
      setValidValue(false)
      return
    }

    const data = {
      unique_identifier: localStorage.getItem('uniqueId'),
      code: codePhoneOrEmail,
    }

    const response = await dispatch(getJwtToken(data))

    if (response.error) {
      switch (response.error.message) {
        case 'need_get_code_again':
          setAuthCodeError(t('err_needCodeAgain'))
          setValidValue(false)
          break
        case 'code_invalid':
          setAuthCodeError(t('err_codeInvalid'))
          setValidValue(false)
          break
        case 'limit_login_attempts':
          setAuthCodeError(t('err_limit'))
          setValidValue(false)
          break
        default:
          setAuthCodeError(t('err_smthWentWrong'))
          setValidValue(false)
          break
      }

      setTimeout(() => {
        setAuthCodeError('')
        setValidValue(true)
      }, 2000)
    } else {
      if (response.payload.data.is_2fa) {
        dispatch(setTypeAuthorization('2fa'))
        setUniqId(response.payload.data.unique_identifier)
      } else {
        dispatch(setIsAuth(true))
        history.push('/my')
      }
    }
  }

  const check2FA = async () => {
    const res = await dispatch(login2FA({ code: code2FA, unique_identifier: uniqId }))

    if (res.error) {
      console.log('error check2FA')
    } else {
      dispatch(setIsAuth(true))
      history.push('/my')
    }
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <>
      {typeAuthorization === 'phone' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>{t('cellCodeFromSms')}</h3>
              <span className={Styles.notification}>
                {t('weSentCode')} +{phoneOrEmail} <ButtonSmall onClick={prevStep}>{t('change')}</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                {counter < 1 ? (
                  <ButtonSmall onClick={resendCode}>{t('getNewCode2')}</ButtonSmall>
                ) : (
                  <>
                    <span className={Styles.time}>
                      {t('getNewCode')} {counter >= 10 ? `00:${counter}` : `00:0${counter}`}
                    </span>
                    <p className={Styles.error}>{authCodeError}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              {t('login')}
            </ButtonBig>
          </div>
        </>
      )}
      {typeAuthorization === '2fa' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>{t('fa_enterCode')}</h3>
              <span className={`${Styles.notification} ${Styles.notification_edit}`}>
                {t('fa_enterCodeFromGoogle')}
              </span>
              <InputCode
                onChange={onChange2FA}
                value={code2FA}
                validValue={validValue}
                placeholder='_ _ _ _ _ _'
                maxLength={6}
              />
              <div className={Styles.wrap}>
                <p className={Styles.error}>{authCodeError}</p>
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={check2FA} disabled={!code2FA}>
              {t('login')}
            </ButtonBig>
          </div>
        </>
      )}
      {/* {typeAuthorization === 'email' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>Введите код</h3>
              <span className={Styles.notification}>
                Мы отправили код на адрес {phoneOrEmail} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                <span className={Styles.time}>Получить новый код можно через 00:41</span>
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              Войти
            </ButtonBig>
          </div>
        </>
      )} */}
    </>
  )
}
