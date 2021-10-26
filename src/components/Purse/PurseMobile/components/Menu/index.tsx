import React, { useState } from 'react'
import styles from './styles.module.scss'
import { plusSvg, balanceLimc, balanceUsdt, creditCard } from '../../images'
import { MenuItem } from './components/MenuItem/index'

export const Menu = () => {
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isCardInfoVisible, setIsCardInfoVisible] = useState(false)
  const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`

  const handleBalanceLimcOpenClick = () => {
    setIsLimcInfoVisible(true)
  }

  const handleBalanceLimcCloseClick = () => {
    setIsLimcInfoVisible(false)
  }

  const handleBalanceUsdtOpenClick = () => {
    setIsUsdtInfoVisible(true)
  }

  const handleBalanceUsdtCloseClick = () => {
    setIsUsdtInfoVisible(false)
  }

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
        // onClick={() => openPopup(true)}
        image={balanceLimc}
        title='Баланс LIMC'
        balance='316 LIMC'
        setActive={handleBalanceLimcOpenClick}
        setNotActive={handleBalanceLimcCloseClick}
        active={isLimcInfoVisible}
      />
      <MenuItem
        image={balanceUsdt}
        title='Баланс USDT'
        balance='445 USDT'
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
      />
      <MenuItem
        image={creditCard}
        title='Баланс карты'
        balance='$1,988'
        setActive={handleBalanceCardOpenClick}
        setNotActive={handleBalanceCardCloseClick}
        active={isCardInfoVisible}
      />
    </div>
  )
}
