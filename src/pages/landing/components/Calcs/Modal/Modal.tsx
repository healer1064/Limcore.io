import React from 'react'
// import styles from '../style.module.scss'

export const Modal = (props) => {
  return (
    <div className={props.modal ? props.styles.calc__warn : props.styles.calc__warn_active}>
      <p className={props.styles.calc__warn_text}> без учета перспектив роста стоимости активов</p>
    </div>
  )
}
