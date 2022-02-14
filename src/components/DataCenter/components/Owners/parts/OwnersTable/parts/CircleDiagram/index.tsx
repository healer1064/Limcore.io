import React from 'react'
import styles from './style.module.scss'

export interface ICircleDiagram {
  current: number
  limit: number
  className?: string
}

export const CircleDiagram = ({ current, limit, className }) => {
  const charts = {
    background: `conic-gradient(#316469 0deg, #316469 ${(current / limit) * 100 * 3.6}deg, #26dff8 ${
      (current / limit) * 100 * 3.6
    }deg)`,
  }

  return (
    <div className={className}>
      <div className={styles.chart} style={charts} />
    </div>
  )
}
