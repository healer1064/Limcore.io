import React, { FC } from 'react'
import styles from './styles.module.scss'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sellBlue.svg'
import tradeIcon from '@icons/changeBlue.svg'
import { TransactionsDetails } from '@components/Purse/PurseDesktop/components/Transactions/components/TransactionsDetails'

type PageCardBalancePropsType = {
  usdtBalance: any
  isOpen: any
  handlePageCardBalanceCloseClick: () => void
}

export const PageCardBalance: React.FC<PageCardBalancePropsType> = ({
  usdtBalance,
  isOpen,
  handlePageCardBalanceCloseClick,
}) => {
  return (
    <div className={`${isOpen ? styles.pageCardBalance : styles.pageCardBalance_invisible}`}>
      <button className={styles.backButton} type='button' onClick={handlePageCardBalanceCloseClick}>
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
      <h1 className={styles.pageCardBalance__title}>{`$ ${usdtBalance}`}</h1>
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
              d='M5.57058 14.2064H4.28423C3.57497 14.2064 3 13.6314 3 12.9221V6.50786C3 5.7986 3.57497 5.22363 4.28423 5.22363H9.81089H14.3576C15.0669 5.22363 15.6418 5.7986 15.6418 6.50786V7.57148M6.44055 9.52931C6.71 11.18 7.5713 14.8003 13.4174 14.3551M13.4174 14.3551L11.4788 12.3054M13.4174 14.3551L11.4788 16.4048'
              stroke='#4A70F8'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10.9059 10.0293H15.2895H19.8687C20.4935 10.0293 21.0001 10.5651 21.0001 11.2259V17.579C21.0001 18.2399 20.4935 18.7757 19.8687 18.7757H9.80058C9.09133 18.7757 8.51636 18.2007 8.51636 17.4914V16.6811'
              stroke='#4A70F8'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
          </svg>
          Перевести
        </div>
      </div>
      <TransactionsDetails onClick={() => {}} />
    </div>
  )
}
