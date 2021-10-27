import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setProcessType, setStepRegistration, setPhone } from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputPhone } from '../../../../../../../ui-kit/InputPhone'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSecond } from '../../../../../../../ui-kit/ButtonSecond'

export const Step1: React.FC = () => {
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.authNew.phone)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => dispatch(setPhone(event.target.value))

  const nextStep = () => {
    if (phone.includes('_') || phone.length !== 18) {
      setValidValue(false)
    } else {
      setValidValue(true)
      dispatch(setStepRegistration(2))
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
          <h3 className={Styles.title}>Регистрация</h3>
          <Label titleText='Телефон'>
            <InputPhone
              onChange={onChange}
              value={phone}
              validValue={validValue}
              placeholder='Введите номер телефона'
            />
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
