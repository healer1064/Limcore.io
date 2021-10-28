import React from 'react'
import Styles from './styles.module.scss'

interface InputCheckboxProps {
  icon?: any
  titleCheckbox: string
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({ icon, titleCheckbox }) => {
  return (
    <div className={Styles.block}>
      <input className={Styles.input} type='checkbox' />
      <span className={Styles.checkbox}>{}</span>
      {icon && <img src={icon} className={Styles.icon} />}
      {titleCheckbox}
    </div>
  )
}
