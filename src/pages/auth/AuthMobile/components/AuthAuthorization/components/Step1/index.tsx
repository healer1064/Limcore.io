import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setProcessType,
  setStepAuthorization,
  setTypeAuthorization,
  setPhoneOrEmail,
  getJwtTokenTest,
  authSelector,
  setIsBuyLimcClick,
} from '../../../../../redux/authSlice'
import { validateEmail, validatePhone } from '../../../../../../../helpers/validateValue'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSecond } from '../../../../../../../ui-kit/ButtonSecond'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useTranslation } from 'react-i18next'

export const Step1: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const phoneOrEmail = useAppSelector((state) => state.auth.phoneOrEmail)
  const isLimcClick = useAppSelector(authSelector).isBuyLimcClick
  const [error, setError] = useState('')

  const onChange = (event) => {
    setError('')
    dispatch(setPhoneOrEmail(event))
  }

  const nextStep = async () => {
    if (!phoneOrEmail) {
      return setError(t('err_forget'))
    }

    if (phoneOrEmail.includes('@')) {
      const valid = validateEmail(phoneOrEmail)

      if (!valid) {
        setError(t('err_mail'))
      } else {
        setError('')
        dispatch(setTypeAuthorization('email'))
      }
    } else {
      const valid = validatePhone(phoneOrEmail)

      if (!valid) {
        setError(t('err_phone'))
      } else {
        setError('')
        dispatch(setTypeAuthorization('phone'))
      }
    }

    // users/login-code/ - в теле отправить email/phone, будет отправлен код. UPD (08.11) - пока что только 'phone'

    localStorage.setItem('userPhone', phoneOrEmail) // для WalletConnect

    const response = await dispatch(getJwtTokenTest({ phone: `+${phoneOrEmail}` }))

    if (response.error) {
      switch (response.error.message) {
        case 'phone_is_not_confirmed':
          setError(t('err_phoneNotConfirmed'))
          break
        case 'email_is_not_confirmed':
          setError(t('err_mailNotConfirmed'))
          break
        case 'limit_login_attempts':
          setError(t('err_limit'))
          break
        case 'user_not_registered':
          setError(t('err_notRegistered'))
          break
        case 'phone_invalid':
          setError(t('err_phoneInvalid'))
          break
        default:
          setError(t('err_smthWentWrong'))
          break
      }
    } else {
      const id = response.payload?.data.unique_identifier || null
      localStorage.setItem('uniqueId', id)
      dispatch(setStepAuthorization(2))
    }
  }

  useEffect(() => {
    return () => {
      dispatch(setIsBuyLimcClick(false))
    }
  }, [])

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.caption}> {isLimcClick ? t('needToLogToBuy') : t('logIn')}</h3>
        <Label titleText={t('cellNumber')} className={Styles.label}>
          <PhoneInput
            country='ru'
            preferredCountries={['ua', 'ru', 'by', 'kz', 'uz', 'tj']}
            value={phoneOrEmail}
            onChange={onChange}
          />
          <p className={Styles.error}>{error}</p>
        </Label>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!phoneOrEmail}>
          {t('getCode')}
        </ButtonBig>
        <ButtonSecond onClick={() => dispatch(setProcessType('registration'))}>{t('signUp')}</ButtonSecond>
      </div>
    </>
  )
}
