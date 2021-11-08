import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setProcessType,
  setStepAuthorization,
  setTypeAuthorization,
  setPhoneOrEmail,
  getJwtTokenTest,
  authSelector,
} from '../../../../../redux/authSlice'
import { validateEmail, validatePhone } from '../../../../../../../helpers/validateValue'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSecond } from '../../../../../../../ui-kit/ButtonSecond'
import PhoneInput from 'react-phone-input-2'

export const Step1: React.FC = () => {
  const dispatch = useAppDispatch()
  const phoneOrEmail = useAppSelector((state) => state.authNew.phoneOrEmail)
  const isLimcClick = useAppSelector(authSelector).isBuyLimcClick
  const [error, setError] = useState('')

  const onChange = (event) => {
    setError('')
    dispatch(setPhoneOrEmail(event))
  }

  const nextStep = async () => {
    if (!phoneOrEmail) {
      return setError('Вы забыли ввести телефон или e-mail')
    }

    // Временно, пока авторизация только по телефону
    if (phoneOrEmail.length < 10) {
      return setError('Введите корректные данные')
    }

    if (phoneOrEmail.includes('@')) {
      const valid = validateEmail(phoneOrEmail)

      if (!valid) {
        setError('Неверный формат e-mail')
      } else {
        setError('')
        dispatch(setTypeAuthorization('email'))
      }
    } else {
      const valid = validatePhone(phoneOrEmail)

      if (!valid) {
        setError('Неверный формат телефона')
      } else {
        setError('')
        dispatch(setTypeAuthorization('phone'))
      }
    }

    // users/login-code/ - в теле отправить email/phone, будет отправлен код
    // UPD (08.11) - пока что только 'phone'
    console.log(`+${phoneOrEmail}`)
    const response = await dispatch(getJwtTokenTest({ phone: `+${phoneOrEmail}` }))
    if (response.error) {
      setError('Что-то пошло не так..')
    } else {
      const id = response.payload?.data.unique_identifier || null
      localStorage.setItem('uniqueId', id)
      dispatch(setStepAuthorization(2))
    }
  }

  return (
    <>
      <div className={Styles.content}>
        {/* <h3 className={Styles.caption}>Авторизация</h3> */}
        <h3 className={Styles.caption}> {isLimcClick ? 'Чтобы купить LIMC, нужно авторизоваться' : 'Авторизация'}</h3>
        <Label titleText='Телефон или e-mail' className={Styles.label}>
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
          Получить код
        </ButtonBig>
        <ButtonSecond onClick={() => dispatch(setProcessType('registration'))}>Зарегистрироваться</ButtonSecond>
      </div>
    </>
  )
}
