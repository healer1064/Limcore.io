import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '@app/redux/hooks'
import { Balance } from '@components/Purse/PurseDesktop/components/Balance'
import { Details } from '@components/Purse/PurseDesktop/components/Details'
import { DetailTable } from './../../components/DetailTable/DetailTable'

import { PageBalanceLIMC } from '@components/Purse/PurseDesktop/components/PageBalanceLIMC'
import { PageBalanceUSDT } from '@components/Purse/PurseDesktop/components/PageBalanceUSDT'
import { Modal } from '@components/Modal/index'
import { RoadMap } from './../../components/RoadMap'
import { UntilMiningStart } from './../../components/UntilMiningStart/UntilMiningStart'
import { useTranslation } from 'react-i18next'

interface IContentProps {
  pageCardBalance: string
  closeCard: () => any
  openProfile: (arg: string) => any
}

export const Content = ({ pageCardBalance, closeCard, openProfile }: IContentProps) => {
  const [t] = useTranslation()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)

  return (
    <>
      <PageBalanceLIMC
        limcBalance={limcBalance}
        isOpen={pageCardBalance === 'LIMC'}
        handlePageBalanceLIMCCloseClick={closeCard}
        openProfile={openProfile}
      />
      <PageBalanceUSDT
        usdtBalance={usdtBalance}
        isOpen={pageCardBalance === 'USDT'}
        handlePageBalanceUSDTCloseClick={closeCard}
        openProfile={openProfile}
      />
      <div className={`${pageCardBalance !== '' ? styles.balance_invisible : styles.balance}`}>
        <Balance />
      </div>
      <div className={`${pageCardBalance !== '' ? styles.roadMap_invisible : styles.roadMap}`}>
        <RoadMap />
        <a className={styles.buyLimcBtn} href='https://round1.limcore.io' target='blank' rel='noopener noreferrer'>
          {t('buyLimc')}
        </a>
      </div>
      <div className={`${pageCardBalance !== '' ? styles.mining_invisible : styles.mining}`}>
        <h3 className={styles.detailsTitle}>{t('purse_mainingDetails')}</h3>
        <div className={styles.miningDetails}>
          <div className={styles.miningDetailsWrapper}>
            <Details />
            <UntilMiningStart onClick={() => setIsPopupOpen(true)} className={styles.statistics} tooltip />
          </div>
          <DetailTable />
        </div>
        <Modal active={isPopupOpen} setActive={() => setIsPopupOpen(false)} crossFlag isDesktop>
          <UntilMiningStart popup />
        </Modal>
      </div>
    </>
  )
}
