import React, { FC } from 'react'
import styles from './styles.module.scss'

import cardImage from '../../images/card-virtual.svg'
import buttonImage from '../../images/button-close.svg'

type CardPropsType = {
  onCloseClick: () => void
}

export const VirtualCard: FC<CardPropsType> = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Выпустите виртуальную карту</p>
      <img src={cardImage} className={styles.card__image} />

      <button className={styles.card__closeBtn} onClick={props.onCloseClick}>
        <img src={buttonImage} className={styles.card__closeImage} />
      </button>
    </div>
  )
}
