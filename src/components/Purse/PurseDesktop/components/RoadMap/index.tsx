import { useAppSelector } from '@app/redux/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const RoadMap = () => {
  const [t] = useTranslation()
  const visualizationStyle = (num) => {
    const percent = num * 100
    return { background: `linear-gradient(90deg, #B3BEE3 ${percent}%, #DCDFEE ${percent}%)` }
  }

  const soldLimcs = useAppSelector((state) => state.auth.walletConnectSoldLimcs)

  return (
    <div className={styles.roadMapContainer}>
      <div className={styles.emptyContainer}>
        <span />
        <span />
      </div>
      <div className={styles.roadMapRoundWrapper}>
        <div className={styles.roadMapRound}>
          <div className={styles.roundText}>
            <h3>{t('firstRound_round1')}</h3>
            <p>LIMC ($95)</p>
          </div>
          <div className={styles.roundVisualization} style={visualizationStyle(soldLimcs / 80000)}>
            {soldLimcs}/80,000
          </div>
          <span className={styles.roundLine} />
          <time className={styles.roundDate}>10.01.2022</time>
        </div>
        <div className={styles.roadMapRound}>
          <div className={styles.roundText}>
            <h3>{t('roundsRoadmap_round2')}</h3>
            <p>LIMC (min $110)</p>
          </div>
          <div className={styles.roundVisualization} style={visualizationStyle(0 / 120000)}>
            120,000
          </div>
          <span className={styles.roundLine} />
          <time className={styles.roundDate}>25.02.2022</time>
        </div>
      </div>
    </div>
  )
}
