import React from 'react'
import styles from './styles.module.scss'

interface IBlueArrowProps {
  onClick?: (boolean) => void
}

function BlueArrow({ onClick }: IBlueArrowProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.svg}
      onClick={onClick}
    >
      <path
        d='M9.14258 17.1427L14.8569 11.4284L9.14258 5.71416'
        stroke='#4A70F8'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default BlueArrow
