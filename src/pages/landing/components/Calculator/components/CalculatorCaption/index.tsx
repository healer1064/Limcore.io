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
          <Label titleText='Выберите количество LIMC'>
            <InputText value='40,000 LIMC' placeholder='' />
          </Label>
          <Label titleText='Сумма инвестиций в USDT'>
            <InputText value='3,800,000 USDT' placeholder='' />
          </Label>
        </div>
        <div className={Styles.block}>
          <div className={Styles.info}>
            <div className={Styles.wrap}>
              <span className={Styles.signification}>Распределение вознаграждений</span>
            </div>
          </div>
          <ButtonBig>Купить LIMC</ButtonBig>
        </div>
      </form>
    </div>
  )
}
