import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { downloadIconWhite, sellIcon, tradeIcon } from '../../../../../../images/index'

export const LimcButtons = () => {
  const handleBuyClick = () => {
    console.log('handleBuyClick')
  }
  const handleSellClick = () => {
    console.log('handleSellClick')
  }
  const handleTradeClick = () => {
    console.log('handleTradeClick')
  }
  return (
    <ul className={styles.buttons}>
      <li className={styles.buttonsItem}>
        <button type='button' className={classNames(styles.btn, styles.btn__active)} onClick={handleBuyClick}>
          <span className={styles.btnIcon}>
            <img src={downloadIconWhite} />
          </span>
          Купить
        </button>
      </li>
      <li className={styles.buttonsItem}>
        <button type='button' className={styles.btn} onClick={handleSellClick}>
          <span className={styles.btnIcon}>
            <img src={sellIcon} />
          </span>
          Продать
        </button>
      </li>
      <li className={styles.buttonsItem}>
        <button type='button' className={styles.btn} onClick={handleTradeClick}>
          <span className={styles.btnIcon}>
            <img src={tradeIcon} />
          </span>
          Обменять
        </button>
      </li>
    </ul>
  )
}
