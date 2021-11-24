import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import profile from '@icons/profileIcon.png'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { Wallet } from '@components/Purse/PurseDesktop/components/Wallet'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import classnames from 'classnames'
import { DetailTable } from './components/DetailTable/DetailTable'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'
import { PageBalanceUSDT } from '@components/Purse/PurseDesktop/components/PageBalanceUSDT'
import { PageCardBalance } from '@components/Purse/PurseDesktop/components/PageCardBalance'
import { Modal } from '../PurseDesktop/components/Modal'
import { ModalHeader } from '../PurseDesktop/components/ModalHeader'
import { RoadMap } from './components/RoadMap'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { setIsAuth } from '../../../pages/auth/redux/authSlice'
import { useHistory } from 'react-router'
import { UntilMiningStart } from './components/UntilMiningStart/UntilMiningStart'
import { LogoutIcon } from '@icons/LogoutIcon'
import { useTranslation } from 'react-i18next'
import { LanguagePopup } from '@components/LanguagePopup'

export const PurseDesktop = () => {
  const [t] = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isPageBalanceLIMCVisible, setIsPageBalanceLIMCVisible] = useState(false)
  const [isPageBalanceUSDTVisible, setIsPageBalanceUSDTVisible] = useState(false)
  const [isPageCardBalanceVisible, setIsPageCardBalanceVisible] = useState(false)

  const [window, setWindow] = useState('main')

  const dispatch = useAppDispatch()
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const userName = useAppSelector((state) => state.user.userData?.name)
  const userPhone = useAppSelector((state) => state.user.userData?.phone)
  const currentName = userName || userPhone
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt) || 0

  const history = useHistory()
  const [UntilMiningModalOpen, setUntilMiningModalOpen] = useState(false)

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
              {t('purse_navMain')}
            </Link>
            <Link
              className={classnames([styles.nav__link, window === 'broadcasts' && styles.nav__link_active])}
              to='broadcasts'
              onClick={() => setWindow('broadcasts')}
            >
              {t('purse_navStreams')}
            </Link>
            <LanguagePopup />
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
              handleBalanceUsdtOpenClick={() => setIsUsdtInfoVisible(true)}
              handlePageBalanceLIMCOpenClick={() => {
                setIsPageBalanceLIMCVisible(true)
                setWindow('main')
              }}
              handlePageBalanceUSDTOpenClick={() => {
                setIsPageBalanceUSDTVisible(true)
                setWindow('main')
              }}
              handlePageBalanceLIMCCloseClick={() => setIsPageBalanceLIMCVisible(false)}
              handlePageBalanceUSDTCloseClick={() => setIsPageBalanceUSDTVisible(false)}
              handlePageCardBalanceCloseClick={() => setIsPageCardBalanceVisible(false)}
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
                <a className={styles.byLimcBtn} href='https://round1.limcore.io'>
                  {t('buyLimc')}
                </a>
              </div>
              <div
                className={`${
                  isPageBalanceLIMCVisible || isPageBalanceUSDTVisible || isPageCardBalanceVisible
                    ? styles.mining_invisible
                    : styles.mining
                }`}
              >
                <h3 className={styles.detailsTitle}>{t('purse_mainingDetails')}</h3>
                <div className={styles.miningDetails}>
                  <div className={styles.miningDetailsWrapper}>
                    <Details />
                    <UntilMiningStart onClick={handleUntilMiningModalOpen} className={styles.statistics} tooltip />
                  </div>
                  <DetailTable />
                </div>
                <Modal active={UntilMiningModalOpen} setActive={handleUntilMiningModalClose} crossFlag>
                  <UntilMiningStart popup />
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
