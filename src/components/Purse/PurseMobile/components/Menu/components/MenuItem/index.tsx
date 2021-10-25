import React from 'react'
import styles from './styles.module.scss'
import { blueArrow } from '../../../../images'
import { Info } from '../Info/index'

export const MenuItem = ({ setActive, setNotActive, active, image, title, balance }) => {
  const menuItemClass = `${styles.menu__item} ${styles.menu__balance}`

  return (
    <div className={menuItemClass}>
      <button type='button' className={styles.menu__button} onClick={setActive}>
        <img src={blueArrow} />
      </button>
      <img src={image} width='40' height='40' />
      <h5 className={styles.menu__title}>{title}</h5>
      <p className={styles.menu__sum}>{balance}</p>

      <Info
        active={active}
        setActive={setActive}
        title={title}
        setNotActive={setNotActive}
        image={image}
        balance={balance}
      />
    </div>
  )
}
