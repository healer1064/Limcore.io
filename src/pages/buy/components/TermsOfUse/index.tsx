import React from 'react'
import Styles from './style.module.scss'
import { Label } from '../../../../ui-kit/Label'
import { InputCheckbox } from '../../../../ui-kit/InputCheckbox'

export const TermsOfUse = () => {
  return (
    <Label className={Styles.terms}>
      <InputCheckbox titleCheckbox='Продолжая, вы принимаете правила пользования сервисом' />
    </Label>
  )
}
