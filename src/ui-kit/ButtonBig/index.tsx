import React from 'react'
import Styles from './styles.module.scss'

interface ButtonProps {
  className?: string
  onClick?: any
  disabled?: boolean
}

export const ButtonBig: React.FC<ButtonProps> = ({ className, onClick, disabled, children, ...props }) => {
  const cls = [`${Styles.button}`]

  if (className) {
    cls.push(className)
  }

  return (
    <button {...props} className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
