import React from 'react'
import styles from './styles.module.scss'
import { Label } from '../../../../../../../../../ui-kit/Label/index'
import { balanceLimc, balanceUsdt, creditCard } from '../../../../../../images'

export const CurrencySort = ({ onChange }) => {
  return (
    <ul className={styles.modalList}>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='LIMC' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            <img src={balanceLimc} className={styles.icon} />
            LIMC
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='USDT' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            <img src={balanceUsdt} className={styles.icon} />
            USDT
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='USD' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            <img src={creditCard} className={styles.icon} />
            USD
          </div>
        </Label>
      </li>
    </ul>
  )
}
