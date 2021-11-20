import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setProcessType, setStepRegistration, setPhone, registerUserPhone } from '../../../../../redux/authSlice'
// import { validatePhone } from '../../../../../../../helpers/validateValue'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
// import { InputPhone } from '../../../../../../../ui-kit/InputPhone'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSecond } from '../../../../../../../ui-kit/ButtonSecond'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useTranslation } from 'react-i18next'

export const Step1: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.auth.phone)
  const [error, setError] = useState('')

  const onChange = (event) => {
    dispatch(setPhone(event))
  }

  const nextStep = async () => {
    if (phone.length < 10) {
      return setError(t('err_correctNumber'))
    }

    const response = await dispatch(registerUserPhone({ phone: `+${phone}` })) // придет unique_identifier

    if (response.error) {
      switch (response.error.message) {
        case 'user_already_registered':
          setError(t('err_userIsRegistered'))
          break
        case 'phone_using_in_another_account':
          setError(t('err_userIsRegistered'))
          break
        default:
          setError(t('err_smthWentWrong'))
          break
      }
    } else {
      const id = response.payload?.data.unique_identifier || null
      localStorage.setItem('uniqueId', id)
      dispatch(setStepRegistration(2))
    }
  }

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.title}>{t('logOn')}</h3>
        <div className={Styles.progress}>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>1</span>
            </div>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
          </div>
          <div className={Styles.step}>
            <div className={Styles.number}>
              <span>2</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={Styles.line}>{}</span>
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
          <Label titleText={t('phone')} className={Styles.label}>
            <PhoneInput
              country='ru'
              preferredCountries={['ua', 'ru', 'by', 'kz', 'uz', 'tj']}
              value={phone}
              onChange={onChange}
            />
            <p className={Styles.error}>{error}</p>
          </Label>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!phone}>
          {t('getCode')}
        </ButtonBig>
        <ButtonSecond onClick={() => dispatch(setProcessType('authorization'))}>{t('login')}</ButtonSecond>
      </div>
    </>
  )
}
