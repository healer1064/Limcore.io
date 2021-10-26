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

import { Container } from '../../Container'
import { ButtonBig } from '../../../ui-kit/ButtonBig'
import { InputText } from '../../../ui-kit/InputText'

export const PurseMobile: FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isLimcBought, setIsLimcBought] = useState(false)
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)

  const [value, setValue] = useState('')
  const handlerClick = (event) => setValue(event.target.value)

  const [displayPopup, setDisplayPopup] = useState(false)
  const openPopup = (bool) => setDisplayPopup(bool)
  const closePopup = (bool) => setDisplayPopup(bool)

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
  const handleShowMoreClick = () => {
    console.log('Показать больше')
  }

  return (
    <div className={styles.purse}>
      {displayPopup && (
        <Container title='Покупка LIMC' onClick={() => closePopup(false)}>
          <span className={styles.text}>Цена за LIMC</span>
          <span className={styles.text}>Lock time</span>
          <InputText onChange={(event) => handlerClick(event)} type='number' value={value} />
          <ButtonBig className={styles.button} disabled={!value}>
            Купить
          </ButtonBig>
        </Container>
      )}

      <Balance />
      <Menu openPopup={openPopup} />
      <div className={styles.purse__content}>
        {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />}
        {isLimcBought ? <StartMining onButtonClick={handleStartClick} /> : <Statistics onClick={handleShowMoreClick} />}
        <Details />
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
