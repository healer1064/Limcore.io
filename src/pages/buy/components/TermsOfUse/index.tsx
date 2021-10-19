import React from 'react'
import Styles from './style.module.scss'

export const TermsOfUse = () => {
  return (
    <div className={Styles.terms_container}>
      <button className={Styles.terms_button} />
      <p className={Styles.terms_paragraph}>Продолжая, вы принимаете правила пользования сервисом</p>
    </div>
  )
}
