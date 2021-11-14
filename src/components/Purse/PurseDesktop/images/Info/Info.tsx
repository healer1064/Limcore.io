import React from 'react'
import styles from './styles.module.scss'

interface IInfoIconProps {
  onClick?: (boolean) => void
}

function InfoIcon({ onClick }: IInfoIconProps) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.svg}
      onClick={onClick}
    >
      <path
        d='M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z'
        stroke='#99A0AD'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={styles.path}
      />
      <path
        d='M9 12V9'
        stroke='#99A0AD'
        className={styles.path}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 6H9.00744'
        stroke='#99A0AD'
        className={styles.path}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default InfoIcon
