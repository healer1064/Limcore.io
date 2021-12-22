import React from 'react'
import Styles from './styles.module.scss'

interface InputRadioProps {
  onChange?: any
  value?: string
  checked?: boolean
  titleRadio: string
}

export const InputRadio: React.FC<InputRadioProps> = ({ onChange, value, checked, titleRadio }) => {
  return (
    <fieldset className={Styles.block}>
      <input className={Styles.input} onChange={onChange} value={value} type='radio' name='radio' checked={checked} />
      <span className={Styles.radio} />
      {titleRadio}
    </fieldset>
  )
}
