import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt, creditCard, plusSvg } from '../../images'
import purseIcon from '@icons/purseIcon.svg'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'

export const Menu = ({
  openPopup,
  handleBalanceUsdtOpenClick,
  handleBalanceUsdtCloseClick,
  isUsdtInfoVisible,
  handlePageBalanceLIMCOpenClick,
  handlePageBalanceUSDTOpenClick,
  handlePageCardBalanceOpenClick,
  handlePageBalanceLIMCCloseClick,
  handlePageBalanceUSDTCloseClick,
  handlePageCardBalanceCloseClick,
  isPageBalanceLIMCVisible,
  isPageBalanceUSDTVisible,
  isPageCardBalanceVisible,
}) => {
  const [t] = useTranslation()
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  // const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  // const [isCardInfoVisible, setIsCardInfoVisible] = useState(false)
  // const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`
  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  // const [lastNumbersOfCard, setLastNumbersOfCard] = useState('3580')
  // const [cardBalance, setCardBalance] = useState(`$3,587`)

  // const handleBalanceLimcOpenClick = () => {
  //   setIsLimcInfoVisible(true)
  // }

  // const handleBalanceLimcCloseClick = () => {
  //   setIsLimcInfoVisible(false)
  // }

  // const handleBalanceUsdtOpenClick = () => {
  //   setIsUsdtInfoVisible(true)
  // }

  // const handleBalanceUsdtCloseClick = () => {
  //   setIsUsdtInfoVisible(false)
  // }

  // const handleBalanceCardOpenClick = () => {
  //   setIsCardInfoVisible(true)
  // }

  // const handleBalanceCardCloseClick = () => {
  //   setIsCardInfoVisible(false)
  // }

  // const handleCardBalance = () => {
  //   handlePageCardBalanceOpenClick()
  //   handlePageBalanceUSDTCloseClick()
  //   handlePageBalanceLIMCCloseClick()
  // }

  const handleLIMCBalance = () => {
    handlePageBalanceLIMCOpenClick()
    handlePageBalanceUSDTCloseClick()
    handlePageCardBalanceCloseClick()
  }

  const handleUSDTBalance = () => {
    handlePageBalanceUSDTOpenClick()
    handlePageBalanceLIMCCloseClick()
    handlePageCardBalanceCloseClick()
  }

  return (
    <div className={styles.menu}>
      <h2 className={styles.name}>{t('purse_myAccounts')}</h2>
      <MenuItem
        onClick={handleLIMCBalance}
        image={balanceLimc}
        title='LIMC'
        balance={isSync ? `${limcBalance} LIMC` : t('purse_notSync')}
        // setActive={handleBalanceLimcOpenClick}
        // setNotActive={handleBalanceLimcCloseClick}
        active={isLimcInfoVisible}
      />
      <MenuItem
        onClick={handleUSDTBalance}
        image={balanceUsdt}
        title='USDT'
        balance={isSync ? `${usdtBalance} USDT` : t('purse_notSync')}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
      />
    </div>
  )
}
