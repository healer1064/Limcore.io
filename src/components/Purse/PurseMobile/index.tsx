import React, { FC, useState } from 'react'
import styles from './styles.module.scss'

import { Balance } from './components/Balance'
import { Menu } from './components/Menu'
import { VirtualCard } from './components/VirtualCard'
import { StartMining } from './components/StartMining'
import { Details } from './components/Details'
import { Wallet } from './components/Wallet'
import { Transactions } from './components/Transactions'
import { Statistics } from './components/Statistics'

export const PurseMobile: FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isLimcBought, setIsLimcBought] = useState(false)
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)

  const handleCardCloseClick = () => {
    setIsCardVisible(false)
  }

  const handleWalletCloseClick = () => {
    setIsWalletVisible(false)
  }

  const handleStartClick = () => {
    console.log('Start mining')
  }

  const handleProfileClick = () => {
    console.log('Profile click')
  }

  const handleTransactionsClick = () => {
    console.log('Transactions click')
  }

  const handleDetailsClick = () => {
    console.log('Детализазия майнинга')
  }

  const handleShowMoreClick = () => {
    console.log('Показать больше')
  }

  return (
    <div className={styles.purse}>
      <Balance />
      <Menu />
      <div className={styles.purse__content}>
        {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />}
        {isLimcBought ? <StartMining onButtonClick={handleStartClick} /> : <Statistics onClick={handleShowMoreClick} />}
        <Details onDetailsClick={handleDetailsClick} />
        {isWalletVisible && <Wallet onCloseClick={handleWalletCloseClick} />}
        <Transactions
          onProfileClick={handleProfileClick}
          onTransactionsClick={handleTransactionsClick}
          isUserHasTransactions={isUserHasTransactions}
        />
      </div>
    </div>
  )
}
