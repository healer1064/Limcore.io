import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepRegistration, setEmail, registerUserEmail } from '../../../../../redux/authSlice'
import { validateEmail } from '../../../../../../../helpers/validateValue'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputEmail } from '../../../../../../../ui-kit/InputEmail'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.authNew.email)
  const [validValue, setValidValue] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    setValidValue(true)
    dispatch(setEmail(event.target.value))
  }

  const nextStep = async () => {
    if (validateEmail(email)) {
      setValidValue(true)
    } else {
      setValidValue(false)
      setError('Неверные данные.')
      return
    }

    const response = await dispatch(registerUserEmail({ email, unique_identifier: localStorage.getItem('uniqueId') }))
    console.log('step3', response)
    if (response.error) {
      if (response.error.message === 'user_already_registered') {
        setError('Пользователь уже зарегистрирован')
      }

      setError('Что-то пошло не так, попробуйте еще раз.')
    } else {
      dispatch(setStepRegistration(4))
    }
  }

  return (
    <>
      <div className={Styles.content}>
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
            <div className={Styles.number}>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={Styles.block}>
          <h3 className={Styles.title}>Регистрация</h3>
          <Label titleText='E-mail' className={Styles.label}>
            <InputEmail onChange={onChange} value={email} validValue={validValue} placeholder='Введите e-mail' />
            <p className={Styles.error}>{error}</p>
          </Label>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!email}>
          Получить код
        </ButtonBig>
      </div>
    </>
  )
}
