import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepRegistration, setEmail } from '../../../../../redux/authSlice'
import { validateEmail } from '../../../../../../../helpers/validateValue'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputEmail } from '../../../../../../../ui-kit/InputEmail'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.authNew.email)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => {
    setValidValue(true)
    dispatch(setEmail(event.target.value))
  }

  const nextStep = () => {
    if (validateEmail(email)) {
      setValidValue(true)
      dispatch(setStepRegistration(4))
    } else {
      setValidValue(false)
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
          <Label titleText='E-mail'>
            <InputEmail onChange={onChange} value={email} validValue={validValue} placeholder='Введите e-mail' />
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
