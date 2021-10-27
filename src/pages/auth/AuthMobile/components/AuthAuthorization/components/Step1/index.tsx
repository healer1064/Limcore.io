import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setProcessType,
  setStepAuthorization,
  setTypeAuthorization,
  setPhoneOrEmail,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSecond } from '../../../../../../../ui-kit/ButtonSecond'

export const Step1: React.FC = () => {
  const dispatch = useAppDispatch()
  const phoneOrEmail = useAppSelector((state) => state.authNew.phoneOrEmail)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => dispatch(setPhoneOrEmail(event.target.value))

  const nextStep = () => {
    // check type auth
    // dispatch(setTypeAuthorization(''))
    dispatch(setStepAuthorization(2))
  }

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.caption}>Авторизация</h3>
        <Label titleText='Телефон или e-mail'>
          <InputText onChange={onChange} value={phoneOrEmail} placeholder='Введите телефон или e-mail' error='' />
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
