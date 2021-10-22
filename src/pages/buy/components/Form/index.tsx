import React, { useState } from 'react'
import Styles from './style.module.scss'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'
import { ButtonForCode } from '../ButtonForCode'
import { InputText } from '../../../../ui-kit/InputText'
import { Label } from '../../../../ui-kit/Label'
import { Card } from '../Card'
import VisaIcon from '../../../../assets/icons/Visa-symbol.png'
import VisaLogo from '../../../../assets/icons/Visa-logo.png'
import USDTIcon from '../../../../assets/icons/USDT-icon.png'

export const Form = ({ title, content, promo }) => {
  const [promoApplied, setPromoApplied] = useState(false)
  const [emptyNumberError, setEmptyNumberError] = useState(false)
  const [wrongFormatError, setWrongFormatError] = useState(false)
  const [wrongCodeError, setWrongCodeError] = useState(false)
  const [codeIsSent, setCodeIsSent] = useState(false)
  const [codeApplied, setCodeApplied] = useState(false)
  const [numberConfirmed, setNumberConfirmed] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('+7 (999) 098 65−34')

  return (
    <>
      <form className={Styles.form}>
        <h2 className={Styles.form__title}>{title}</h2>
        <p className={`${promoApplied ? Styles.form__paragraph_promo : Styles.form__paragraph_promo_invisible}`}>
          {promo}
        </p>
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
          <Label
            titleText={
              (numberConfirmed ? '' : 'Телефон') &&
              (codeIsSent || codeApplied || wrongCodeError ? 'Мы отправили код на номер' : 'Телефон')
            }
          >
            <span
              className={
                codeIsSent || codeApplied || wrongCodeError || numberConfirmed
                  ? Styles.form__phoneNumber
                  : Styles.form__phoneNumber_invisible
              }
            >
              {numberConfirmed ? 'Телефон' : phoneNumber}
              <button className={Styles.form__changeButton} type='button'>
                Изменить
              </button>
            </span>
            <InputText
              placeholder={
                (codeIsSent ? '_ _ _ _' : 'Введите телефон') && (numberConfirmed ? phoneNumber : 'Введите телефон')
              }
              className={
                emptyNumberError || wrongFormatError || wrongCodeError ? Styles.form__error : Styles.form__input
              }
            />
          </Label>
          <span
            className={
              emptyNumberError || wrongFormatError || wrongCodeError
                ? Styles.form__notification
                : Styles.form__notification_invisible
            }
          >
            {emptyNumberError ? 'Вы забыли ввести номер телефона' : ''}
            {wrongFormatError ? 'Неверный формат телефона' : ''}
            {wrongCodeError ? 'Неверный код. Попробуйте еще раз' : ''}
            {codeIsSent ? 'Получить новый код можно через 00:41' : ''}
          </span>
          <span className={codeIsSent ? Styles.form__newCodeNotification : Styles.form__notification_invisible}>
            {codeIsSent ? 'Получить новый код можно через 00:41' : ''}
          </span>
          <button
            className={
              wrongCodeError || codeApplied ? Styles.form__newCodeButton : Styles.form__newCodeButton_invisible
            }
            type='button'
          >
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
