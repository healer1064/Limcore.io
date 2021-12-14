import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

const BalanceString = (text, data) => (
  <li className={styles.balanceString}>
    <p className={styles.balanceString__text}>{text}</p>
    <data className={styles.balanceString__data}>{data}</data>
  </li>
)

export const DetalizationUp = ({ summary, xch, forks }) => {
  const [t] = useTranslation()

  return (
    <ul className={styles.details__balance}>
      {BalanceString(t('purse_income'), summary)}
      {BalanceString(t('purse_xch'), xch)}
      {BalanceString(t('purse_forks'), forks)}
    </ul>
  )
}
