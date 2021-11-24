import React, { FC, useEffect, useState } from 'react'
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

import { Container } from '../../Container'
import { ButtonBig } from '../../../ui-kit/ButtonBig'
import { InputText } from '../../../ui-kit/InputText'

import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
// import sellIcon from '@icons/sell.svg'
// import tradeIcon from '@icons/trade.svg'
import { Modal } from './components/Modal'
import { ModalHeader } from './components/ModalHeader'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { useHistory } from 'react-router'
import { RoadMap } from '@components/Purse/PurseMobile/components/RoadMap'
import { useTranslation } from 'react-i18next'

export const PurseMobile: FC = () => {
  const [t] = useTranslation()
  // const [isCardVisible, setIsCardVisible] = useState(true)
  const [isWalletVisible, setIsWalletVisible] = useState(true)
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLimcBought, setIsLimcBought] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUserHasTransactions, setIsUserHasTransactions] = useState(true)

  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)

  const [viewContent, setViewContent] = useState('')

  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()
  const dispatch = useAppDispatch()
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)

  const handleSetValue = (event) => setValue(event.target.value)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const [displayPopup, setDisplayPopup] = useState(false)
  const closePopup = () => setViewContent('')

  // const handleCardCloseClick = () => {
  //   setIsCardVisible(false)
  // }

  const handleWalletCloseClick = () => {
    setIsWalletVisible(false)
  }

  const handleStartClick = () => {
    console.log('Start mining')
  }

  const handleProfileClick = () => {
    history.push('/profile')
  }

  const handleTransactionsClick = () => {
    console.log('Transactions click')
  }
  const handleShowMoreClick = () => {
    console.log('Показать больше')
  }

  const handleNeedToPayClick = () => {
    setIsUsdtInfoVisible(true)
    setIsErrorVisible(false)
    setViewContent('')
  }

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
              {/* <div className={styles.items}>
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
              </div> */}
              <div className={styles.container}>
                {/* <span className={styles.trans}>Транзакции</span> */}
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
        // <Container title=`${t('balance')} LIMC` onClick={closePopup}>
        //   <div className={styles.block}>
        //     <div className={styles.line}>
        //       <img src={limcoreIcon} alt='' />
        //       <span className={styles.title}>{limcBalance} LIMC</span>
        //     </div>
        //     <span className={styles.usd}>$0</span>
        //     <div className={styles.items}>
        //       <div className={`${styles.item} ${styles.item_active}`} onClick={() => setViewContent('buy')}>
        //         <img className={styles.icon} src={buyIcon} alt='' />
        //         <span>Купить</span>
        //       </div>
        //       <div className={styles.item}>
        //         <img className={styles.icon} src={sellIcon} alt='' />
        //         <span>Продать</span>
        //       </div>
        //       <div className={styles.item}>
        //         <img className={styles.icon} src={tradeIcon} alt='' />
        //         <span>Обменять</span>
        //       </div>
        //     </div>
        //     <div className={styles.container}>
        //       <span className={styles.trans}>Транзакции</span>
        //       <span className={styles.desc}>
        //         {t('purse_noTransactionsYet')} Мы предоставим доступ ко всем функциям кошелька после заполнения профиля
        //       </span>
        //     </div>
        //     <ButtonBig className={styles.next}>{t('purse_goFilling')}</ButtonBig>
        //   </div>
        // </Container>
      )}

      {/* <Modal active={isErrorVisible} style={{ zIndex: 1001, backgroundColor: 'transparent' }} setActive={() => {}}>
        <div className={styles.errorModal}>У вас недостаточно средств.</div>
      </Modal> */}
      <Modal active={isSuccessVisible} style={{ zIndex: 1001, backgroundColor: 'transparent' }}>
        <div className={styles.errorModal} style={{ backgroundColor: 'green' }}>
          Успешно!
        </div>
      </Modal>

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
        <Statistics onClick={handleShowMoreClick} />
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
