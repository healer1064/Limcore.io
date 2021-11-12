import React, { FC } from 'react'
import styles from './styles.module.scss'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sellBlue.svg'
import tradeIcon from '@icons/changeBlue.svg'
import { TransactionsDetails } from '@components/Purse/PurseDesktop/components/Transactions/components/TransactionsDetails'
import { Transactions } from '../Transactions'

type PageBalanceUSDTPropsType = {
  usdtBalance: any
  isOpen: any
  handlePageBalanceUSDTCloseClick: () => void
  openProfile: () => void
}

export const PageBalanceUSDT: React.FC<PageBalanceUSDTPropsType> = ({
  usdtBalance,
  isOpen,
  handlePageBalanceUSDTCloseClick,
  openProfile,
}) => {
  return (
    <div className={`${isOpen ? styles.pageBalanceUSDT : styles.pageBalanceUSDT_invisible}`}>
      <button className={styles.backButton} type='button' onClick={handlePageBalanceUSDTCloseClick}>
        <svg
          className={styles.backIcon}
          width='10'
          height='15'
          viewBox='0 0 10 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.09521 1.42871L1.90474 7.61919L8.09521 13.8097'
            stroke='#3A3B3D'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Назад
      </button>
      <h1 className={styles.pageBalanceUSDT__title}>{`${usdtBalance} USDT`}</h1>
      <p className={styles.pageBalanceUSDT__subtitle}>{`$ ${usdtBalance}`}</p>
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.item_active}`}>
          <svg
            className={styles.icon}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.541 10.564L12.9131 10.564M12.9131 10.564L16.0841 7.38477M12.9131 10.564L16.0841 13.7431'
              stroke='white'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10.6559 7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H17.3318'
              stroke='white'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
          </svg>
          Пополнить
        </div>
        <div className={styles.item}>
          <svg
            className={styles.icon}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.9746 7H5.28423C4.57497 7 4 7.57497 4 8.28423V15.7158C4 16.425 4.57497 17 5.28423 17H17.3661'
              stroke='#4A70F8'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
            <path
              d='M12.6992 10.561L21.3493 10.561M21.3493 10.561L18.1702 13.7402M21.3493 10.561L18.1702 7.38193'
              stroke='#4A70F8'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Вывести
        </div>
      </div>
      {/* <TransactionsDetails onClick={() => {}} /> */}
      <Transactions onProfileClick={openProfile} onTransactionsClick={() => {}} isUserHasTransactions />
    </div>
  )
}
