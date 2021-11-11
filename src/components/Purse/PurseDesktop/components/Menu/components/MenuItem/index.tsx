import React from 'react'
import styles from './styles.module.scss'
// import { blueArrow } from '../../../../images'
import { Info } from '../Info/index'
import BlueArrow from '../../../../images/BlueArrow/BlueArrow'
import { UnsyncIcon } from '../../../../../../../assets/icons/unsync'

interface MenuItemProps {
  onClick?: any
  setActive?: any
  setNotActive?: any
  active?: any
  image: any
  title: any
  balance: any
}

export const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  setActive,
  setNotActive,
  active,
  image,
  title,
  balance,
}) => {
  const menuItemClass = `${styles.menu__item} ${styles.menu__balance}`

  const onClickHandler = () => {
    if (title.includes('LIMC') || title.includes('USDT') || title.includes('Карта')) {
      onClick()
    } else {
      setActive()
    }
  }

  return (
    <button className={styles.menuItem} onClick={onClickHandler}>
      <p className={styles.menu__title}>
        {title}
        <UnsyncIcon />
      </p>
      <p className={styles.menu__sum}>Не синхронизирован</p>
      <img className={styles.menu__logo} src={image} width='30' height='30' />
      {/* <Info */}
      {/*  active={active} */}
      {/*  setActive={setActive} */}
      {/*  title={title} */}
      {/*  setNotActive={setNotActive} */}
      {/*  image={image} */}
      {/*  balance={balance} */}
      {/* /> */}
    </button>
  )
}
