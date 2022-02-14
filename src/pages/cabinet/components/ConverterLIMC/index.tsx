import React from 'react'

import styles from './styles.module.scss'
import USDTIcon from '@icons/USDTIcon.svg'
import blueArrow from '@icons/blueArrow.svg'

export const ConverterLIMC: React.FC = () => {
  return (
    <div className={styles.cabinet__converterLIMC}>
      <div className={styles.cabinet__converterLIMCSelect}>
        <img src={USDTIcon} />
        <span>USDT</span>
        <span>TRC-20</span>
        <img src={blueArrow} />
      </div>
      <div className={styles.cabinet__converterLIMCNum}>2,398</div>
    </div>
  )
}
