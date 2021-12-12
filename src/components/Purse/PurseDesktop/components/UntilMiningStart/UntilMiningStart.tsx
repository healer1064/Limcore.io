import { useAppSelector } from '@app/redux/hooks'
import { CloseIcon } from '@icons/CloseIcon'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import { ArrowRight } from '@icons/ArrowRight'
import classNames from 'classnames'

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
  // const daysPassed = useAppSelector((state) => state.wallet.countdown_days) // понадобиться после окончания первого раунда
  const balanceLimc = useAppSelector((state) => state.auth.walletConnectLimc)

  useEffect(() => {
    setIsPopup(popup)
    setIsTooltip(tooltip)
  }, [tooltip, popup])

  const visualizationStyle = (num) => {
    const percent = num * 100
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
      {/* <span className={styles.visualization} style={visualizationStyle((80 - daysPassed) / 80)} /> */}
      <span className={styles.visualization} style={visualizationStyle(0)} />
      <div className={styles.descWrapper}>
        <p className={styles.untilMiningDesc}>80 {t('purse_mainingDateLast')}</p>
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
