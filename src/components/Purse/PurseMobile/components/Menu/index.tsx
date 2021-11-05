import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt, creditCard, plusSvg } from '../../images'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'

export const Menu = ({ openPopup, handleBalanceUsdtOpenClick, handleBalanceUsdtCloseClick, isUsdtInfoVisible }) => {
  // const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  // const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isCardInfoVisible, setIsCardInfoVisible] = useState(false)
  const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`
  const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)
  const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)

  const handleBalanceLimcOpenClick = () => {
    setIsLimcInfoVisible(true)
  }

  const handleBalanceLimcCloseClick = () => {
    setIsLimcInfoVisible(false)
  }

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

  return (
    <div className={styles.menu}>
      <button type='button' className={buttonPlusClass}>
        <img src={plusSvg} width='24' height='24' />
      </button>
      <MenuItem
        onClick={openPopup}
        image={balanceLimc}
        title='Баланс LIMC'
        balance={`${limcBalance} LIMC`}
        setActive={handleBalanceLimcOpenClick}
        setNotActive={handleBalanceLimcCloseClick}
        active={isLimcInfoVisible}
      />
      <MenuItem
        image={balanceUsdt}
        title='Баланс USDT'
        balance={`${usdtBalance} USDT`}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
      />
      <MenuItem
        image={creditCard}
        title='Баланс карты'
        balance='$0'
        setActive={handleBalanceCardOpenClick}
        setNotActive={handleBalanceCardCloseClick}
        active={isCardInfoVisible}
      />
    </div>
  )
}
