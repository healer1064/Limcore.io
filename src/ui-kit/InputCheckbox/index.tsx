import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  titleCheckbox: string
  icon?: any
}

export const InputCheckbox: React.FC<InputProps> = ({ titleCheckbox, icon }) => {
  return (
    <div className={Styles.block}>
      <input className={Styles.input} type='checkbox' />
      <span className={Styles.checkbox}>{}</span>
      {icon && <img src={icon} className={Styles.icon} />}
      {titleCheckbox}
    </div>
  )
}
