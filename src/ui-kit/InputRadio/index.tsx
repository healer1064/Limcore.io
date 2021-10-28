import React from 'react'
import Styles from './styles.module.scss'

interface InputRadioProps {
  onChange?: () => void
  checked?: boolean
  titleRadio: string
}

export const InputRadio: React.FC<InputRadioProps> = ({ onChange, checked, titleRadio }) => {
  return (
    <div className={Styles.block}>
      <input className={Styles.input} onChange={onChange} type='radio' name='radio' checked={checked} />
      <span className={Styles.radio}>{}</span>
      {titleRadio}
    </div>
  )
}
