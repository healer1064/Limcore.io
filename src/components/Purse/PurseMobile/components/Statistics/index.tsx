import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BottomModal } from '@components/Modal/BottomModal/index'
import InfoIcon from '../../images/Info/Info'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'
import { countDaysDifference } from '@lib/utils/countDaysDifference'

export const Statistics = () => {
  const [t] = useTranslation()
  const balanceLimc = useAppSelector((state) => state.auth.walletConnectLimc)
  const daysLeft = countDaysDifference()

  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleTooltipClick = () => {
    setIsTooltipVisible((prev) => !prev)
  }

  const visualizationStyle = (num: number) => {
    const LOCK_UP_DAYS = 80
    const DAY_IN_PERCENT = 100 / LOCK_UP_DAYS

    const percent = (LOCK_UP_DAYS - num) * DAY_IN_PERCENT
    return { width: `${percent}%` }
  }

  return (
    <div className={styles.statistics}>
      <div className={styles.header}>
        <h3 className={styles.title}>{t('purse_mainingBefore')}</h3>
        <button type='button' className={styles.tooltip}>
          <InfoIcon onClick={handleTooltipClick} />
        </button>
      </div>

      <BottomModal
        active={isTooltipVisible}
        setActive={handleTooltipClick}
        title={t('purse_whyWait')}
        subtitle={t('purse_mainingStart')}
      />

      <div className={styles.progressbar}>
        <span className={styles.progressbar__track} style={visualizationStyle(daysLeft)} />
      </div>
      <div className={styles.details}>
        <data className={styles.details__days}>
          {daysLeft} {t('purse_mainingDateLast')}
        </data>
        <data className={styles.details__memory}>0 TB / {Number(balanceLimc).toFixed(2)} TB</data>
      </div>
    </div>
  )
}
