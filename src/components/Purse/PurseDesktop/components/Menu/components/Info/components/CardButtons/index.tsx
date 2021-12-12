import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { addMoneyIcon, transferIcon } from '../../../../../../images/index'

export const CardButtons = () => {
  const handleAddMoneyClick = () => {
    console.log('handleAddMoneyClick')
  }
  const handleTransferClick = () => {
    console.log('handleTransferClick')
  }
  return (
    <ul className={styles.buttons}>
      <li className={styles.buttonsItem}>
        <button type='button' className={classNames(styles.btn, styles.btn__active)} onClick={handleAddMoneyClick}>
          <span className={styles.btnIcon}>
            <img src={addMoneyIcon} alt='icon' />
          </span>
          Пополнить
        </button>
      </li>
      <li className={styles.buttonsItem}>
        <button type='button' className={styles.btn} onClick={handleTransferClick}>
          <span className={styles.btnIcon}>
            <img src={transferIcon} alt='icon' />
          </span>
          Перевести
        </button>
      </li>
    </ul>
  )
}
