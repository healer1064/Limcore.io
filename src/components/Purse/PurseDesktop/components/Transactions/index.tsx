import React, { useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import styles from './styles.module.scss'
import { Modal } from '@components/Modal/index'
import { TransactionsDetails } from './components/TransactionsDetails/index'
import { useTranslation } from 'react-i18next'

interface ITransactionsProps {
  onProfileClick: () => void
}

export const Transactions = ({ onProfileClick }: ITransactionsProps) => {
  const [t] = useTranslation()
  const userData = useAppSelector((state) => state.user.userData)
  const [isTransactionsVisible, setIsTransactionsVisible] = useState(false)
  // Временные данные для прокидки в транзакции, когда будет ясен объект с бэка можно будет все в порядок привести
  // const tempDataForTransactions = [
  //   { img: balanceLimc, title: 'LIMC', sum: '+120 LIMC', isSwitch: false },
  //   { img: s7, title: 'S7 Airlines', sum: '−$3240', cardInfo: 'c карты *2774', isSwitch: false },
  //   {
  //     img: balanceLimc,
  //     title: 'LIMC',
  //     sum: '−$324',
  //     cardInfo: '−120 LIMC',
  //     isSwitch: true,
  //     img2: balanceUsdt,
  //     title2: 'USDT',
  //   },
  // ]

  const handleTransactionsClose = () => {
    setIsTransactionsVisible(false)
  }

  return (
    <div className={styles.transactions}>
      <Modal active={isTransactionsVisible} setActive={handleTransactionsClose}>
        <TransactionsDetails />
      </Modal>
      {userData?.profile === null && (
        <>
          <p className={styles.transactions__subtitle}>{t('purse_fillToRestore')}</p>
          <div className={styles.transactions__cont}>
            <button type='button' className={styles.transactions__profileButton} onClick={onProfileClick}>
              {t('purse_goFilling')}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
