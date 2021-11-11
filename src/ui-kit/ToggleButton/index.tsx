import React from 'react'
import Styles from './styles.module.scss'

interface ToggleButtonProps {
  onChange?: any
  checked?: boolean
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange, checked }) => {
  return (
    <label className={Styles.toggle}>
      <input onChange={onChange} type='checkbox' checked={checked} />
      <span className={Styles.slider}>{}</span>
    </label>
  )
}
