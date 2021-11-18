import React, { useState } from 'react'
import styles from './styles.module.scss'
// import { balanceLimc, balanceUsdt, creditCard, plusSvg } from '../../images'
import { balanceLimc, balanceUsdt, creditCard } from '../../images'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const Menu = ({ openPopup, handleBalanceUsdtOpenClick, handleBalanceUsdtCloseClick, isUsdtInfoVisible }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t] = useTranslation()
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)
  // const [isUsdtInfoVisible, setIsUsdtInfoVisible] = useState(false)
  const [isCardInfoVisible, setIsCardInfoVisible] = useState(false)

  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const limcBalance = useAppSelector((state) => state.wallet.limc_balance)
  const usdtBalance = useAppSelector((state) => state.authNew.walletConnectUsdt)
  const isSinc = useAppSelector((state) => state.authNew.isSincWithWallet)

  // const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`
  const menuClass = isSinc ? classNames(styles.menu, styles.menu_sinc) : styles.menu

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

  return (
    <div className={menuClass}>
      {/* <button type='button' className={buttonPlusClass}>
        <img src={plusSvg} width='24' height='24' />
      </button> */}
      <MenuItem
        onClick={openPopup}
        image={balanceLimc}
        title={`${t('balance')} LIMC`}
        balance={isSinc ? `${limcBalance} LIMC` : t('purse_needSync')}
        // setActive={handleBalanceLimcOpenClick}
        // setNotActive={handleBalanceLimcCloseClick}
        active={isLimcInfoVisible}
        type='limc'
      />
      <MenuItem
        image={balanceUsdt}
        title={`${t('balance')} USDT`}
        balance={isSinc ? `${usdtBalance} USDT` : t('purse_needSync')}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
        type='usdt'
      />
      {/* <MenuItem */}
      {/*  image={creditCard} */}
      {/*  title='Баланс карты' */}
      {/*  balance='$0' */}
      {/*  setActive={handleBalanceCardOpenClick} */}
      {/*  setNotActive={handleBalanceCardCloseClick} */}
      {/*  active={isCardInfoVisible} */}
      {/* /> */}
    </div>
  )
}
