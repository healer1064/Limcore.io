import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

export interface IOwnersCounter {
  number: number
  isMobile?: boolean
}

export const OwnersCounter: React.FC<IOwnersCounter> = ({ number, isMobile }) => {
  const style = clsx({
    [styles.container]: true,
    [styles.container_mobile]: isMobile,
  })
  return (
    <div className={style}>
      {number} <span className={styles.text}>кошельков</span>
    </div>
  )
}
