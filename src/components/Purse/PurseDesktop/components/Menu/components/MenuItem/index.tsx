import React from 'react'
import styles from './styles.module.scss'
import { UnsyncIcon } from '../../../../../../../assets/icons/unsync'
import { useAppSelector } from '@app/redux/hooks'

interface MenuItemProps {
  onClick?: any
  setActive?: any
  image: any
  title: any
  balance: any
}

export const MenuItem: React.FC<MenuItemProps> = ({ onClick, setActive, image, title, balance }) => {
  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)

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
        {isSync ? null : <UnsyncIcon />}
      </p>
      <p className={styles.menu__sum}>{balance}</p>
      <img className={styles.menu__logo} src={image} width='30' height='30' />
    </button>
  )
}
