import React from 'react'
import Styles from './styles.module.scss'

interface InputProps {
  titleRadio: string
}

export const InputRadio: React.FC<InputProps> = ({ titleRadio }) => {
  return (
    <div className={Styles.block}>
      <input className={Styles.input} type='radio' name='radio' />
      <span className={Styles.radio}>{}</span>
      {titleRadio}
    </div>
  )
}
