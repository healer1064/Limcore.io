import React from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'

export const CalculatorCaption: React.FC = () => {
  return (
    <div className={Styles.caption}>
      <h2 className={Styles.title}>Калькулятор доходности</h2>
      <span className={Styles.designation}>Данный калькулятор не учитывает</span>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <span>Возможный рост стоимости токена LIMC</span>
        </li>
        <li className={Styles.item}>
          <span>Возможный рост стоимости Chia coin и производных форков</span>
        </li>
        <li className={Styles.item}>
          <span>Появление новых форков и их стоимость</span>
        </li>
      </ul>
      <span className={Styles.designation}>Все данные актуальны на текущий момент</span>
      <form className={Styles.form}>
        <div className={Styles.block}>
          <Label className={Styles.label} titleText='Выберите количество LIMC'>
            <InputText value='40,000 LIMC' placeholder='' />
          </Label>
          <Label className={Styles.label} titleText='Сумма инвестиций в USDT'>
            <InputText value='3,800,000 USDT' placeholder='' />
          </Label>
        </div>
        <div className={Styles.block}>
          <div className={Styles.info}>
            <div className={Styles.container}>
              <span className={Styles.signification}>Распределение вознаграждений</span>
              <div className={Styles.line}>
                <div className={Styles.column}>
                  <strong>Холдер LIMC</strong>
                  <strong>85%</strong>
                </div>
                <div className={Styles.column}>
                  <strong>Limcore</strong>
                  <strong>15%</strong>
                </div>
              </div>
              <div className={Styles.wrap}>
                <div className={Styles.inner}>
                  <span>Доход с 85%</span>
                  <span>21,6% годовых в $</span>
                </div>
                <div className={Styles.row}>
                  <div className={Styles.inner}>
                    <span>В час</span>
                    <span>$93,6</span>
                  </div>
                  <div className={Styles.inner}>
                    <span>В день</span>
                    <span>$2,248.7</span>
                  </div>
                  <div className={Styles.inner}>
                    <span>В месяц</span>
                    <span>$68,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonBig>Купить LIMC</ButtonBig>
        </div>
      </form>
    </div>
  )
}
