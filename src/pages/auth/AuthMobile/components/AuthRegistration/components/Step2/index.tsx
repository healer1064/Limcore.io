import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepRegistration, setCodePhone, registerUserPhoneConfirmation } from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

export const Step2: React.FC = () => {
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.authNew.phone)
  const codePhone = useAppSelector((state) => state.authNew.codePhone)

  const [validValue, setValidValue] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    setValidValue(true)
    dispatch(setCodePhone(event.target.value))
  }

  const prevStep = () => dispatch(setStepRegistration(1))

  const nextStep = async () => {
    // в теле отправить unique_identifier и code. В ответ придет токен
    if (codePhone.length < 4) {
      setValidValue(false)
      return
    }

    const data = {
      code: codePhone,
      unique_identifier: localStorage.getItem('uniqueId'),
    }
    console.log(data)

    const response = await dispatch(registerUserPhoneConfirmation(data))
    // console.log(response)

    if (response.error) {
      switch (response.error.message) {
        case 'phone_already_verified':
          setValidValue(false)
          setError('Телефон уже подтвержден')
          break
        case 'need_get_code_again':
          setValidValue(false)
          setError('Нужно снова получить код подтверждения')
          break
        case 'code_invalid':
          setValidValue(false)
          setError('Код недействителен')
          break
        default:
          setValidValue(false)
          setError('Что-то пошло не так..')
          break
      }
    } else {
      const jwtObj = { ...response.payload.data }
      localStorage.setItem('jwtToken', JSON.stringify(jwtObj))
      dispatch(setStepRegistration(3))
    }
  }

  return (
    <>
      <div className={Styles.content}>
        <h3 className={Styles.title}>Введите код из СМС</h3>
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
          <span className={Styles.notification}>
            Мы отправили код на номер +{phone} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codePhone} validValue={validValue} />
          <div className={Styles.wrap}>
            <span className={Styles.time}>Получить новый код можно через 00:41</span>
            <p className={Styles.error}>{error}</p>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!codePhone}>
          Далее
        </ButtonBig>
      </div>
    </>
  )
}
