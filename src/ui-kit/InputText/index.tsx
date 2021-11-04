import React from 'react'
import Styles from './styles.module.scss'

interface InputTextProps {
  className?: string
  onChange?: any
  type?: string
  name?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  error?: string
}

export const InputText: React.FC<InputTextProps> = ({
  className,
  onChange,
  type,
  name,
  value,
  placeholder,
  disabled,
  maxLength,
  error,
}) => {
  const cls = [`${Styles.input}`]

  if (className) {
    cls.push(className)
  }

  if (error) {
    cls.push(`${Styles.input_error}`)
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
        disabled={disabled}
        maxLength={maxLength}
      />
      {error && <span className={Styles.error}>{error}</span>}
    </>
  )
}
