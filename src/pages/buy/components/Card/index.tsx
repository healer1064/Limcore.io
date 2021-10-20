import React from 'react'
import Styles from './style.module.scss'
import { InputCheckbox } from '../../../../ui-kit/InputCheckbox'

export const Card = ({ label, src, ...props }) => {
  return (
    <fieldset className={Styles.card}>
      <label className={Styles.card__label}>{label}</label>
      <div>
        {props.children}
        <img src={src} />
      </div>
      <input className={Styles.card__input} />
    </fieldset>
  )
}
