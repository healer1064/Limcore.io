import React from 'react'
import styles from './styles.module.scss'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import classNames from 'classnames'

export const Menu = () => {
  const isSinc = useAppSelector((state) => state.auth.isSincWithWallet)

  const menuClass = isSinc ? classNames(styles.menu, styles.menu_sinc) : styles.menu

  return (
    <div className={menuClass}>
      <MenuItem
        // onClick={openLimc}
        // image={balanceLimc}
        // title={`${t('balance')} LIMC`}
        // balance={isSinc ? `${limcBalance} LIMC` : t('purse_needSync')}
        type='limc'
      />
      {/* <MenuItemLimc isActive={viewContent === 'LIMC'} onClose={closePopup} /> */}
      {/* <MenuItem
        image={balanceUsdt}
        title={`${t('balance')} USDT`}
        balance={isSinc ? `${usdtBalance} USDT` : t('purse_needSync')}
        setActive={handleBalanceUsdtOpenClick}
        setNotActive={handleBalanceUsdtCloseClick}
        active={isUsdtInfoVisible}
        type='usdt'
      /> */}
    </div>
  )
}
