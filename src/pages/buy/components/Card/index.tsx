import React from 'react'
import Styles from './style.module.scss'
import { InputRadio } from '../../../../ui-kit/InputRadio'
import { Label } from '../../../../ui-kit/Label'

export const Card = ({ label, src, ...props }) => {
  return (
    <fieldset className={Styles.card}>
      <label className={Styles.card__label}>{label}</label>
      <div>
        {props.children}
        <img src={src} />
      </div>
      <div className={Styles.card__inputContainer}>
        <Label>
          <InputRadio titleRadio='' />
        </Label>
      </div>
    </fieldset>
  )
}
