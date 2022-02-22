import React, { useState } from 'react'

import styles from './styles.module.scss'
import masterCard from '@icons/masterCard.svg'
import masterCardTwo from '@icons/masterCardTwo.svg'
import soonYellow from '@icons/soonYellow.svg'
import card from '../../../../../assets/images/bankCard.png'

import { Modal } from '@components/Modal'

interface NewCardProps {
  clientWidth: number
}

export const NewCard: React.FC<NewCardProps> = ({ clientWidth }) => {
  const [modalOpened, setModalOpened] = useState(false)

  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)

  const desktop = clientWidth >= 768
  console.log('desktop', desktop)

  return (
    <div className={styles.newCard} onClick={openModal}>
      <h2 className={styles.newCard__title}>Выпуск банковской карты</h2>
      {clientWidth <= 768 ? (
        <img className={styles.newCard__masterCard} src={masterCardTwo} />
      ) : (
        <img className={styles.newCard__masterCard} src={masterCard} />
      )}
      <img className={styles.newCard__soon} src={soonYellow} />

      <Modal active={modalOpened} setActive={closeModal} crossFlag isDesktop={desktop} isMobile={!desktop}>
        <p className={styles.modal__title}>Банковская карта</p>
        <div className={styles.modal__inner}>
          <img src={card} alt='Card' className={styles.modal__img} />
          <p className={styles.modal__text}>Банковскую карту можно будет выпустить в 3 квартале 2022 года</p>
        </div>
      </Modal>
    </div>
  )
}
