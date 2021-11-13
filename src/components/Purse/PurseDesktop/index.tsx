import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { buyLimc, getWalletBalance } from '@components/Wallet/redux/walletSlice'
import buyIcon from '@icons/buy.svg'
import sellIcon from '@icons/sellBlue.svg'
import tradeIcon from '@icons/changeBlue.svg'
import profile from '@icons/profileIcon.png'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { StartMining } from '@components/Purse/PurseMobile/components/StartMining'
import { Statistics } from '@components/Purse/PurseDesktop/components/Statistics'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { Wallet } from '@components/Purse/PurseDesktop/components/Wallet'
import { Transactions } from '@components/Purse/PurseDesktop/components/Transactions'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import classnames from 'classnames'
import { DetailTable } from './components/DetailTable/DetailTable'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { TransactionsDetails } from '@components/Purse/PurseDesktop/components/Transactions/components/TransactionsDetails'
import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'
import { PageBalanceUSDT } from '@components/Purse/PurseDesktop/components/PageBalanceUSDT'
import { PageCardBalance } from '@components/Purse/PurseDesktop/components/PageCardBalance'
import { Modal } from '../PurseDesktop/components/Modal'
import { ModalHeader } from '../PurseDesktop/components/ModalHeader'
import { RoadMap } from './components/RoadMap'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { setIsAuth } from '../../../pages/auth/redux/auth.slice'
import { useHistory } from 'react-router'
import { UntilMiningStart } from './components/UntilMiningStart/UntilMiningStart'
import { LogoutIcon } from '@icons/LogoutIcon'

export const PurseDesktop = () => {
  const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isPageBalanceLIMCVisible, setIsPageBalanceLIMCVisible] = useState(false)
  const [isPageBalanceUSDTVisible, setIsPageBalanceUSDTVisible] = useState(false)
  const [isPageCardBalanceVisible, setIsPageCardBalanceVisible] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLimcBought, setIsLimcBought] = useState(false)
  const isLimcBought = useAppSelector((state) => state.auth.transactions)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)

  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)

  const [viewContent, setViewContent] = useState('')

  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [window, setWindow] = useState('main')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const dispatch = useAppDispatch()
  const prices = useAppSelector((state) => state.wallet.limc_price)
  // const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)
  const limcBalance = useAppSelector((state) => state.authNew.walletConnectLimc) || 0
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const userName = useAppSelector((state) => state.user.userData?.name)
  const userPhone = useAppSelector((state) => state.user.userData?.phone)
  const currentName = userName || userPhone
  const usdtBalance = useAppSelector((state) => state.authNew.walletConnectUsdt) || 0

  const handleSetValue = (event) => setValue(event.target.value)
  const history = useHistory()
  const [UntilMiningModalOpen, setUntilMiningModalOpen] = useState(false)

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

  const handleProfileClose = () => {
    return setIsProfileOpen(false)
  }

  const handleProfileOpen = () => {
    setIsProfileOpen(true)
  }

  const handleUntilMiningModalClose = () => {
    setUntilMiningModalOpen(false)
  }

  const handleUntilMiningModalOpen = () => {
    console.log('qq')
    setUntilMiningModalOpen(true)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    location.reload()
  }

  return (
    <>
      <Wallpaper />
      <section className={styles.purse}>
        <header className={styles.header}>
          <Logo />
          <nav className={styles.nav}>
            <Link
              className={classnames([styles.nav__link, window === 'main' && styles.nav__link_active])}
              to='main'
              onClick={() => setWindow('main')}
            >
              Главная
            </Link>
            <Link
              className={classnames([styles.nav__link, window === 'broadcasts' && styles.nav__link_active])}
              to='broadcasts'
              onClick={() => setWindow('broadcasts')}
            >
              Трансляции
            </Link>
            {/* <Link
      className={classnames([styles.nav__link, isChatOpen && styles.nav__link_active])}
      to='chat'
      onClick={() => setIsChatOpen(true)}
    >
      Чат
    </Link> */}
          </nav>
          <div className={styles.profileGroup} onClick={handleProfileOpen}>
            <img className={styles.profileIcon} src={profile} />
            <p className={styles.profileName}>{currentName}</p>
            <button className={styles.logoutBtn} onClick={onLogout}>
              <LogoutIcon />
            </button>
          </div>
          <Modal active={isProfileOpen} setActive={handleProfileClose} crossFlag>
            <ModalHeader title={currentName} onClick={handleProfileClose} />
            <ProfileMobile />
          </Modal>
        </header>
        <div className={styles.purseContainer}>
          <div className={styles.accounts}>
            <Menu
              isUsdtInfoVisible={isUsdtInfoVisible}
              handleBalanceUsdtOpenClick={() => setIsUsdtInfoVisible(true)}
              handleBalanceUsdtCloseClick={() => setIsUsdtInfoVisible(false)}
              openPopup={() => setViewContent('balance')}
              handlePageBalanceLIMCOpenClick={() => {
                setIsPageBalanceLIMCVisible(true)
                setWindow('main')
              }}
              handlePageBalanceUSDTOpenClick={() => {
                setIsPageBalanceUSDTVisible(true)
                setWindow('main')
              }}
              handlePageCardBalanceOpenClick={() => setIsPageCardBalanceVisible(true)}
              handlePageBalanceLIMCCloseClick={() => setIsPageBalanceLIMCVisible(false)}
              handlePageBalanceUSDTCloseClick={() => setIsPageBalanceUSDTVisible(false)}
              handlePageCardBalanceCloseClick={() => setIsPageCardBalanceVisible(false)}
              isPageBalanceLIMCVisible={isPageBalanceLIMCVisible}
              isPageBalanceUSDTVisible={isPageBalanceUSDTVisible}
              isPageCardBalanceVisible={isPageCardBalanceVisible}
            />
          </div>
          {window === 'broadcasts' && <BroadcastsDesktop />}
          {window === 'main' && (
            <>
              <PageCardBalance
                usdtBalance={usdtBalance}
                isOpen={isPageCardBalanceVisible}
                handlePageCardBalanceCloseClick={() => setIsPageCardBalanceVisible(false)}
              />
              <PageBalanceLIMC
                limcBalance={limcBalance}
                isOpen={isPageBalanceLIMCVisible}
                handlePageBalanceLIMCCloseClick={() => setIsPageBalanceLIMCVisible(false)}
                openProfile={handleProfileOpen}
              />
              <PageBalanceUSDT
                usdtBalance={usdtBalance}
                isOpen={isPageBalanceUSDTVisible}
                handlePageBalanceUSDTCloseClick={() => setIsPageBalanceUSDTVisible(false)}
                openProfile={handleProfileOpen}
              />
              <div
                className={`${
                  isPageBalanceLIMCVisible || isPageBalanceUSDTVisible || isPageCardBalanceVisible
                    ? styles.balance_invisible
                    : styles.balance
                }`}
              >
                <Balance />
              </div>
              <div
                className={`${
                  isPageBalanceLIMCVisible || isPageBalanceUSDTVisible || isPageCardBalanceVisible
                    ? styles.roadMap_invisible
                    : styles.roadMap
                }`}
              >
                <RoadMap />
                <a className={styles.byLimcBtn} href='https://crowdsale.limcore.io' target='_blank' rel='noreferrer'>
                  Купить LIMC
                </a>
              </div>
              <div
                className={`${
                  isPageBalanceLIMCVisible || isPageBalanceUSDTVisible || isPageCardBalanceVisible
                    ? styles.mining_invisible
                    : styles.mining
                }`}
              >
                <h3 className={styles.detailsTitle}>Детализация майнинга</h3>
                <div className={styles.miningDetails}>
                  <div className={styles.miningDetailsWrapper}>
                    <Details />
                    {isLimcBought?.length ? (
                      <StartMining onButtonClick={handleStartClick} />
                    ) : (
                      <Statistics onClick={handleUntilMiningModalOpen} />
                    )}
                  </div>
                  <DetailTable />
                </div>
                <Modal active={UntilMiningModalOpen} setActive={handleUntilMiningModalClose} crossFlag>
                  <UntilMiningStart />
                </Modal>
              </div>
              <div className={styles.wallet_invisible}>
                <Wallet />
              </div>
              <div
                className={`${
                  isPageBalanceLIMCVisible || isPageBalanceUSDTVisible || isPageCardBalanceVisible
                    ? styles.transactions_invisible
                    : styles.transactions
                }`}
              >
                {/* <Transactions
                  onProfileClick={handleProfileOpen}
                  onTransactionsClick={handleTransactionsClick}
                  isUserHasTransactions={isUserHasTransactions}
                /> */}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
