import React, { FC } from 'react'
import styles from './styles.module.scss'
import GrayCrossIcon from '../../images/GrayCross/GrayCrossIcon'
import { cardVirtual } from '../../images'

type CardPropsType = {
  onCloseClick: () => void
}

export const VirtualCard: FC<CardPropsType> = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>
        Скоро вы сможете <br /> выпустить виртуальную карту
      </p>
      <img src={cardVirtual} className={styles.card__image} alt='virtualCard' />

      <button className={styles.card__closeBtn} onClick={props.onCloseClick} type='button'>
        <GrayCrossIcon />
      </button>
    </div>
  )
}
