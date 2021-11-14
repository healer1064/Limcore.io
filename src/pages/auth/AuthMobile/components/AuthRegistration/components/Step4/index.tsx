import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setStepRegistration,
  setCodeEmail,
  registerUserEmailConfirmation,
  setProcessType,
  setIsAuth,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

export const Step4: React.FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.authNew.email)
  const codeEmail = useAppSelector((state) => state.authNew.codeEmail)

  const [validValue, setValidValue] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    const number = Number(event.target.value)

    if (!isNaN(number)) {
      setValidValue(true)
      dispatch(setCodeEmail(event.target.value))
    }
  }

  const prevStep = () => dispatch(setStepRegistration(3))

  const completeRegistration = async () => {
    // нужно отдать code + unique_identifier
    const data = {
      code: codeEmail,
      unique_identifier: localStorage.getItem('uniqueId'),
    }

    const response = await dispatch(registerUserEmailConfirmation(data))
    console.log('Step4', response)

    if (response.error) {
      switch (response.error.message) {
        case 'email_already_verified':
          setValidValue(false)
          setError('Email уже подтвержден')
          break
        case 'need_get_code_again':
          setValidValue(false)
          setError('Нужно снова получить код подтверждения')
          break
        case 'code_invalid':
          setValidValue(false)
          setError(' Код недействителен')
          break
        default:
          setValidValue(false)
          setError('Что-то пошло не так..')
          break
      }
    } else {
      dispatch(setIsAuth(true))
      history.push('/my')
      // dispatch(registerUserEmailConfirmation(data))
      // dispatch(setProcessType('authorization'))
    }
  }

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.title}>Введите код</h3>
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
            Мы отправили код на адрес {email} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codeEmail} validValue={validValue} />
          <div className={Styles.wrap}>
            <span className={Styles.time}>Получить новый код можно через 00:41</span>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
            <p className={Styles.error}>{error}</p>
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={completeRegistration} disabled={!codeEmail}>
          Зарегистрироваться
        </ButtonBig>
      </div>
    </>
  )
}
