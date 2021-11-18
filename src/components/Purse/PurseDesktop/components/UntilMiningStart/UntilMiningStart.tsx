import { useAppSelector } from '@app/redux/hooks'
import { CloseIcon } from '@icons/CloseIcon'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const UntilMiningStart = () => {
  const [t] = useTranslation()
  const [popup, setPopup] = useState(true)
  const daysPassed = useAppSelector((state) => state.wallet.countdown_days)

  const visualizationStyle = (num) => {
    const percent = num * 100
    return { background: `linear-gradient(90deg, #4DBE28 ${percent}%, #E5FBDE ${percent}%)` }
  }

  return (
    <div className={styles.untilMiningContainer}>
      <h3 className={styles.untilMiningTitle}>{t('purse_mainingBefore')}</h3>
      <span className={styles.visualization} style={visualizationStyle(0 / 80)} />
      <div className={styles.descWrapper}>
        <p className={styles.untilMiningDesc}>
          {daysPassed} {t('purse_mainingDateLast')}
        </p>
        <span className={styles.visualizationNumber}>0 TB</span>
      </div>
      {popup && (
        <div className={styles.popupContainer}>
          <button className={styles.closePopupButton} onClick={() => setPopup(false)}>
            <CloseIcon />
          </button>
          <h4 className={styles.popupTitle}>{t('purse_whyWait')}</h4>
          <p className={styles.popupDesc}>{t('purse_mainingStart')}</p>
        </div>
      )}
    </div>
  )
}
