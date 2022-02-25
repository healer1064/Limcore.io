import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

export interface IProgressBar {
  current: number
  limit: number
  isMobile?: boolean
  value: string
}

export const ProgressBar: React.FC<IProgressBar> = ({ current, limit, isMobile, value }) => {
  const fillerStyles = {
    height: '100%',
    width: `${(current / limit) * 100}%`,
    backgroundColor: '#26DFF8',
    borderRadius: 'inherit',
  }
  const textStyle = clsx({
    [styles.text]: true,
    [styles.text_mobile]: isMobile,
  })
  return (
    <>
      <p className={textStyle}>
        Показано {current} из {limit} {value}
      </p>
      <div className={styles.container}>
        <div style={fillerStyles} />
      </div>
    </>
  )
}
