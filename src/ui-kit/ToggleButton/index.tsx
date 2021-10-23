import React from 'react'
import Styles from './styles.module.scss'

export const ToggleButton: React.FC = () => {
  return (
    <label className={Styles.toggle}>
      <input type='checkbox' />
      <span className={Styles.slider}>{}</span>
    </label>
  )
}
