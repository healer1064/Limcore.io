import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { Popup } from '../../../../Popup'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ToggleButton } from '../../../../../ui-kit/ToggleButton'

export const AddAuth: React.FC = () => {
  const [change, setChange] = useState(false)
  const [off, setOff] = useState(true)

  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const nextStep = (step) => {
    dispatch(changeStep(step))
  }

  return (
    <div className={Styles.auth}>
      {change ? (
        <>
          <div className={Styles.block}>
            <span className={Styles.cap}>Изменить телефон</span>
            <span className={Styles.subcap}>Вы меняете номер телефона, к которому привязан аккаунт</span>
            <Label titleText='Телефон'>
              <InputText placeholder='Введите новый номер телефона' />
            </Label>
          </div>
          <ButtonBig>Получить код</ButtonBig>
        </>
      ) : (
        <>
          {step === 0 && (
            <>
              <div className={Styles.block}>
                <span className={Styles.caption}>Подключить двухфакторную аутентификацию </span>
                <span className={Styles.subcaption}>
                  При входе с незнакомого устройства, помимо пароля, мы будем запрашивать код для входа с помощью
                  приложения Google Authenticator
                </span>
                <div className={Styles.wrapper}>
                  <div className={Styles.container}>
                    <span className={Styles.title}>Приложение привязано к номеру</span>
                    <span className={Styles.subtitle}>+7 (913) 654-73-87</span>
                  </div>
                  <ToggleButton />
                </div>
                <div className={`${Styles.block} ${Styles.block_edit}`}>
                  <ButtonSmall onClick={() => setChange(true)}>Изменить номер телефона</ButtonSmall>
                  <p className={Styles.text}>
                    Если вы измените номер телефона для двухфакторной аутентификации,он будет также автоматически
                    измененв разделе личной информации
                  </p>
                </div>
              </div>
              <ButtonBig onClick={() => nextStep(1)}>Подключить</ButtonBig>
            </>
          )}
          {step === 1 && <Step1 nextStep={nextStep} />}
          {step === 2 && <Step2 nextStep={nextStep} />}
          {step === 3 && <Step3 />}
        </>
      )}
      {off && (
        <Popup closePopup={() => setOff(false)}>
          <span className={Styles.designation}>Выключить двухфакторную аутентификацию?</span>
          <div className={Styles.buttons}>
            <ButtonBig>Выключить</ButtonBig>
            <ButtonBig className={Styles.button} onClick={() => setOff(false)}>
              Отмена
            </ButtonBig>
          </div>
        </Popup>
      )}
    </div>
  )
}
