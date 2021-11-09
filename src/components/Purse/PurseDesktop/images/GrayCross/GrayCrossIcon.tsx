import React from 'react'
import styles from './styles.module.scss'

function GrayCrossIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      className={styles.svg}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.125 5.8737L5.87542 14.1233'
        stroke='#99A0AD'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={styles.path}
      />
      <path
        d='M5.875 5.8737L14.1246 14.1233'
        stroke='#99A0AD'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={styles.path}
      />
    </svg>
  )
}

export default GrayCrossIcon
