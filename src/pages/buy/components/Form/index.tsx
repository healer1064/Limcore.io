import React from 'react'
import Styles from './style.module.scss'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'
import { InputText } from '../../../../ui-kit/InputText'
import { Label } from '../../../../ui-kit/Label'
import { Card } from '../Card'
import VisaIcon from '../../../../assets/icons/Visa-symbol.png'
import VisaLogo from '../../../../assets/icons/Visa-logo.png'
import USDTIcon from '../../../../assets/icons/USDT-icon.png'

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
        <h3 className={Styles.form_subtitle}>Введите телефон или email</h3>
        <fieldset className={Styles.form_fieldset}>
          <Label titleText='Телефон' />
          <InputText placeholder='Введите телефон' />
          <ButtonBig className={Styles.form_buttonForCode}>Получить код</ButtonBig>
        </fieldset>
        <fieldset className={Styles.form_fieldset}>
          <Label titleText='Email' />
          <InputText placeholder='Введите e-mail' />
        </fieldset>
        <h3 className={Styles.form_subtitle}>Выберите способ оплаты</h3>
        <div className={Styles.form_cardsContainer}>
          <Card label='Банковской картой' src={VisaLogo}>
            <img src={VisaIcon} />
          </Card>
          <Card label='С помощью USDT' src={USDTIcon} />
        </div>
        <ButtonBig>Перейти к оплате — 400$</ButtonBig>
      </form>
    </>
  )
}
