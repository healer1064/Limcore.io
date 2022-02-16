import React from 'react'

import styles from './styles.module.scss'
import masterCard from '@icons/masterCard.svg'
import masterCardTwo from '@icons/masterCardTwo.svg'
import soonYellow from '@icons/soonYellow.svg'

interface NewCardProps {
  clientWidth: number
}

export const NewCard: React.FC<NewCardProps> = ({ clientWidth }) => {
  console.log(clientWidth <= 768)
  return (
    <div className={styles.newCard}>
      <h2 className={styles.newCard__title}>Выпуск банковской карты</h2>
      {clientWidth <= 768 ? (
        <img className={styles.newCard__masterCard} src={masterCardTwo} />
      ) : (
        <img className={styles.newCard__masterCard} src={masterCard} />
      )}
      <img className={styles.newCard__soon} src={soonYellow} />
    </div>
  )
}
