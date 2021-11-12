import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt, creditCard, plusSvg } from '../../images'
import purseIcon from '@icons/purseIcon.svg'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'

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
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  // const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isCardInfoVisible, setIsCardInfoVisible] = useState(false)
  const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`
  const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)
  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const usdtBalance = useAppSelector((state) => state.authNew.walletConnectBalance)
  const [lastNumbersOfCard, setLastNumbersOfCard] = useState('3580')
  const [cardBalance, setCardBalance] = useState(`$3,587`)

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

  const handleBalanceCardOpenClick = () => {
    setIsCardInfoVisible(true)
  }

  const handleBalanceCardCloseClick = () => {
    setIsCardInfoVisible(false)
  }

  const handleCardBalance = () => {
    handlePageCardBalanceOpenClick()
    handlePageBalanceUSDTCloseClick()
    handlePageBalanceLIMCCloseClick()
  }

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
      <h2 className={styles.name}>Мои счета</h2>
      <MenuItem
        onClick={handleLIMCBalance}
        image={balanceLimc}
        title='LIMC'
        balance={`${limcBalance} LIMC`}
        // setActive={handleBalanceLimcOpenClick}
        // setNotActive={handleBalanceLimcCloseClick}
        active={isLimcInfoVisible}
      />
      <MenuItem
        onClick={handleUSDTBalance}
        image={balanceUsdt}
        title='USDT'
        balance={`${usdtBalance} USDT`}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
      />
    </div>
  )
}
