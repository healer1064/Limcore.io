import React from 'react'
import Styles from './styles.module.scss'

interface InputPhoneProps {
  onChange: any
  value: string
  validValue?: boolean
  placeholder: string
}

export const InputPhone: React.FC<InputPhoneProps> = ({ onChange, value, validValue, placeholder }) => {
  return (
    <>
      <input
        className={!validValue ? `${Styles.input} ${Styles.input_error}` : `${Styles.input}`}
        onChange={onChange}
        type='phone'
        value={value}
        placeholder={placeholder}
      />
      {!validValue && <span className={Styles.error}>Неверный формат телефона</span>}
    </>
  )
}
