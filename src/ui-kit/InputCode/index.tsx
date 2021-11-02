import React from 'react'
import Styles from './styles.module.scss'

interface InputCodeProps {
  onChange: any
  name?: string
  value: string
  validValue: boolean
}

export const InputCode: React.FC<InputCodeProps> = ({ onChange, name, value, validValue }) => {
  return (
    <>
      <input
        className={!validValue ? `${Styles.input} ${Styles.input_error}` : `${Styles.input}`}
        onChange={onChange}
        type='text'
        name={name}
        value={value}
        placeholder='_ _ _ _'
        maxLength={4}
      />
      {!validValue && <span className={Styles.error}>Неверный код. Попробуйте еще раз</span>}
    </>
  )
}
