import React from 'react'
import Styles from './style.module.scss'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'
import { InputRadio } from '../../../../ui-kit/InputRadio'
import { InputText } from '../../../../ui-kit/InputText'
import { Label } from '../../../../ui-kit/Label'

export const Form = ({ title, content }) => {
  return (
    <>
      <form className={Styles.form_container}>
        <h2 className={Styles.form_title}>{title}</h2>
        <p className={Styles.form_paragraph}>{content}</p>
        <fieldset className={Styles.form_fieldset}>
          <Label titleText='Сумма покупки' />
          <InputText placeholder='Введите сумму в $' />
          <Label titleText='Количество токенов' className={Styles.form_label} />
          <InputText placeholder='Введите количество токенов' />
        </fieldset>
      </form>
    </>
  )
}
