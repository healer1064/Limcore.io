import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'

export const HeaderMobile: React.FC = () => {
  return (
    <header className={Styles.header}>
      <img className={Styles.logo} src={logoIcon} alt='Лого' />
      <div className={Styles.burger}>
        <span className={Styles.row}>{}</span>
        <span className={Styles.row}>{}</span>
        <span className={Styles.row}>{}</span>
      </div>
    </header>
  )
}
