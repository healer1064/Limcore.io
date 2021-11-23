import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../app/redux/hooks'
import { changeStep } from '../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from '../styles.module.scss'

import { Label } from '../../../../../../ui-kit/Label'
import { InputEmail } from '../../../../../../ui-kit/InputEmail'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'
import { validateEmail } from '../../../../../../helpers/validateValue'
import { useTranslation } from 'react-i18next'
import { setEmail, registerUserEmail } from '../../../../../../pages/auth/redux/authSlice'

export const Step1: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.auth.email)
  const [validValue, setValidValue] = useState(false)
  const [error, setError] = useState('')

  const onChange = (event) => {
    if (validateEmail(event.target.value)) {
      setValidValue(true)
    } else {
      setValidValue(false)
    }
    dispatch(setEmail(event.target.value))
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setValidValue(true)
    }
  }, [])

  const nextStep = async () => {
    if (validateEmail(email)) {
      setValidValue(true)
    } else {
      setValidValue(false)
      setError(t('err_wrongInfo'))
      return
    }

    const response = await dispatch(registerUserEmail({ email, unique_identifier: localStorage.getItem('uniqueId') }))

    if (response.error) {
      switch (response.error.message) {
        case 'user_already_registered':
          setError(t('err_userIsRegistered'))
          break
        case 'email_using_in_another_account':
          setError(t('err_userIsRegistered'))
          break
        case 'wait_one_minute':
          setError(t('err_waitOneMinute'))
          break
        default:
          setError(t('err_smthWentWrong'))
          break
      }
    } else {
      dispatch(changeStep(1))
    }
  }

  return (
    <>
      <div className={Styles.progress}>
        <div className={Styles.step}>
          <div className={`${Styles.number} ${Styles.number_active}`}>
            <span>1</span>
          </div>
          <span className={`${Styles.line}`} />
        </div>
        <div className={Styles.step}>
          <div className={`${Styles.number}`}>
            <span>2</span>
          </div>
        </div>
      </div>
      <div className={Styles.email}>
        <div className={Styles.content}>
          <h3 className={Styles.title}>{t('logOn')}</h3>
          <div className={Styles.block}>
            <Label titleText='E-mail' className={Styles.label}>
              <InputEmail onChange={onChange} value={email} validValue={validValue} placeholder={t('enterEmail')} />
              <p className={Styles.error}>{error}</p>
            </Label>
          </div>
        </div>
        <div className={Styles.buttons}>
          <ButtonBig onClick={nextStep} disabled={!validValue}>
            {t('getCode')}
          </ButtonBig>
        </div>
      </div>
    </>
  )
}
