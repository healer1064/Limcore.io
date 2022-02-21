import React from 'react'

import styles from './styles.module.scss'
import infoIcon from '@icons/infoButton.svg'

interface ButtonProps {
  type: string
  text: string
  onClick?: () => unknown
}

export const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      {type === 'info' && <img src={infoIcon} />}
    </button>
  )
}
