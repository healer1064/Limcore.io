import React from 'react'
import styles from './styles.module.scss'

const BalanceString = (text, data) => (
  <li className={styles.balanceString}>
    <p className={styles.balanceString__text}>{text}</p>
    <p className={styles.balanceString__data}>{data}</p>
  </li>
)

export const DetalizationUp = ({ summary, xch, forks }) => {
  return (
    <ul className={styles.details__balance}>
      {BalanceString('Общий доход', summary)}
      {BalanceString('XCH 24h', xch)}
      {BalanceString('Все форки 24h', forks)}
    </ul>
  )
}
