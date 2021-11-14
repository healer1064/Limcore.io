import { useAppSelector } from '@app/redux/hooks'
import React from 'react'
import styles from './styles.module.scss'

export const RoadMap = () => {
  const soldLimcs = useAppSelector((state) => state.authNew.walletConnectSoldLimcs)

  const visualizationStyle = (num) => {
    const percent = num * 100
    return { background: `linear-gradient(90deg, #B3BEE3 ${percent}%, #DCDFEE ${percent}%)` }
  }

  return (
    <div className={styles.roadMapContainer}>
      <div className={styles.emptyContainer}>
        <span />
        <span />
      </div>
      <div className={styles.roadMapRound}>
        <p className={styles.roundDate}>10.01.2022</p>
        <div className={styles.roundText}>
          <h3 className={styles.round}>Раунд №1</h3>
          <p>LIMC ($95)</p>
        </div>
        <div className={styles.roundVisualization} style={visualizationStyle(soldLimcs / 80000)}>
          {soldLimcs}/80,000
        </div>
        <p className={styles.roundDate}>25.02.2022</p>
        <div className={styles.roundText}>
          <h3 className={styles.round}>Раунд №3</h3>
          <p>LIMC (min $110)</p>
        </div>
        <div className={styles.roundVisualization} style={visualizationStyle(0 / 120000)}>
          120,000
        </div>
      </div>
    </div>
  )
}
