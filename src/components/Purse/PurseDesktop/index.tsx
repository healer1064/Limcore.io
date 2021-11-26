import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Menu } from '@components/Purse/PurseDesktop/components/Menu'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { Wallpaper } from '@components/Purse/PurseDesktop/components/Wallpaper'
import { DetailTable } from './components/DetailTable/DetailTable'

import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'
import { PageBalanceUSDT } from '@components/Purse/PurseDesktop/components/PageBalanceUSDT'
import { Modal } from '@components/Modal/index'
import { RoadMap } from './components/RoadMap'
import { UntilMiningStart } from './components/UntilMiningStart/UntilMiningStart'
import { useTranslation } from 'react-i18next'
import { HeaderPurseDesktop } from './components/HeaderPurseDesktop'
import { changeViewContent } from '../../../pages/cabinet/redux/cabinetSlice'

export const PurseDesktop = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  const viewPurseContent = useAppSelector((state) => state.cabinet.viewPurseContent)

  const openMain = () => dispatch(changeViewContent('main'))
  useEffect(() => {
    openMain()
  }, [])

  // Логика появления страниц баланса LIMC & USDT
  const [pageCardBalance, setPageCardBalance] = useState('') // '', 'LIMC', 'USDT'
  const closeCard = () => setPageCardBalance('')
  const noop = () => {}

  const openLimcBalance = () => {
    if (isSync) {
      setPageCardBalance('LIMC')
      openMain()
    } else {
      noop()
    }
  }

  const openUsdtBalance = () => {
    if (isSync) {
      setPageCardBalance('USDT')
      openMain()
    } else {
      noop()
    }
  }

  // Модалки профиля и дней майнинга
  const [popup, setPopup] = useState('')
  const close = () => setPopup('')
  const open = (view) => setPopup(view)

  return (
    <>
      <Wallpaper />
      <section className={styles.purse}>
        <HeaderPurseDesktop
          isProfileActive={popup === 'profile'}
          openProfile={() => open('profile')}
          closeProfile={close}
        />
        <div className={styles.purseContainer}>
          <div className={styles.accounts}>
            <Menu openLimcBalance={openLimcBalance} openUsdtBalance={openUsdtBalance} />
          </div>
          {viewPurseContent === 'broadcasts' && <BroadcastsDesktop />}
          {viewPurseContent === 'main' && (
            <>
              <PageBalanceLIMC
                limcBalance={limcBalance}
                isOpen={pageCardBalance === 'LIMC'}
                handlePageBalanceLIMCCloseClick={closeCard}
                openProfile={() => open('profile')}
              />
              <PageBalanceUSDT
                usdtBalance={usdtBalance}
                isOpen={pageCardBalance === 'USDT'}
                handlePageBalanceUSDTCloseClick={closeCard}
                openProfile={() => open('profile')}
              />
              <div className={`${pageCardBalance !== '' ? styles.balance_invisible : styles.balance}`}>
                <Balance />
              </div>
              <div className={`${pageCardBalance !== '' ? styles.roadMap_invisible : styles.roadMap}`}>
                <RoadMap />
                <a className={styles.byLimcBtn} href='https://round1.limcore.io'>
                  {t('buyLimc')}
                </a>
              </div>
              <div className={`${pageCardBalance !== '' ? styles.mining_invisible : styles.mining}`}>
                <h3 className={styles.detailsTitle}>{t('purse_mainingDetails')}</h3>
                <div className={styles.miningDetails}>
                  <div className={styles.miningDetailsWrapper}>
                    <Details />
                    <UntilMiningStart onClick={() => open('maining')} className={styles.statistics} tooltip />
                  </div>
                  <DetailTable />
                </div>
                <Modal active={popup === 'maining'} setActive={close} crossFlag isDesktop>
                  <UntilMiningStart popup />
                </Modal>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
