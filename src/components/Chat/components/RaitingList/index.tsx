import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import grey from '@icons/raitingGrey.svg'
import orange from '@icons/raitingOrange.svg'
import purple from '@icons/raitingPurple.svg'
import red from '@icons/redRaiting.svg'

export const RaitingList = ({ raitingVisible, handleRaitingListClose }) => {
  const [t] = useTranslation()
  return (
    raitingVisible === 'raiting' && (
      <div className={styles.raitingList}>
        <div className={styles.container}>
          <button className={styles.closeRaiting} type='button' onClick={handleRaitingListClose}>
            <img src={close} alt='' />
          </button>
          <ul className={styles.listContainer}>
            <li className={styles.listItem}>
              <img className={styles.icon} src={grey} alt='' />
              <span className={styles.listNumber}>1 TB – 500 TB</span>
            </li>
            <li className={styles.listItem}>
              <img className={styles.icon} src={orange} alt='' />
              <span className={styles.listNumber}>501 TB – 5,000 TB</span>
            </li>
            <li className={styles.listItem}>
              <img className={styles.icon} src={purple} alt='' />
              <span className={styles.listNumber}>5,000 TB – 50,000 TB</span>
            </li>
            <li className={styles.listItem}>
              <img className={styles.icon} src={red} alt='' />
              <span className={styles.listNumber}>&gt; 50,000 TB</span>
            </li>
          </ul>
          <p className={styles.raitingNotice}>{t('raiting_notice')}</p>
        </div>
      </div>
    )
  )
}
