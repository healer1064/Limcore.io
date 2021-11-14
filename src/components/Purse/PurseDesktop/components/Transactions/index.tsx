import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt, s7 } from '../../images/index'
import { Modal } from '../Modal'
import { TransactionsDetails } from './components/TransactionsDetails/index'
import { Calendar } from '@components/Purse/PurseDesktop/components/Transactions/components/Calendar'

interface ITransactionsProps {
  onProfileClick: () => void
  onTransactionsClick: () => void
  isUserHasTransactions: boolean
}

export const Transactions = ({ onProfileClick, onTransactionsClick, isUserHasTransactions }: ITransactionsProps) => {
  const [isTransactionsVisible, setIsTransactionsVisible] = useState(false)
  // Временные данные для прокидки в транзакции, когда будет ясен объект с бэка можно будет все в порядок привести
  const tempDataForTransactions = [
    { img: balanceLimc, title: 'LIMC', sum: '+120 LIMC', isSwitch: false },
    { img: s7, title: 'S7 Airlines', sum: '−$3240', cardInfo: 'c карты *2774', isSwitch: false },
    {
      img: balanceLimc,
      title: 'LIMC',
      sum: '−$324',
      cardInfo: '−120 LIMC',
      isSwitch: true,
      img2: balanceUsdt,
      title2: 'USDT',
    },
  ]

  const handleTransactionsOpen = () => {
    setIsTransactionsVisible(true)
  }

  const handleTransactionsClose = () => {
    setIsTransactionsVisible(false)
  }

  return (
    <div className={styles.transactions}>
      {/* <h3 className={styles.transactions__title}>Транзакции</h3> */}
      <Modal active={isTransactionsVisible} setActive={handleTransactionsClose}>
        <TransactionsDetails onClick={handleTransactionsClose} />
      </Modal>
      <p className={styles.transactions__subtitle}>
        {/* У&nbsp;вас еще нет транзакций. Мы&nbsp;предоставим доступ ко&nbsp;всем функциям кошелька после заполнения */}
        {/* профиля. */}
        Заполните профиль, чтобы в будущем восстановить аккаунт.
      </p>
      <div className={styles.transactions__cont}>
        <button type='button' className={styles.transactions__profileButton} onClick={onProfileClick}>
          Перейти к заполнению
        </button>
      </div>
      {/* {isUserHasTransactions ? (
        <UserHasTransactions data={tempDataForTransactions} />
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
      )} */}
    </div>
  )
}
