import React, { useState } from 'react'

import styles from './styles.module.scss'
import startMiningFrame from '@icons/StartMiningFrame.svg'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'

export const StartMining: React.FC = () => {
  const [passedTB] = useState<number>(120)
  const [allTB] = useState<number>(2000)
  const [percentageLoading] = useState<number>(Math.floor((passedTB / allTB) * 100))

  const [remainingDays] = useState<number>(4)
  const [allDays] = useState<number>(60)

  return (
    <div className={styles.startMining} style={{ background: `url("${startMiningFrame}") 0 0/100% 100%` }}>
      <div className={styles.startMining__beforeStart}>
        <p>До старта майнинга</p>
        <img src={arrowWhiteRight} />
      </div>
      <div className={styles.startMining__loadingBlock}>
        <div className={styles.startMining__loading}>
          <p style={{ width: `${percentageLoading}%` }} />
        </div>
      </div>
      <div className={styles.startMining__stats}>
        <p>
          Осталось {remainingDays} дня из {allDays}
        </p>
        <p>
          {passedTB} TB / {allTB} TB
        </p>
      </div>
    </div>
  )
}
