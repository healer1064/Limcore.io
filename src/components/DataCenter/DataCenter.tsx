import React, { useState } from 'react'
import styles from './styles.module.scss'
import { CalculatorCard } from './components/CalculatorCard/CalculatorCard'
import { Disks } from './components/Disks/Disks'
import { Owners } from './components/Owners/CalculatorCard'
import { Emission } from './components/Emission/CalculatorCard'

export const DataCenter = () => {
  const [view, setView] = useState<'disks' | 'owners' | 'emission'>('disks')

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>DataCenter</h2>
      <div className={styles.calculator}>
        <CalculatorCard
          data='18 900 TB'
          active={view === 'disks'}
          onClick={() => {
            setView('disks')
          }}
        >
          Рабочий объем пространства
        </CalculatorCard>
        <span className={styles.calculator__operator}>+</span>
        <CalculatorCard
          data='1 000 LIMC'
          active={view === 'owners'}
          onClick={() => {
            setView('owners')
          }}
        >
          Владельцы с lock up
        </CalculatorCard>
        <span className={styles.calculator__operator}>=</span>
        <CalculatorCard
          data='19 900 limc'
          tooltip
          active={view === 'emission'}
          onClick={() => {
            setView('emission')
          }}
        >
          Общая эмиссия токена LIMC
        </CalculatorCard>
      </div>
      <div className={styles.main}>
        {view === 'disks' && <Disks />}
        {view === 'owners' && <Owners />}
        {view === 'emission' && <Emission />}
      </div>
    </div>
  )
}
