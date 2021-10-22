import React from 'react'
import Styles from './style.module.scss'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'
import { ButtonForCode } from '../ButtonForCode'
import { InputText } from '../../../../ui-kit/InputText'
import { Label } from '../../../../ui-kit/Label'
import { Card } from '../Card'
import VisaIcon from '../../../../assets/icons/Visa-symbol.png'
import VisaLogo from '../../../../assets/icons/Visa-logo.png'
import USDTIcon from '../../../../assets/icons/USDT-icon.png'

export const Form = ({ title, content, promo, message }) => {
  return (
    <>
      <form className={Styles.form}>
        <h2 className={Styles.form__title}>{title}</h2>
        <p className={Styles.form__paragraph_promo}>{promo}</p>
        <p className={Styles.form__paragraph}>{content}</p>
        <fieldset className={Styles.form__fieldset}>
          <Label titleText='Сумма покупки'>
            <InputText placeholder='Введите сумму в $' className={Styles.form__input} />
          </Label>
          <button className={Styles.form__switchIcon} type='button' />
          <Label titleText='Количество токенов'>
            <InputText placeholder='Введите количество токенов' className={Styles.form__input} />
          </Label>
        </fieldset>
        <h3 className={Styles.form__subtitle}>Введите телефон или email</h3>
        <fieldset className={Styles.form__fieldset}>
          <Label titleText={'Телефон' || 'Мы отправили код на номер'} className={Styles.form__label}>
            {/* <div className={Styles.form__labelContainer}> */}
            {/*  <span className={Styles.form__notification_invisible}>+7 (999) 098 65−34</span> */}
            {/*  <button className={Styles.form__changeButton_invisible} type='button'> */}
            {/*    Изменить */}
            {/*  </button> */}
            {/* </div> */}
            <InputText placeholder='Введите телефон' className={Styles.form__input} />
          </Label>
          <span className={Styles.form__notification_invisible}>{message}</span>
          <button className={Styles.form__changeButton_invisible} type='button'>
            Отправить новый код
          </button>
          <ButtonForCode>Получить код</ButtonForCode>
        </fieldset>
        <fieldset className={Styles.form__fieldset}>
          <Label titleText='Email'>
            <InputText placeholder='Введите e-mail' className={Styles.form__input} />
          </Label>
        </fieldset>
        <h3 className={Styles.form__subtitle}>Выберите способ оплаты</h3>
        <div className={Styles.form__cardsContainer}>
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
