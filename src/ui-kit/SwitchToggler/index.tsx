import React from 'react'
import styles from './styles.module.scss'

export const SwitchToggler = ({ isChecked, onChange }) => {
  return (
    <label className={styles.toggleSwitch}>
      <input type='checkbox' checked={isChecked} onChange={onChange} />
      <span className={styles.switch} />
    </label>
  )
}
