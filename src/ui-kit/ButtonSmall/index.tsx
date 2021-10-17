import React from 'react'
import Styles from './styles.module.scss'

interface ButtonProps {
  className?: string
  onClick?: any
}

export const ButtonSmall: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  const cls = [`${Styles.button}`]

  if (className) {
    cls.push(className)
  }

  return (
    <button className={cls.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
