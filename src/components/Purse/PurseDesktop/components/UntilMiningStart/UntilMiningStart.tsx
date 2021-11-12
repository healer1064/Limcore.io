import { CloseIcon } from '@icons/CloseIcon'
import React, { useState } from 'react'
import styles from './styles.module.scss'

export const UntilMiningStart = () => {
  const [popup, setPopup] = useState(true)
  const visualizationStyle = (num) => {
    const percent = num * 100
    return { background: `linear-gradient(90deg, #4DBE28 ${percent}%, #E5FBDE ${percent}%)` }
  }
  return (
    <div className={styles.untilMiningContainer}>
      <h3 className={styles.untilMiningTitle}>До старта майнинга</h3>
      <span className={styles.visualization} style={visualizationStyle(0 / 80)} />
      <div className={styles.descWrapper}>
        <p className={styles.untilMiningDesc}>осталось 80 дней из 80</p>
        <span className={styles.visualizationNumber}>0 TB</span>
      </div>
      {popup && (
        <div className={styles.popupContainer}>
          <button className={styles.closePopupButton} onClick={() => setPopup(false)}>
            <CloseIcon />
          </button>
          <h4 className={styles.popupTitle}>Почему нужно ждать?</h4>
          <p className={styles.popupDesc}>
            Майнинг начинается спустя 80&nbsp;дней с&nbsp;момента завершения раунда. Раунд может закончиться раньше
            указанного срока
          </p>
        </div>
      )}
    </div>
  )
}
