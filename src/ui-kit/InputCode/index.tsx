import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  className?: string
  onChange: any
  name?: string
  value: string
  validValue: boolean
}

export const InputCode: React.FC<InputProps> = ({ className, onChange, name, value, validValue }) => {
  const cls = [`${Styles.input}`]

  if (className) {
    cls.push(className)
  }

  return (
    <>
      <input
        className={cls.join(' ')}
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
