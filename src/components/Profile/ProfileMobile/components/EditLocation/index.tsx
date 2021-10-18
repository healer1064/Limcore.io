import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { InputRadio } from '../../../../../ui-kit/InputRadio'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'

export const EditLocation: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const nextStep = (step) => {
    dispatch(changeStep(step))
  }

  return (
    <div className={Styles.location}>
      {step === 0 && (
        <>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span className={Styles.title}>Адрес регистрации</span>
            </div>
            <span className={Styles.subtitle}>644874, Московская обл, г Москва, ул Ленина, д 8</span>
            <Label className={Styles.label}>
              <InputRadio titleRadio='Письма по этому адресу' />
            </Label>
          </div>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span className={Styles.title}>Домашний адрес</span>
              <ButtonSmall onClick={() => nextStep(1)}>Добавить</ButtonSmall>
            </div>
            <Label className={Styles.label}>
              <InputRadio titleRadio='Письма по этому адресу' />
            </Label>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <span className={Styles.caption}>Укажите адрес</span>
          <span className={Styles.subcaption}>Введите ваш домашний адрес</span>
          <form className={Styles.form}>
            <div className={Styles.container}>
              <Label className={Styles.edit} titleText='Город*'>
                <InputText placeholder='Введите город' />
              </Label>
              <Label className={Styles.edit} titleText='Улица*'>
                <InputText placeholder='Введите название улицы' />
              </Label>
              <div className={Styles.inputs}>
                <Label titleText='Дом*'>
                  <InputText className={Styles.input} />
                </Label>
                <Label titleText='Корпус'>
                  <InputText className={Styles.input} />
                </Label>
                <Label titleText='Квартира*'>
                  <InputText className={Styles.input} />
                </Label>
              </div>
            </div>
            <ButtonBig>Добавить</ButtonBig>
          </form>
        </>
      )}
    </div>
  )
}
