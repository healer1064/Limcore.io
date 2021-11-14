import React, { FC } from 'react'
import styles from './styles.module.scss'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sellBlue.svg'
import tradeIcon from '@icons/changeBlue.svg'
import { TransactionsDetails } from '@components/Purse/PurseDesktop/components/Transactions/components/TransactionsDetails'
import { Transactions } from '../Transactions'

type PageBalanceLIMCPropsType = {
  limcBalance: any
  isOpen: any
  handlePageBalanceLIMCCloseClick: () => void
  openProfile: () => void
}

export const PageBalanceLIMC: React.FC<PageBalanceLIMCPropsType> = ({
  limcBalance,
  isOpen,
  handlePageBalanceLIMCCloseClick,
  openProfile,
}) => {
  return (
    <div className={`${isOpen ? styles.pageBalanceLIMC : styles.pageBalanceLIMC_invisible}`}>
      <button className={styles.backButton} type='button' onClick={handlePageBalanceLIMCCloseClick}>
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
      <h1 className={styles.pageBalanceLIMC__title}>{`${limcBalance} LIMC`}</h1>
      <p className={styles.pageBalanceLIMC__subtitle}>{`$ ${limcBalance}`}</p>
      <div className={styles.items}>
        <button type='button' className={`${styles.item} ${styles.item_active}`}>
          <a className={styles.buyLink} href='https://round1.limcore.io'>
            <img className={styles.icon} src={buyIcon} alt='' />
            Купить
          </a>
        </button>
        <span className={styles.lockup}>Lock-up период 6 месяцев</span>
        {/* <div className={styles.item}> */}
        {/*  <img className={styles.icon} src={sellIcon} alt='' /> */}
        {/*  Продать */}
        {/* </div> */}
        {/* <div className={styles.item}> */}
        {/*  <img className={styles.icon} src={tradeIcon} alt='' /> */}
        {/*  Обменять */}
        {/* </div> */}
      </div>
      {/* <TransactionsDetails onClick={() => {}} /> */}
      <Transactions onProfileClick={openProfile} onTransactionsClick={() => {}} isUserHasTransactions />
    </div>
  )
}
