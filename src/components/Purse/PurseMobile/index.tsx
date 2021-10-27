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
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { buyLimc } from '../../Wallet/redux/walletSlice'

import { Container } from '../../Container'
import { ButtonBig } from '../../../ui-kit/ButtonBig'
import { InputText } from '../../../ui-kit/InputText'

import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sell.svg'
import tradeIcon from '@icons/trade.svg'
import { Modal } from './components/Modal'

export const PurseMobile: FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isLimcBought, setIsLimcBought] = useState(false)
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)
  const [isErrorVisible, setIsErrorVisible] = useState(false)

  const [viewContent, setViewContent] = useState('')

  const [value, setValue] = useState('')

  const dispatch = useAppDispatch()
  const prices = useAppSelector((state) => state.wallet.limc_price)
  const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)
  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)

  const handleSetValue = (event) => setValue(event.target.value)

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

  const handleBuyLIMK = async () => {
    const data = {
      limc_amount: value,
      pricing_slug: prices.lock_time,
    }

    const request = await dispatch(buyLimc(data))
    if (request.error.message.includes(400)) {
      setIsErrorVisible(true)

      setTimeout(() => {
        setIsErrorVisible(false)
      }, 2000)
    }
  }

  return (
    <div className={styles.purse}>
      {viewContent === 'balance' && (
        <Container title='Баланс LIMC' onClick={closePopup}>
          <div className={styles.block}>
            <div className={styles.line}>
              <img src={limcoreIcon} alt='' />
              <span className={styles.title}>{limcBalance} LIMC</span>
            </div>
            <span className={styles.usd}>$0</span>
            <div className={styles.items}>
              <div className={`${styles.item} ${styles.item_active}`} onClick={() => setViewContent('buy')}>
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
            <ButtonBig className={styles.next}>Перейти к заполнению</ButtonBig>
          </div>
        </Container>
      )}
      {viewContent === 'buy' && (
        <Container title='Покупка LIMC' onClick={closePopup}>
          <span className={styles.text}>Цена за LIMC: {prices.usdt_amount}</span>
          <span className={styles.text}>Locktime: {prices.lock_time}</span>
          <InputText onChange={(event) => handleSetValue(event)} type='number' value={value} />
          <ButtonBig onClick={handleBuyLIMK} className={styles.button} disabled={!value}>
            Купить
          </ButtonBig>
        </Container>
      )}

      <Modal active={isErrorVisible} style={{ zIndex: 1001, backgroundColor: 'transparent' }}>
        <div className={styles.errorModal}>У вас недостаточно средств.</div>
      </Modal>

      <Balance />
      <Menu openPopup={() => setViewContent('balance')} />
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
