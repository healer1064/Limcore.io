import React from 'react'
import styles from './styles.module.scss'
import { blueArrow } from '../../images'

export const Transactions = (props) => {
  return (
    <div className={styles.transactions}>
      <h3 className={styles.transactions__title}>Транзакции</h3>
      <p className={styles.transactions__subtitle}>
        У вас еще нет транзакций. <br />
        Мы предоставим доступ ко всем функциям кошелька после заполнения профиля
      </p>
      <button type='button' className={styles.transactions__profileButton} onClick={props.onProfileClick}>
        Перейти к заполнению
      </button>
      <button type='button' className={styles.transactions__button} onClick={props.onTransactionsClick}>
        <img src={blueArrow} />
      </button>
    </div>
  )
}
