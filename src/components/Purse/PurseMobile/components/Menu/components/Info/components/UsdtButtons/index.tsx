import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { addMoneyIcon, withdrawIcon } from '../../../../../../images/index'

export const UsdtButtons = () => {
  const handleAddMoneyClick = () => {
    console.log('handleAddMoneyClick')
  }
  const handleWithdrawClick = () => {
    console.log('handleWithdrawClick')
  }
  return (
    <ul className={styles.buttons}>
      <li className={styles.buttonsItem}>
        <button type='button' className={classNames(styles.btn, styles.btn__active)} onClick={handleAddMoneyClick}>
          <span className={styles.btnIcon}>
            <img src={addMoneyIcon} />
          </span>
          Пополнить
        </button>
      </li>
      <li className={styles.buttonsItem}>
        <button type='button' className={styles.btn} onClick={handleWithdrawClick}>
          <span className={styles.btnIcon}>
            <img src={withdrawIcon} />
          </span>
          Вывести
        </button>
      </li>
    </ul>
  )
}
