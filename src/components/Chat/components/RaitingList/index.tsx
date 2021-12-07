import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import grey from '@icons/raitingGrey.svg'
import orange from '@icons/raitingOrange.svg'
import purple from '@icons/raitingPurple.svg'
import red from '@icons/redRaiting.svg'

export const RaitingList = ({ raitingListVisible, handleRaitingListClose }) => {
  const [t] = useTranslation()
  return (
    <div className={raitingListVisible ? styles.raitingList : styles.raitingList_invisible}>
      <div className={styles.container}>
        <button className={styles.closeRaiting} type='button' onClick={handleRaitingListClose}>
          <img src={close} alt='closeIcon' />
        </button>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <img className={styles.icon} src={grey} alt='icon' />
            <data className={styles.listNumber}>1 TB – 500 TB</data>
          </li>
          <li className={styles.listItem}>
            <img className={styles.icon} src={orange} alt='icon' />
            <data className={styles.listNumber}>501 TB – 5,000 TB</data>
          </li>
          <li className={styles.listItem}>
            <img className={styles.icon} src={purple} alt='icon' />
            <data className={styles.listNumber}>5,000 TB – 50,000 TB</data>
          </li>
          <li className={styles.listItem}>
            <img className={styles.icon} src={red} alt='icon' />
            <data className={styles.listNumber}>&gt; 50,000 TB</data>
          </li>
        </ul>
        <p className={styles.raitingNotice}>{t('raiting_notice')}</p>
      </div>
    </div>
  )
}
