import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const StartMining = (props) => {
  const [t] = useTranslation()

  return (
    <div className={styles.start}>
      <h3 className={styles.start__title}>Начните майнить прямо сейчас</h3>
      <p className={styles.start__subtitle}>Купите LIMC с помощью банковской карты или USDT</p>
      {/* <button type='button' className={styles.start__button} onClick={props.onButtonClick}>
        {t('buyLimc')}
      </button> */}
    </div>
  )
}
