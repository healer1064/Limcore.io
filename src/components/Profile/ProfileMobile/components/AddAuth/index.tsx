import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep, changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { cancel2FA, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { Popup } from '../../../../Popup'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ToggleButton } from '../../../../../ui-kit/ToggleButton'

export const AddAuth: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)
  const userData = useAppSelector((state) => state.user.userData)
  const [offAuth, setOffAuth] = useState(false)
  const [checkedToggle, setCheckedToggle] = useState(null)

  const nextStep = (step) => dispatch(changeStep(step))

  const closePopup = () => setOffAuth(false)
  const openPopup = () => setOffAuth(true)

  const changeOffAuth = (event) => {
    if (!event.target.checked) {
      openPopup()
    }
  }

  const off2FA = async () => {
    const response = await dispatch(cancel2FA())

    if (response.error) {
      console.log('error cancel2FA')
    } else {
      dispatch(getUser())
      closePopup()
    }
  }

  const changePhone = () => {
    dispatch(changeViewContent('changePhone'))
    nextStep(1)
  }

  useEffect(() => {
    setCheckedToggle(userData.is_connected_2fa)
  }, [userData])

  return (
    <div className={Styles.auth}>
      <>
        {step === 0 && (
          <>
            {userData?.is_connected_2fa ? (
              <>
                <div className={Styles.block}>
                  <span className={Styles.caption}>Двухфакторная аутентификация включена</span>
                  <span className={Styles.subcaption}>
                    При входе с незнакомого устройства, помимо пароля, мы будем запрашивать код для входа с помощью
                    приложения Google Authenticator
                  </span>
                  <div className={Styles.wrapper}>
                    <div className={Styles.container}>
                      <span className={Styles.title}>Приложение привязано к номеру</span>
                      <span className={Styles.subtitle}>{userData.phone}</span>
                    </div>
                    <ToggleButton onChange={changeOffAuth} checked={checkedToggle} />
                  </div>
                  {/* <div className={`${Styles.block} ${Styles.block_edit}`}>
                    <ButtonSmall onClick={changePhone}>Изменить номер телефона</ButtonSmall>
                    <p className={Styles.text}>
                      Если вы измените номер телефона для двухфакторной аутентификации,он будет также автоматически
                      измененв разделе личной информации
                    </p>
                  </div> */}
                </div>
              </>
            ) : (
              <>
                <div className={Styles.block}>
                  <span className={Styles.caption}>Подключить двухфакторную аутентификацию</span>
                  <span className={Styles.subcaption}>
                    При входе с незнакомого устройства, помимо пароля, мы будем запрашивать код для входа с помощью
                    приложения Google Authenticator
                  </span>
                </div>
                <ButtonBig onClick={() => nextStep(1)}>Подключить</ButtonBig>
              </>
            )}
          </>
        )}
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step3 />}
        {/* {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} />}
        {step === 3 && <Step3 />} */}
      </>
      {offAuth && (
        <Popup closePopup={closePopup}>
          <span className={Styles.designation}>Выключить двухфакторную аутентификацию?</span>
          <div className={Styles.buttons}>
            <ButtonBig onClick={off2FA}>Выключить</ButtonBig>
            <ButtonBig className={Styles.button} onClick={closePopup}>
              Отмена
            </ButtonBig>
          </div>
        </Popup>
      )}
    </div>
  )
}
