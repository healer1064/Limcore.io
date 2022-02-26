import React from 'react'

import styles from './styles.module.scss'

interface HitBTCProps {
  onChange: (value: Variebles) => () => unknown
  value: Variebles
}

export enum Variebles {
  'HITBTC',
  'STANDART',
}

export const HitBTC: React.FC<HitBTCProps> = ({ onChange, value }) => {
  return (
    <div className={styles.HitBTC}>
      <div className={styles.buttons}>
        <div
          className={!value ? styles.button__selected : styles.button__nonSelect}
          role='button'
          onClick={onChange(0)}
        >
          $300 HitBTC
        </div>
        <div className={value ? styles.button__selected : styles.button__nonSelect} role='button' onClick={onChange(1)}>
          $250
        </div>
      </div>
      {!value ? (
        <>
          <p className={styles.HitBTC__startMining}>Старт майнинга с момента покупки</p>
          <div className={styles.HitBTC__linkWrapper}>
            <a className={styles.HitBTC__link} href='#'>
              hitbtc.com
            </a>
          </div>
        </>
      ) : (
        <p className={styles.HitBTC__textStandart}>
          Lock-up период 3 месяца. Старт майнинга в течение 60 дней c даты покупки
        </p>
      )}
    </div>
  )
}
