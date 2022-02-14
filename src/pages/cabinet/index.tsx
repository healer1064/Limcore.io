import React from 'react'

import styles from './styles.module.scss'
import { BalanceLIMC } from './components/BalanceLIMC'
import { ConverterLIMC } from './components/ConverterLIMC'

export const CabinetPage: React.FC = () => {
  return (
    <div className={styles.cabinet}>
      <div className={styles.cabinet__container}>
        <section className={styles.cabinet__balance}>
          <h2>Баланс</h2>
          <div>
            <div style={{ width: '100%' }}>
              <BalanceLIMC />
              <ConverterLIMC />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
