import React from 'react'
import styles from './style.module.scss'

export const ProgressBar = ({ current, limit }) => {
  const fillerStyles = {
    height: '100%',
    width: `${(current / limit) * 100}%`,
    backgroundColor: '#26DFF8',
    borderRadius: 'inherit',
  }
  return (
    <>
      <p className={styles.text}>
        Показано {current} из {limit} кошельков
      </p>
      <div className={styles.container}>
        <div style={fillerStyles} />
      </div>
    </>
  )
}
