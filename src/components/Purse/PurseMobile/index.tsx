import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { Balance } from './components/Balance'
import { Menu } from './components/Menu'
import { Details } from './components/Details'
import { Statistics } from './components/Statistics'
import { useAppSelector } from '@app/redux/hooks'

import { ButtonBig } from '../../../ui-kit/ButtonBig'

import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
import { Modal } from './components/Modal'
import { ModalHeader } from './components/ModalHeader'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { useHistory } from 'react-router'
import { RoadMap } from '@components/Purse/PurseMobile/components/RoadMap'
import { useTranslation } from 'react-i18next'

export const PurseMobile: FC = () => {
  const [t] = useTranslation()
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)

  const [viewContent, setViewContent] = useState('')

  const history = useHistory()
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const closePopup = () => setViewContent('')

  return (
    <div className={styles.purse}>
      {viewContent === 'balance' && (
        <Modal active={viewContent === 'balance'} classname={styles.balanceModal} setActive={closePopup}>
          <ModalHeader title='LIMC' onClick={closePopup} />
          <div className={styles.balanceBlock}>
            <div className={styles.block}>
              <div className={styles.line}>
                <img src={limcoreIcon} alt='' />
                <span className={styles.title}>{limcBalance} LIMC</span>
              </div>
              <span className={styles.usd}>{}</span>
              <ButtonBig className={styles.buyBtn}>
                <a href='https://round1.limcore.io' className={styles.buyLink}>
                  <img className={styles.icon} src={buyIcon} alt='' />
                  {t('buy')}
                </a>
              </ButtonBig>
              <div className={styles.container}>
                <span className={styles.desc}>{t('purse_fillToRestore')}</span>
                <span className={styles.desc}>{t('lockUp')}</span>
              </div>
              <div className={styles.nextCont}>
                <button className={styles.next} onClick={() => history.push('/profile')}>
                  {t('purse_goFilling')}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Balance />
      <Menu
        isUsdtInfoVisible={isUsdtInfoVisible}
        handleBalanceUsdtOpenClick={() => setIsUsdtInfoVisible(true)}
        handleBalanceUsdtCloseClick={() => setIsUsdtInfoVisible(false)}
        openPopup={() => setViewContent('balance')}
      />
      <div className={styles.purse__content}>
        {/* {isCardVisible && <VirtualCard onCloseClick={handleCardCloseClick} />} */}
        <RoadMap />
        <div className={styles.buyCont}>
          <ButtonBig className={styles.buy} onClick={() => setViewContent('balance')}>
            {t('buyLimc')}
          </ButtonBig>
        </div>
        <Statistics />
        <Details />
        {/* {isWalletVisible && <Wallet onCloseClick={handleWalletCloseClick} />} */}
        {/* <Transactions
          onProfileClick={handleProfileClick}
          onTransactionsClick={handleTransactionsClick}
          isUserHasTransactions={isUserHasTransactions}
        /> */}
        <FooterMobile />
      </div>
    </div>
  )
}
