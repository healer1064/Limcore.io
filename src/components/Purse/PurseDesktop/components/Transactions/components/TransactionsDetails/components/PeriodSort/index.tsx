import React from 'react'
import styles from './styles.module.scss'
import { Calendar } from '../../../Calendar'
import { BottomModal } from '@components/Modal/BottomModal'

export const PeriodSort = ({ ownPeriodOpen, activeForModal, setActiveForModal }) => {
  return (
    <>
      <ul className={styles.modalList}>
        <li className={styles.modalItem}>
          <button className={styles.modalBtn}>Неделя</button>
        </li>
        <li className={styles.modalItem}>
          <button className={styles.modalBtn}>Месяц</button>
        </li>
        <li className={styles.modalItem}>
          <button className={styles.modalBtn}>Год</button>
        </li>
        <li className={styles.modalItem}>
          <button className={styles.modalBtn} onClick={ownPeriodOpen}>
            Свой период
          </button>
        </li>
      </ul>

      <BottomModal style={{ zIndex: 1002 }} title='Свой период' active={activeForModal} setActive={setActiveForModal}>
        <Calendar />
      </BottomModal>
    </>
  )
}
