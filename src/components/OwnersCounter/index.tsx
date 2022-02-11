import React from 'react'
import styles from './style.module.scss'

export interface IOwnersCounter {
  number: number
}

export const OwnersCounter: React.FC<IOwnersCounter> = ({ number }) => {
  return (
    <div className={styles.container}>
      {number} <span className={styles.text}>кошельков</span>
    </div>
  )
}
