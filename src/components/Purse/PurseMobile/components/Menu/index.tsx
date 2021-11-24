import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt } from '../../images'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const Menu = ({ openPopup, handleBalanceUsdtOpenClick, handleBalanceUsdtCloseClick, isUsdtInfoVisible }) => {
  const [t] = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLimcInfoVisible, setIsLimcInfoVisible] = useState(false)

  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  const isSinc = useAppSelector((state) => state.auth.isSincWithWallet)

  const menuClass = isSinc ? classNames(styles.menu, styles.menu_sinc) : styles.menu

  return (
    <div className={menuClass}>
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
    </div>
  )
}
