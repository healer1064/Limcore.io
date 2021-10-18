import React, { FC, useState } from 'react'
import styles from './styles.module.scss'

import { Balance } from './components/Balance'
import { VirtualCard } from './components/VirtualCard'
import { StartMining } from './components/StartMining'
import { Details } from './components/Details'
import { Wallet } from './components/Wallet'
import { Transactions } from './components/Transactions'

export const PurseMobile: FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)

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

  return (
    <div className={styles.purse}>
      <Balance />
      <div className={styles.purse__content}>
        <p>menu</p>
        {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />}
        <StartMining onButtonClick={handleStartClick} />
        <Details onDetailsClick={handleDetailsClick} />
        {isWalletVisible && <Wallet onCloseClick={handleWalletCloseClick} />}
        <Transactions onProfileClick={handleProfileClick} onTransactionsClick={handleTransactionsClick} />
      </div>
    </div>
  )
}
