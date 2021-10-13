import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './styles.module.scss'

import purseIcon from '@icons/purse.svg'
import chatIcon from '@icons/chat.svg'
import broadcastsIcon from '@icons/broadcasts.svg'
import profileIcon from '@icons/profile.svg'

export const FooterMobile = () => {
  return (
    <div className={Styles.footer}>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <img src={purseIcon} alt='Иконка' />
          <span>Кошелек</span>
        </li>
        <li className={Styles.item}>
          <img src={broadcastsIcon} alt='Иконка' />
          <span>Трансляции</span>
        </li>
        <li className={Styles.item}>
          <img src={chatIcon} alt='Иконка' />
          <span>Чат</span>
        </li>
        <li className={Styles.item}>
          <img src={profileIcon} alt='Иконка' />
          <span>Профиль</span>
        </li>
      </ul>
    </div>
  )
}
