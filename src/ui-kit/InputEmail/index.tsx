import React from 'react'
import Styles from './styles.module.scss'

interface InputEmailProps {
  onChange: any
  value: string
  validValue?: boolean
  placeholder: string
}

export const InputEmail: React.FC<InputEmailProps> = ({ onChange, value, validValue, placeholder }) => {
  return (
    <>
      <input
        className={!validValue ? `${Styles.input} ${Styles.input_error}` : `${Styles.input}`}
        onChange={onChange}
        type='email'
        value={value}
        placeholder={placeholder}
      />
      {/* {!validValue && <span className={Styles.error}>Неверный формат e-mail</span>} */}
    </>
  )
}
