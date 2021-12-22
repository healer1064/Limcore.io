import React from 'react'
import Styles from './styles.module.scss'

interface ToggleButtonProps {
  onChange?: any
  checked?: boolean
  disabled?: boolean
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange, checked, disabled }) => {
  return (
    <label className={Styles.toggle}>
      <input onChange={onChange} type='checkbox' checked={checked} disabled={disabled} />
      <span className={Styles.slider} />
    </label>
  )
}
