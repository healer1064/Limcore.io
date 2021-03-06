import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { addMoneyIcon, withdrawIcon } from '../../../../../../images/index'

export const UsdtButtons = () => {
  const handleWithdrawClick = () => {
    console.log('handleWithdrawClick')
  }
  return (
    <>
      <ul className={styles.buttons}>
        <li className={styles.buttonsItem}>
          <button type='button' className={classNames(styles.btn, styles.btn__active)}>
            <span className={styles.btnIcon}>
              <img src={addMoneyIcon} alt='icon' />
            </span>
            Пополнить
          </button>
        </li>
        <li className={styles.buttonsItem}>
          <button type='button' className={styles.btn} onClick={handleWithdrawClick}>
            <span className={styles.btnIcon}>
              <img src={withdrawIcon} alt='icon' />
            </span>
            Вывести
          </button>
        </li>
      </ul>
      {/* {addInfoVisible && (
        <div className={styles.addInfoCont}>
          <p className={styles.addInfo}>Уважаемые пользователи! Приём USDT возможен только в сети ERC-20</p>
          <div className={styles.addressContainer}>
            <p className={styles.addressName}>Адрес вашего кошелька:</p>
            <span className={styles.addressValue}>{walletAddress}</span>
          </div>
        </div>
      )} */}
    </>
  )
}
