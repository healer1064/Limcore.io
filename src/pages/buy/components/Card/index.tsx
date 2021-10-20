import React from 'react'
import Styles from './style.module.scss'
import { InputRadio } from '../../../../ui-kit/InputRadio'

export const Card = ({ label, src, ...props }) => {
  return (
    <fieldset className={Styles.card}>
      <label className={Styles.card__label}>{label}</label>
      <div>
        {props.children}
        <img src={src} />
      </div>
      <InputRadio titleRadio='' />
    </fieldset>
  )
}
