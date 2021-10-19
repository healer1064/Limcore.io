import React from 'react'
import styles from './styles.module.scss'
import { balance as balanceSvg } from '../../images'

export const Balance = () => {
  return (
    <div className={styles.balance}>
      <div className={styles.balance__header}>
        <h3 className={styles.balance__title}>Общий баланс</h3>
        <button className={styles.balance__button}>
          <img src={balanceSvg} />
        </button>
      </div>

      <p className={styles.balance__sumMain}>$0</p>
      <div className={styles.balance__data}>
        <p className={styles.balance__time}>24h</p>
        <p className={styles.balance__sum}>$0</p>
        <p className={styles.balance__percent}>0%</p>
      </div>
    </div>
  )
}