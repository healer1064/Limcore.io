import React from 'react'
import styles from './styles.module.scss'
// import { blueArrow } from '../../../../images'
import { Info } from '../Info/index'
import BlueArrow from '../../../../images/BlueArrow/BlueArrow'
import { ShouldSinc } from '../../../Balance/Icons/ShouldSinc'
import { useAppSelector } from '@app/redux/hooks'
import lockIcon from '@icons/lock-me.svg'

interface MenuItemProps {
  onClick?: any
  setActive?: any
  setNotActive?: any
  active?: any
  image: any
  title: any
  balance: any
  type?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  setActive,
  setNotActive,
  active,
  image,
  title,
  balance,
  type,
}) => {
  const isSinc = useAppSelector((state) => state.authNew.isSincWithWallet)
  const menuItemClass = `${styles.menu__item} ${styles.menu__balance}`

  const onClickHandler = () => {
    title.includes('LIMC') ? onClick() : setActive()
  }

  return (
    <button className={menuItemClass} onClick={isSinc ? onClickHandler : () => {}}>
      <span className={styles.menu__icon}>{isSinc ? <BlueArrow /> : <ShouldSinc />}</span>
      <img src={image} width='40' height='40' />
      <h5 className={styles.menu__title}>{title}</h5>
      {!isSinc && <p className={styles.menu__sum}>{balance}</p>}
      {isSinc && type === 'limc' && (
        <div className={styles.row}>
          <span>{balance}</span>
          <img src={lockIcon} alt='Lock' />
        </div>
      )}
      {isSinc && type === 'usdt' && <p className={styles.menu__sum}>{balance}</p>}
      <Info
        active={active}
        setActive={setActive}
        title={title}
        setNotActive={setNotActive}
        image={image}
        balance={balance}
      />
    </button>
  )
}
