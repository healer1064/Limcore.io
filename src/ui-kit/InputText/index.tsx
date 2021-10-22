import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  className?: string
  name?: string
  placeholder?: string
  maxLength?: number
}

export const InputText: React.FC<InputProps> = ({ className, name, placeholder, maxLength }) => {
  const cls = [`${Styles.input}`]

  if (className) {
    cls.push(className)
  }

  return <input className={cls.join(' ')} type='text' name={name} placeholder={placeholder} maxLength={maxLength} />
}
