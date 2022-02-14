import React from 'react'

import limcYellow from '@icons/limcYellow.svg'
import lockIcon from '@icons/lockIcon.svg'
import styles from './styles.module.scss'

export const BalanceLIMC: React.FC = () => {
  return (
    <div className={styles.cabinet__balanceLIMC}>
      <div className={styles.cabinet__balanceLIMC_item1}>
        <div className={styles.cabinet__balanceLIMCTitle}>
          <img src={limcYellow} />
          LIMC
        </div>
        <div className={styles.cabinet__balanceLIMCStats}>
          1235
          <span>/</span>
          <span>
            1263
            <img src={lockIcon} />
          </span>
        </div>
        <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
        <div className={styles.cabinet__balanceLIMCSummary}>$11236,26</div>
        <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = 300 USDT</div>
        <hr className={styles.cabinet__balanceLIMCLine} />
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
