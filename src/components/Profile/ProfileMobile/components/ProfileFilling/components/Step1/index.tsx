import React from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { InputCheckbox } from '../../../../../../../ui-kit/InputCheckbox'
import { InputRadio } from '../../../../../../../ui-kit/InputRadio'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import calendarIcon from '@icons/calendar-icon.svg'

interface Step1Props {
  nextStep: any
}

export const Step1: React.FC<Step1Props> = ({ nextStep }) => {
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
          <div className={Styles.number}>
            <span>2</span>
          </div>
        </div>
        <div className={Styles.step}>
          <span className={Styles.line}>{}</span>
          <div className={Styles.number}>
            <span>3</span>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>Укажите ФИО, дату рождения и пол</span>
        <form className={Styles.form}>
          <Label className={Styles.label} titleText='Имя*'>
            <InputText placeholder='Введите ваше имя' />
          </Label>
          <Label className={Styles.label} titleText='Фамилия*'>
            <InputText placeholder='Введите вашу фамилию' />
          </Label>
          <Label className={Styles.label} titleText='Отчество*'>
            <InputText placeholder='Введите ваше отчество' />
          </Label>
          <Label className={Styles.label}>
            <InputCheckbox titleCheckbox='У меня нет отчества' />
          </Label>
          <Label className={Styles.label} titleText='Дата рождения*'>
            <div className={Styles.block}>
              <input type='text' placeholder='01.01.21' />
              <img src={calendarIcon} alt='Иконка' />
            </div>
          </Label>
          <Label className={Styles.edit} titleText='Пол*'>
            <div className={Styles.radios}>
              <Label>
                <InputRadio titleRadio='Мужской' />
              </Label>
              <Label>
                <InputRadio titleRadio='Женский' />
              </Label>
            </div>
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 1)}>Продолжить</ButtonBig>
        </form>
      </div>
    </>
  )
}
