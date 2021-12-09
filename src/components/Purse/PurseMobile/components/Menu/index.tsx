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
      <MenuItem type='limc' />
      <MenuItem type='usdt' />
    </div>
  )
}
