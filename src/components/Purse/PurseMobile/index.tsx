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
import { useAppSelector } from '@app/redux/hooks'

import { Container } from '../../Container'
import { ButtonBig } from '../../../ui-kit/ButtonBig'
import { InputText } from '../../../ui-kit/InputText'

import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sell.svg'
import tradeIcon from '@icons/trade.svg'

export const PurseMobile: FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isLimcBought, setIsLimcBought] = useState(false)
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)

  const [viewContent, setViewContent] = useState('')

  const [value, setValue] = useState('')
  const handlerClick = (event) => setValue(event.target.value)

  // const [displayPopup, setDisplayPopup] = useState(false)
  const closePopup = () => setViewContent('')

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
      {viewContent === 'balance' && (
        <Container title='Баланс LIMC' onClick={closePopup}>
          <div className={styles.block}>
            <div className={styles.line}>
              <img src={limcoreIcon} alt='' />
              <span className={styles.title}>0 LIMC</span>
            </div>
            <span className={styles.usd}>$0</span>
            <div className={styles.items}>
              <div className={`${styles.item} ${styles.item_active}`}>
                <img src={buyIcon} alt='' />
                <span>Купить</span>
              </div>
              <div className={styles.item}>
                <img src={sellIcon} alt='' />
                <span>Продать</span>
              </div>
              <div className={styles.item}>
                <img src={tradeIcon} alt='' />
                <span>Обменять</span>
              </div>
            </div>
            <div className={styles.container}>
              <span className={styles.trans}>Транзакции</span>
              <span className={styles.desc}>
                У вас еще нет транзакций. Мы предоставим доступ ко всем функциям кошелька после заполнения профиля
              </span>
            </div>
            <ButtonBig className={styles.next} onClick={() => setViewContent('buy')}>
              Перейти к заполнению
            </ButtonBig>
          </div>
        </Container>
      )}
      {viewContent === 'buy' && (
        <Container title='Покупка LIMC' onClick={closePopup}>
          <span className={styles.text}>Цена за LIMC</span>
          <span className={styles.text}>Lock time</span>
          <InputText onChange={(event) => handlerClick(event)} type='number' value={value} />
          <ButtonBig className={styles.button} disabled={!value}>
            Купить
          </ButtonBig>
        </Container>
      )}
      <Balance />
      <Menu /* openPopup={openPopup} */ />
      <div className={styles.purse__content}>
        {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />}
        <ButtonBig className={styles.buy} onClick={() => setViewContent('balance')}>
          Купить LIMC
        </ButtonBig>
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
