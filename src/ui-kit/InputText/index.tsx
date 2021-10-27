import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  className?: string
  onChange?: any
  type?: string
  name?: string
  value?: string
  placeholder?: string
  maxLength?: number
  error?: string
}

export const InputText: React.FC<InputProps> = ({
  className,
  onChange,
  type,
  name,
  value,
  placeholder,
  maxLength,
  error,
}) => {
  const cls = [`${Styles.input}`]

  if (className) {
    cls.push(className)
  }

  return (
    <>
      <input
        className={cls.join(' ')}
        onChange={onChange}
        type={!type ? 'text' : type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && <span className={Styles.error}>{error}</span>}
    </>
  )
}
