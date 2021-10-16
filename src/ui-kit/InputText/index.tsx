import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  className?: string
  name?: string
  placeholder?: string
}

export const InputText: React.FC<InputProps> = ({ className, name, placeholder }) => {
  const cls = [`${Styles.input}`]

  if (className) {
    cls.push(className)
  }

  return <input className={cls.join(' ')} type='text' name={name} placeholder={placeholder} />
}
