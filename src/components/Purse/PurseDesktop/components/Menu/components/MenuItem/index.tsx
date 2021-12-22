import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface MenuItemProps {
  openCard: () => any
  image: any
  syncIcon: null | ReactNode
  title: any
  balance: any
}

export const MenuItem: React.FC<MenuItemProps> = ({ openCard, image, syncIcon, title, balance }) => {
  return (
    <button className={styles.menuItem} onClick={openCard}>
      <p className={styles.menu__title}>
        {title}
        {syncIcon}
      </p>
      <p className={styles.menu__sum}>{balance}</p>
      <img className={styles.menu__logo} src={image} width='30' height='30' alt='logo' />
    </button>
  )
}
