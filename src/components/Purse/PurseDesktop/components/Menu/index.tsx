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
  const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
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
      <MenuItem
        onClick={handleCardBalance}
        image={purseIcon}
        title={`Карта *${lastNumbersOfCard}`}
        balance={cardBalance}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
      />
      <div
        className={`${
          isPageCardBalanceVisible || isPageBalanceUSDTVisible || isPageBalanceLIMCVisible
            ? styles.virtualCardGroup_invisible
            : styles.virtualCardGroup
        }`}
      >
        <p className={styles.virtualCardGroup__text}>Выпустить виртуальную карту</p>
        <button type='button' className={styles.button}>
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5V19' stroke='#67686C' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M5 12H19' stroke='#67686C' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>
    </div>
  )
}
