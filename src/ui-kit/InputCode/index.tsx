import React from 'react'
import Styles from './styles.module.scss'

interface InputCodeProps {
  onChange: any
  name?: string
  value: string
  validValue: boolean
  placeholder?: string
  maxLength?: number
}

export const InputCode: React.FC<InputCodeProps> = ({ onChange, name, value, validValue, placeholder, maxLength }) => {
  return (
    <input
      className={!validValue ? `${Styles.input} ${Styles.input_error}` : `${Styles.input}`}
      onChange={onChange}
      type='text'
      name={name}
      value={value}
      placeholder={!placeholder ? '_ _ _ _' : placeholder}
      maxLength={!maxLength ? 4 : maxLength}
      autoComplete='off'
      inputMode='numeric'
    />
  )
}
