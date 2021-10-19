import React from 'react'
import styles from './styles.module.scss'
import { plusSvg, blueArrow, balanceLimc, balanceUsdt } from '../../images'

const ButtonPlus = ({ onMenuClick }) => {
  const buttonPlusClass = `${styles.menu__item} ${styles.menu__buttonPlus}`

  return (
    <button type='button' className={buttonPlusClass} onClick={onMenuClick}>
      <img src={plusSvg} width='24' height='24' />
    </button>
  )
}

const MenuItem = ({ image, title, balance, onMenuClick }) => {
  const menuItemClass = `${styles.menu__item} ${styles.menu__balance}`

  return (
    <div className={menuItemClass}>
      <button type='button' className={styles.menu__button} onClick={onMenuClick}>
        <img src={blueArrow} />
      </button>
      <img src={image} width='40' height='40' />
      <h5 className={styles.menu__title}>{title}</h5>
      <p className={styles.menu__sum}>{balance}</p>
    </div>
  )
}

export const Menu = (props) => {
  return (
    <div className={styles.menu}>
      <ButtonPlus onMenuClick={props.onMenuClick} />
      <MenuItem image={balanceLimc} title='Баланс LIMC' balance='0 LIMC' onMenuClick={props.onMenuClick} />
      <MenuItem image={balanceUsdt} title='Баланс USDT' balance='0 USDT' onMenuClick={props.onMenuClick} />
    </div>
  )
}
