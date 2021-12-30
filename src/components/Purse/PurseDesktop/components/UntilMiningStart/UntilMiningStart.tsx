import { useAppSelector } from '@app/redux/hooks'
import { CloseIcon } from '@icons/CloseIcon'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import { ArrowRight } from '@icons/ArrowRight'
import classNames from 'classnames'
import { countDaysDifference } from '@lib/utils/countDaysDifference'

interface UntilMiningStartProps {
  onClick?: () => void
  tooltip?: boolean
  popup?: boolean
  className?: string
}

export const UntilMiningStart = ({ onClick, tooltip, popup, className }: UntilMiningStartProps) => {
  const [t] = useTranslation()
  const [isPopup, setIsPopup] = useState(false)
  const [isTooltip, setIsTooltip] = useState(false)
  const balanceLimc = useAppSelector((state) => state.auth.walletConnectLimc)
  const daysLeft = countDaysDifference()

  useEffect(() => {
    setIsPopup(popup)
    setIsTooltip(tooltip)
  }, [tooltip, popup])

  const visualizationStyle = (num: number) => {
    const LOCK_UP_DAYS = 80
    const DAY_IN_PERCENT = 100 / LOCK_UP_DAYS

    const percent = (LOCK_UP_DAYS - num) * DAY_IN_PERCENT
    return { background: `linear-gradient(90deg, #4DBE28 ${percent}%, #E5FBDE ${percent}%)` }
  }

  return (
    <div className={classNames(styles.untilMiningContainer, className)}>
      <div className={styles.header}>
        <h3 className={styles.untilMiningTitle}>{t('purse_mainingBefore')}</h3>
        {isTooltip && (
          <button type='button' className={styles.tooltip} onClick={onClick}>
            <ArrowRight />
          </button>
        )}
      </div>
      <span className={styles.visualization} style={visualizationStyle(daysLeft)} />
      <div className={styles.descWrapper}>
        <p className={styles.untilMiningDesc}>
          {daysLeft} {t('purse_mainingDateLast')}
        </p>
        <data className={styles.visualizationNumber}>0 TB / {Number(balanceLimc).toFixed(2)} TB</data>
      </div>
      {isPopup && (
        <div className={styles.popupContainer}>
          <button className={styles.closePopupButton} onClick={() => setIsPopup(false)}>
            <CloseIcon />
          </button>
          <h4 className={styles.popupTitle}>{t('purse_whyWait')}</h4>
          <p className={styles.popupDesc}>{t('purse_mainingStart')}</p>
        </div>
      )}
    </div>
  )
}
