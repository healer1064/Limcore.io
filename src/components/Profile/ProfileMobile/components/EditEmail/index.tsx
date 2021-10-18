import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep } from '../../../../../pages/cabinet/redux/cabinetSlice'
import InputMask from 'react-input-mask'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'

export const EditEmail: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const nextStep = (step) => {
    dispatch(changeStep(step))
  }

  return (
    <div className={Styles.email}>
      {step === 0 && (
        <>
          <div className={Styles.block}>
            <span className={Styles.caption}>Изменить e-mail</span>
            <span className={Styles.subcaption}>Вы меняете e-mail, к которому привязан аккаунт</span>
            <Label className={Styles.label} titleText='E-mail'>
              <InputText placeholder='Введите новый e-mail' />
            </Label>
          </div>
          <ButtonBig onClick={() => nextStep(1)}>Получить код</ButtonBig>
        </>
      )}
      {step === 1 && (
        <>
          <div className={Styles.block}>
            <span className={Styles.caption}>Изменить e-mail</span>
            <span className={Styles.subcaption}>Вы меняете e-mail, к которому привязан аккаунт</span>
            <span className={Styles.info}>
              Мы отправили код на адрес petrov.k@gmail.com <ButtonSmall className={Styles.edit}>Изменить</ButtonSmall>
            </span>
            <InputText className={Styles.input} placeholder='_ _ _ _' />
            <span className={Styles.timer}>Получить новый код можно через 00:41</span>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
          </div>
          <ButtonBig>Готово</ButtonBig>
        </>
      )}
    </div>
  )
}
