import React from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import calendarIcon from '@icons/calendar-icon.svg'

interface Step2Props {
  nextStep: any
}

export const Step2: React.FC<Step2Props> = ({ nextStep }) => {
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
          <span className={Styles.line}>{}</span>
          <div className={Styles.number}>
            <span>3</span>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>Укажите паспортные данные</span>
        <form className={Styles.form}>
          <div className={Styles.wrapper}>
            <Label titleText='Серия*'>
              <InputText className={Styles.input} />
            </Label>
            <Label titleText='Номер*'>
              <InputText className={Styles.input} />
            </Label>
          </div>
          <Label className={Styles.label} titleText='Код подразделения*'>
            <InputText placeholder='Введите код' />
          </Label>
          <Label className={Styles.label} titleText='Дата выдачи*'>
            <div className={Styles.block}>
              <input type='text' placeholder='01.01.21' />
              <img src={calendarIcon} alt='Иконка' />
            </div>
          </Label>
          <Label className={Styles.edit} titleText='Паспорт выдан*'>
            <InputText placeholder='Введите учреждения' />
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 3)}>Продолжить</ButtonBig>
        </form>
      </div>
    </>
  )
}
