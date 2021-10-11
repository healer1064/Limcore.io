import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

type ButtonType = 'primary-red' | 'primary-blue' | 'secondary-red' | 'naked' | 'secondary-blue' | 'invisible' | 'gray'

interface ButtonProps {
  type: ButtonType
  children: ReactNode
  buttonType?: 'button' | 'submit'
  fullWidth?: boolean
  disabled?: boolean
  uniqName?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  fullWidth = true,
  disabled = false,
  uniqName = 'Не указано',
  onClick,
  buttonType = 'button',
}: ButtonProps): ReactElement => {
  const cx = classNames.bind(styles)
  const className = cx(
    'button',
    { [`button-${type}`]: !disabled },
    { buttonFullWidth: fullWidth },
    { 'button-disabled': disabled },
  )

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (onClick) {
      event.preventDefault()
      event.stopPropagation()
      onClick()
    }
  }

  return (
    <button
      type={buttonType}
      className={className}
      disabled={disabled}
      data-uniq-name={uniqName}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
