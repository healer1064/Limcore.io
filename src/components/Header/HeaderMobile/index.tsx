import React, { useState } from 'react'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'

export const HeaderMobile = () => {
  const [view, setView] = useState('main')

  return (
    <div className={Styles.header}>
      {view === 'main' && (
        <>
          <img className={Styles.logo} src={logoIcon} alt='Лого' />
          <div className={Styles.burger}>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
          </div>
        </>
      )}
      {view === 'filling' && (
        <>
          <button className={Styles.back}>{}</button>
          <span className={Styles.caption}>Заполните профиль</span>
          <button className={Styles.close}>{}</button>
        </>
      )}
    </div>
  )
}
