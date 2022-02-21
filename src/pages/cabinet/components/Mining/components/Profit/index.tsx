import React, { useState } from 'react'

import styles from './styles.module.scss'

export const Profit: React.FC = () => {
  const [profit30d] = useState<number>(884)
  const [percentagePerAnnum] = useState<number>(12)

  return (
    <div className={styles.profit}>
      <div className={styles.profit__flex}>
        <p>Доход за всё время</p>
        <p>+$12,784</p>
      </div>
      <div className={styles.profit__flex}>
        <p>Доход за 24h</p>
        <p>+$0,062</p>
      </div>
      <div className={styles.profit__flex}>
        <p>Доход за 30d</p>
        <p>+${profit30d}</p>
      </div>
      <div className={styles.profit__flex}>
        <p>% годовых</p>
        <p>${percentagePerAnnum}</p>
      </div>
      <div className={styles.profit__flex} style={{ margin: 0 }}>
        <p>TON & ETH</p>
        <p>Coming soon</p>
      </div>
    </div>
  )
}
