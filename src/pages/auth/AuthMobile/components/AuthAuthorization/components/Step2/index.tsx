import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setStepAuthorization,
  setCodePhoneOrEmail,
  getJwtToken,
  setIsAuth,
  checkToken,
  refreshToken,
} from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'
import { useHistory } from 'react-router'

export const Step2: React.FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const typeAuthorization = useAppSelector((state) => state.authNew.typeAuthorization)
  const phoneOrEmail = useAppSelector((state) => state.authNew.phoneOrEmail)
  const codePhoneOrEmail = useAppSelector((state) => state.authNew.codePhoneOrEmail)

  const [validValue, setValidValue] = useState(true)
  const [authCodeError, setAuthCodeError] = useState('')

  const onChange = (event) => {
    const number = Number(event.target.value)
    if (!isNaN(number)) {
      dispatch(setCodePhoneOrEmail(event.target.value))
    }
  }

  const prevStep = () => dispatch(setStepAuthorization(1))

  const completeAuthorization = async () => {
    // в теле отправить unique_identifier и code. В ответ придет токен
    if (codePhoneOrEmail.length < 4) {
      setAuthCodeError('Код должен содержать 4 цифры')
      setValidValue(false)
      return
    }

    const data = {
      unique_identifier: localStorage.getItem('uniqueId'),
      code: codePhoneOrEmail,
    }

    const response = await dispatch(getJwtToken(data))

    const responseCheck = await dispatch(checkToken({ token: response.payload.data.access }))

    if (responseCheck.error) {
      await dispatch(refreshToken({ refresh: response.payload.data.refresh }))
    }

    if (response.error) {
      switch (response.error.message) {
        case 'need_get_code_again':
          setAuthCodeError('Нужно снова получить код подтверждения')
          setValidValue(false)
          break
        case 'code_invalid':
          setAuthCodeError('Код недействителен')
          setValidValue(false)
          break
        case 'limit_login_attempts':
          setAuthCodeError('Превышено количество попыток входа (разблокировка через час)')
          setValidValue(false)
          break
        default:
          setAuthCodeError('Что-то пошло не так..')
          setValidValue(false)
          break
      }

      setTimeout(() => {
        setAuthCodeError('')
        setValidValue(true)
      }, 2000)
    } else {
      dispatch(setIsAuth(true))
      history.push('/my')
    }
  }

  return (
    <>
      {typeAuthorization === 'phone' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>Введите код из СМС</h3>
              <span className={Styles.notification}>
                Мы отправили код на номер +{phoneOrEmail} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                <span className={Styles.time}>Получить новый код можно через 00:41</span>
                <p className={Styles.error}>{authCodeError}</p>
                {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              Войти
            </ButtonBig>
          </div>
        </>
      )}
      {/* {typeAuthorization === 'email' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>Введите код</h3>
              <span className={Styles.notification}>
                Мы отправили код на адрес {phoneOrEmail} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                <span className={Styles.time}>Получить новый код можно через 00:41</span>
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              Войти
            </ButtonBig>
          </div>
        </>
      )} */}
    </>
  )
}
