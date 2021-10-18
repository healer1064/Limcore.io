import React, { useState } from 'react'
import styles from './styles.module.scss'

import { Balance } from './components/Balance'
import { VirtualCard } from './components/VirtualCard'
import { StartMining } from './components/StartMining'
import { Wallet } from './components/Wallet'

export const PurseMobile = (props) => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)

  const handleCardCloseClick = () => {
    setIsCardVisible(false)
  }

  const handleWalletCloseClick = () => {
    setIsWalletVisible(false)
  }

  return (
    <div className={styles.purse}>
      <Balance />
      <div className={styles.purse__content}>
        <p>menu</p>
        {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />}
        <StartMining onButtonClick={props.onStartClick} />
        {isWalletVisible && <Wallet onCloseClick={handleWalletCloseClick} />}
      </div>
    </div>
  )
}
