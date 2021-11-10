import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { buyLimc, getWalletBalance } from '@components/Wallet/redux/walletSlice'
import { Modal } from '@components/Purse/PurseDesktop/components/Modal'
import { ModalHeader } from '@components/Purse/PurseDesktop/components/ModalHeader'
import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sell.svg'
import tradeIcon from '@icons/trade.svg'
import profile from '@icons/profileIcon.png'
import { Container } from '@components/Container'
import { InputText } from '../../../ui-kit/InputText'
import { ButtonBig } from '../../../ui-kit/ButtonBig'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { VirtualCard } from '@components/Purse/PurseMobile/components/VirtualCard'
import { StartMining } from '@components/Purse/PurseMobile/components/StartMining'
import { Statistics } from '@components/Purse/PurseDesktop/components/Statistics'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { Wallet } from '@components/Purse/PurseDesktop/components/Wallet'
import { Transactions } from '@components/Purse/PurseDesktop/components/Transactions'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'

export const PurseDesktop = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLimcBought, setIsLimcBought] = useState(false)
  const isLimcBought = useAppSelector((state) => state.auth.transactions)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)
  const [name, setName] = useState('Константин К.')

  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)

  const [viewContent, setViewContent] = useState('')

  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useAppDispatch()
  const prices = useAppSelector((state) => state.wallet.limc_price)
  const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)

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
    setIsLoading(true)
    const data = {
      limc_amount: value,
      pricing_slug: prices.slug,
    }

    const request = await dispatch(buyLimc(data))
    if (request.error?.message?.includes(400)) {
      setIsErrorVisible(true)

      // setTimeout(() => {
      //   setIsErrorVisible(false)
      // }, 2000)
    } else {
      setIsSuccessVisible(true)

      setTimeout(() => {
        setIsSuccessVisible(false)
      }, 2000)
    }
    setIsLoading(false)
    dispatch(getWalletBalance())
  }

  const handleNeedToPayClick = () => {
    setIsUsdtInfoVisible(true)
    setIsErrorVisible(false)
    setViewContent('')
  }

  return (
    <section className={styles.purse}>
      <Wallpaper />
      <Logo />
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={`${styles.nav__link} ${styles.nav__link_active} `} to='main'>
            Главная
          </Link>
          <Link className={styles.nav__link} to='broadcasts'>
            Трансляции
          </Link>
          <Link className={styles.nav__link} to='chat'>
            Чат
          </Link>
        </nav>
        <div className={styles.profileGroup}>
          <img className={styles.profileIcon} src={profile} />
          <p className={styles.profileName}>{name}</p>
        </div>
      </header>
      <div className={styles.purseContainer}>
        <div className={styles.accounts}>
          <Menu
            isUsdtInfoVisible={isUsdtInfoVisible}
            handleBalanceUsdtOpenClick={() => setIsUsdtInfoVisible(true)}
            handleBalanceUsdtCloseClick={() => setIsUsdtInfoVisible(false)}
            openPopup={() => setViewContent('balance')}
          />
        </div>
        <div className={styles.balance}>
          <Balance />
          <div className={`${styles.modalContainer} ${styles.modalContainer_invisible}`}>
            <Modal active={viewContent === 'balance'} classname={styles.balanceModal} setActive={closePopup}>
              <ModalHeader title='LIMC' onClick={closePopup} />
              <div className={styles.balanceBlock}>
                <div className={styles.block}>
                  <div className={styles.line}>
                    <img src={limcoreIcon} alt='' />
                    <span className={styles.title}>{limcBalance} LIMC</span>
                  </div>
                  <span className={styles.usd}>{}</span>
                  <div className={styles.items}>
                    <div className={`${styles.item} ${styles.item_active}`} onClick={() => setViewContent('buy')}>
                      <img className={styles.icon} src={buyIcon} alt='' />
                      <span>Купить</span>
                    </div>
                    <div className={styles.item}>
                      <img className={styles.icon} src={sellIcon} alt='' />
                      <span>Продать</span>
                    </div>
                    <div className={styles.item}>
                      <img className={styles.icon} src={tradeIcon} alt='' />
                      <span>Обменять</span>
                    </div>
                  </div>
                  <div className={styles.container}>
                    <span className={styles.trans}>Транзакции</span>
                    <span className={styles.desc}>
                      У вас еще нет транзакций. Мы предоставим доступ ко всем функциям кошелька после заполнения профиля
                    </span>
                  </div>
                  <div className={styles.nextCont}>
                    <button className={styles.next}>Перейти к заполнению</button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className={styles.mining}>
          <h3 className={styles.detailsTitle}>Детализация майнинга</h3>
          <div className={styles.miningDetails}>
            <Details />
            {isLimcBought?.length ? (
              <StartMining onButtonClick={handleStartClick} />
            ) : (
              <Statistics onClick={handleShowMoreClick} />
            )}
          </div>
        </div>
        <div className={styles.transactions}>
          {isWalletVisible && <Wallet />}
          <Transactions
            onProfileClick={handleProfileClick}
            onTransactionsClick={handleTransactionsClick}
            isUserHasTransactions={isUserHasTransactions}
          />
        </div>
      </div>
    </section>
  )
}
