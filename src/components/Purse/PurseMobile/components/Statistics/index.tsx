import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BottomModal } from '../../../../Modal/BottomModal/index'
import InfoIcon from '../../images/Info/Info'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'

export const Statistics = () => {
  const [t] = useTranslation()
  const balanceLimc = useAppSelector((state) => state.auth.walletConnectLimc)
  // const daysPassed = useAppSelector((state) => state.wallet.countdown_days) // понадобиться после окончания раунда 1

  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleTooltipClick = () => {
    setIsTooltipVisible((prev) => !prev)
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
        <span className={styles.progressbar__track} />
      </div>
      <div className={styles.details}>
        <span className={styles.details__days}>80 {t('purse_mainingDateLast')}</span>
        <span className={styles.details__memory}>0 TB / {Number(balanceLimc).toFixed(2)} TB</span>
      </div>
    </div>
  )
}
