import React, { useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'

export const HeaderMobile: React.FC = () => {
  const viewHeader = useAppSelector((state) => state.cabinet.viewHeader)

  return (
    <div className={Styles.header}>
      {viewHeader === 'main' && (
        <>
          <img className={Styles.logo} src={logoIcon} alt='Лого' />
          <div className={Styles.burger}>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
          </div>
        </>
      )}
      {viewHeader === 'filling' && (
        <>
          <button className={Styles.back}>{}</button>
          <span className={Styles.caption}>Заполните профиль</span>
          <button className={Styles.close}>{}</button>
        </>
      )}
    </div>
  )
}
