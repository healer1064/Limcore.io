import React, { FC } from 'react'
import styles from './styles.module.scss'

import { cardVirtual, buttonClose } from '../../images'

type CardPropsType = {
  onCloseClick: () => void
}

export const VirtualCard: FC<CardPropsType> = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Выпустите виртуальную карту</p>
      <img src={cardVirtual} className={styles.card__image} />

      <button className={styles.card__closeBtn} onClick={props.onCloseClick}>
        <img src={buttonClose} className={styles.card__closeImage} />
      </button>
    </div>
  )
}
