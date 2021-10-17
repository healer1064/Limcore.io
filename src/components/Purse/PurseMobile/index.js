import React from 'react'
import styles from './styles.module.scss'
import CardVirtual from '../images/card-virtual.svg'

// Картинки сделать компонентами

export const PurseMobile = (props) => {
  return (
    <div className={styles.purse}>
      <div className={styles.balance}>
        <div className={styles.balance__header}>
          <h3 className={styles.balance__title}>Общий баланс</h3>
          <button className={styles.balance__button}>
            <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.14258 1.85638L6.85686 7.57067L1.14258 13.285'
                stroke='#BCCBFF'
                stroke-width='1.8'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
        <p className={styles.balance__sumMain}>$0</p>
        <div className={styles.balance__data}>
          <p className={styles.balance__time}>24h</p>
          <p className={styles.balance__sum}>$0</p>
          <p className={styles.balance__percent}>0%</p>
        </div>
      </div>

      {/* <ul className={styles.menu}>
        <li></li>
      </ul> */}

      <div className={styles.card}>
        <p className={styles.card__title}>Выпустите виртуальную карту</p>
        <img src={CardVirtual} />
      </div>
    </div>
  )
}
