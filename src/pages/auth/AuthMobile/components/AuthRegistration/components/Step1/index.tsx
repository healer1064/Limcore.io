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

export const Step1: React.FC = () => {
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.authNew.phone)
  const [error, setError] = useState('')

  const onChange = (event) => {
    dispatch(setPhone(event))
  }

  const nextStep = async () => {
    if (phone.length < 10) {
      return setError('Введите корректные данные')
    }

    const response = await dispatch(registerUserPhone({ phone: `+${phone}` })) // придет unique_identifier
    console.log(response)
    if (response.error) {
      if (response.error.message === 'user_already_registered') {
        setError('Пользователь уже зарегистрирован')
      } else {
        setError('Что-то пошло не так..')
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
        <h3 className={Styles.title}>Регистрация</h3>
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
          <Label titleText='Телефон' className={Styles.label}>
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
          Получить код
        </ButtonBig>
        <ButtonSecond onClick={() => dispatch(setProcessType('authorization'))}>Войти</ButtonSecond>
      </div>
    </>
  )
}
