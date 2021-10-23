import React from 'react'
import Styles from './style.module.scss'

interface ButtonProps {
  className?: string
  onClick?: any
}

export const ButtonForCode: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  const cls = [`${Styles.buttonForCode}`]

  if (className) {
    cls.push(className)
  }

  return (
    <button className={cls.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
