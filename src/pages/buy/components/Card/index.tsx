import React from 'react'
import Styles from './style.module.scss'

export const Card = ({ label, src, ...props }) => {
  return (
    <fieldset className={Styles.card}>
      <label className={Styles.card_label}>{label}</label>
      <div>
        {props.children}
        <img src={src} />
      </div>
      <input className={Styles.card_input} />
    </fieldset>
  )
}
