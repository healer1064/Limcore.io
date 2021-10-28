import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'
import userIcon from '@icons/user.svg'

export const HeaderMobile: React.FC = () => {
  return (
    <header className={Styles.header}>
      <img className={Styles.logo} src={logoIcon} alt='Лого' />
      <div className={Styles.wrap}>
        <Link to='auth'>
          <img src={userIcon} alt='Иконка' />
        </Link>
        <div className={Styles.burger}>
          <span className={Styles.row}>{}</span>
          <span className={Styles.row}>{}</span>
          <span className={Styles.row}>{}</span>
        </div>
      </div>
    </header>
  )
}
