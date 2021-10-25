import React from 'react'
import Styles from './styles.module.scss'

interface InputEmailProps {
  value: string
  validValue?: boolean
  placeholder: string
  onChange: any
}

export const InputEmail: React.FC<InputEmailProps> = ({ value, validValue, onChange, placeholder }) => {
  return (
    <>
      <input
        className={!validValue ? `${Styles.input} ${Styles.input_error}` : `${Styles.input}`}
        type='email'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {!validValue && <span className={Styles.error}>Неверный формат e-mail</span>}
    </>
  )
}
