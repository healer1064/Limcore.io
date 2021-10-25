import React from 'react'
import InputMask from 'react-input-mask'
import Styles from './styles.module.scss'

interface InputPhoneProps {
  value: string
  validValue?: boolean
  placeholder: string
  onChange: any
}

export const InputPhone: React.FC<InputPhoneProps> = ({ value, validValue, onChange, placeholder }) => {
  return (
    <>
      <InputMask
        className={Styles.input}
        type='phone'
        value={value}
        onChange={onChange}
        mask='+7 (999) 999 99-99'
        placeholder={placeholder}
      />
      {!validValue && <span className={Styles.error}>Неверный формат телефона</span>}
    </>
  )
}
