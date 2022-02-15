import React, { useState } from 'react'

import limcYellow from '@icons/limcYellow.svg'
import lockIcon from '@icons/lockIcon.svg'
import styles from './styles.module.scss'

interface BalanceLIMCProps {
  clientWidth: number
}

export const BalanceLIMC: React.FC<BalanceLIMCProps> = ({ clientWidth }) => {
  const [balance] = useState<number>(11236.26)
  const [balance2] = useState<number>(1235)
  const [lockBalance] = useState<number>(1263)

  return (
    <div className={styles.cabinet__balanceLIMC}>
      <div className={styles.cabinet__balanceLIMC_item1}>
        <div className={styles.cabinet__balanceLIMCTitle}>
          <img src={limcYellow} />
          LIMC
        </div>
        {clientWidth > 768 ? (
          <div>
            <div className={styles.cabinet__balanceLIMCStats}>
              {balance2}
              <span>/</span>
              <span>
                {lockBalance}
                <img src={lockIcon} />
              </span>
            </div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balance}</div>
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = 300 USDT</div>
            <hr className={styles.cabinet__balanceLIMCLine} />
          </div>
        ) : (
          <div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balance}</div>
            <div className={styles.cabinet__balanceLIMCStats}>
              {balance2}
              <span>/</span>
              <span>
                {lockBalance}
                <img src={lockIcon} />
              </span>
            </div>
            <hr className={styles.cabinet__balanceLIMCLine} />
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = 300 USDT</div>
          </div>
        )}
        <div style={{ margin: '0 0 10px 0' }}>
          <button className={styles.cabinet__balanceLIMCButton} type='button'>
            Купить LIMC
          </button>
        </div>
        <div>
          <button className={styles.cabinet__balanceLIMCButton} type='button'>
            Продать LIMC
          </button>
        </div>
      </div>
    </div>
  )
}
