import React from 'react'
import Styles from './style.module.scss'

export const TermsOfUse = () => {
  return (
    <div className={Styles.terms}>
      <button className={Styles.terms__button} />
      <p className={Styles.terms__paragraph}>Продолжая, вы принимаете правила пользования сервисом</p>
    </div>
  )
}
