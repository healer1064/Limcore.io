import React from 'react'
import Styles from './styles.module.scss'

interface InputCheckboxProps {
  onChange?: any
  value?: string
  checked?: boolean
  icon?: any
  titleCheckbox: string
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({ onChange, value, checked, icon, titleCheckbox }) => {
  return (
    <fieldset className={Styles.block}>
      <input className={Styles.input} onChange={onChange} type='checkbox' value={value} checked={checked} />
      <span className={Styles.checkbox} />
      {icon && <img src={icon} alt={value} className={Styles.icon} />}
      {titleCheckbox}
    </fieldset>
  )
}
