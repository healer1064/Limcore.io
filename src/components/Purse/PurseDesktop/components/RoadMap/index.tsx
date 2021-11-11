import React from 'react'
import styles from './styles.module.scss'

export const RoadMap = () => {
  const visualizationStyle = (num) => {
    const percent = num * 100
    return { background: `linear-gradient(90deg, #B3BEE3 ${percent}%, #DCDFEE ${percent}%)` }
  }

  return (
    <div className={styles.roadMapContainer}>
      <div className={styles.roadMapRound}>
        <div className={styles.roundText}>
          <h3>Раунд №1</h3>
          <p>LIMC ($95)</p>
        </div>
        <div className={styles.roundVisualization} style={visualizationStyle(2000 / 80000)}>
          2,000/80,000
        </div>
        <span className={styles.roundLine} />
        <p className={styles.roundDate}>10.01.2022</p>
      </div>
      <div className={styles.roadMapRound}>
        <div className={styles.roundText}>
          <h3>Раунд №3</h3>
          <p>LIMC (min $110)</p>
        </div>
        <div className={styles.roundVisualization} style={visualizationStyle(0 / 120000)}>
          120,000
        </div>
        <span className={styles.roundLine} />
        <p className={styles.roundDate}>25.02.2022</p>
      </div>
    </div>
  )
}
