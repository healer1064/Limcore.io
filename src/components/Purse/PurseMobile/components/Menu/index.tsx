import React, { useState } from 'react'
import styles from './styles.module.scss'
import { plusSvg, balanceLimc, balanceUsdt } from '../../images'
import { MenuItem } from './components/MenuItem/index'

export const Menu = () => {
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
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

  return (
    <div className={styles.menu}>
      <button type='button' className={buttonPlusClass}>
        <img src={plusSvg} width='24' height='24' />
      </button>
      <MenuItem
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
    </div>
  )
}
