import React from 'react'
import { useAppDispatch } from '@app/redux/hooks'
import { changeViewContent, completeProfile, changeStep } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
  const dispatch = useAppDispatch()

  const completeFilling = (event) => {
    event.preventDefault()
    dispatch(completeProfile())
    dispatch(changeViewContent('none'))
    dispatch(changeStep(0))
  }

  return (
    <>
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
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>Укажите место жительства</span>
        <span className={Styles.subcaption}>Введите адрес прописки</span>
        <form className={Styles.form}>
          <Label className={Styles.label} titleText='Город*'>
            <InputText placeholder='Введите город' />
          </Label>
          <Label className={Styles.label} titleText='Улица*'>
            <InputText placeholder='Введите название улицы' />
          </Label>
          <div className={Styles.wrapper}>
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
          <ButtonBig onClick={completeFilling}>Завершить</ButtonBig>
        </form>
      </div>
    </>
  )
}
