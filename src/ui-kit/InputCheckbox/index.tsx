import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  titleCheckbox: string
}

export const InputCheckbox: React.FC<InputProps> = ({ titleCheckbox }) => {
  return (
    <div className={Styles.block}>
      <input className={Styles.input} type='checkbox' />
      <span className={Styles.checkbox}>{}</span>
      {titleCheckbox}
    </div>
  )
}
