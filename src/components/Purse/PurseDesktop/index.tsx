import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { Wallet } from '@components/Purse/PurseDesktop/components/Wallet'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'
import { DetailTable } from './components/DetailTable/DetailTable'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'
import { PageBalanceUSDT } from '@components/Purse/PurseDesktop/components/PageBalanceUSDT'
import { PageCardBalance } from '@components/Purse/PurseDesktop/components/PageCardBalance'
import { Modal } from '@components/Modal/index'
import { RoadMap } from './components/RoadMap'
import { UntilMiningStart } from './components/UntilMiningStart/UntilMiningStart'
import { useTranslation } from 'react-i18next'
import { HeaderPurseDesktop } from './components/HeaderPurseDesktop'
import { changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'

export const PurseDesktop = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isPageBalanceLIMCVisible, setIsPageBalanceLIMCVisible] = useState(false)
  const [isPageBalanceUSDTVisible, setIsPageBalanceUSDTVisible] = useState(false)
  const [isPageCardBalanceVisible, setIsPageCardBalanceVisible] = useState(false)

  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  const [popup, setPopup] = useState('')

  const openMain = () => dispatch(changeViewContent('main'))

  const openProfile = () => setPopup('profile')
  const closeProfile = () => setPopup('')

  const handleUntilMiningModalClose = () => setPopup('')
  const handleUntilMiningModalOpen = () => setPopup('maining')

  useEffect(() => {
    openMain()
  }, [])

  return (
    <>
      <Wallpaper />
      <section className={styles.purse}>
        <HeaderPurseDesktop
          isProfileActive={popup === 'profile'}
          openProfile={openProfile}
          closeProfile={closeProfile}
        />
        <div className={styles.purseContainer}>
          <div className={styles.accounts}>
            <Menu
              handleBalanceUsdtOpenClick={() => setIsUsdtInfoVisible(true)}
              handlePageBalanceLIMCOpenClick={() => {
                setIsPageBalanceLIMCVisible(true)
                openMain()
              }}
              handlePageBalanceUSDTOpenClick={() => {
                setIsPageBalanceUSDTVisible(true)
                openMain()
              }}
              handlePageBalanceLIMCCloseClick={() => setIsPageBalanceLIMCVisible(false)}
              handlePageBalanceUSDTCloseClick={() => setIsPageBalanceUSDTVisible(false)}
              handlePageCardBalanceCloseClick={() => setIsPageCardBalanceVisible(false)}
            />
          </div>
          {viewContent === 'broadcasts' && <BroadcastsDesktop />}
          {viewContent === 'main' && (
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
                openProfile={openProfile}
              />
              <PageBalanceUSDT
                usdtBalance={usdtBalance}
                isOpen={isPageBalanceUSDTVisible}
                handlePageBalanceUSDTCloseClick={() => setIsPageBalanceUSDTVisible(false)}
                openProfile={openProfile}
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
                <Modal active={popup === 'maining'} setActive={handleUntilMiningModalClose} crossFlag isDesktop>
                  <UntilMiningStart popup />
                </Modal>
              </div>
              <div className={styles.wallet_invisible}>
                <Wallet />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
