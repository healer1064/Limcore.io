import React from 'react'
import styles from './styles.module.scss'
import { blueArrow } from '../../images'
import { UserHasTransactions } from './components/UserHasTransactions/index'

interface ITransactionsProps {
  onProfileClick: () => void
  onTransactionsClick: () => void
  isUserHasTransactions: boolean
}

export const Transactions = ({ onProfileClick, onTransactionsClick, isUserHasTransactions }: ITransactionsProps) => {
  return (
    <div className={styles.transactions}>
      <h3 className={styles.transactions__title}>Транзакции</h3>
      <button type='button' className={styles.transactions__button} onClick={onTransactionsClick}>
        <img src={blueArrow} />
      </button>

      {isUserHasTransactions ? (
        <UserHasTransactions />
      ) : (
        <>
          <p className={styles.transactions__subtitle}>
            У вас еще нет транзакций. <br />
            Мы предоставим доступ ко всем функциям кошелька после заполнения профиля
          </p>
          <button type='button' className={styles.transactions__profileButton} onClick={onProfileClick}>
            Перейти к заполнению
          </button>
        </>
      )}
    </div>
  )
}
