import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './styles.module.scss'

import { PurseIcon } from '@icons/PurseIcon'
import { ChatIcon } from '@icons/ChatIcon'
import { BroadcastsIcon } from '@icons/BroadcastsIcon'
import { ProfileIcon } from '@icons/ProfileIcon'

export const FooterMobile: React.FC = () => {
  return (
    <div className={Styles.footer}>
      <ul className={Styles.list}>
        <NavLink to='/' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <PurseIcon />
          <span>Кошелек</span>
        </NavLink>
        <NavLink to='/broadcasts' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ChatIcon />
          <span>Трансляции</span>
        </NavLink>
        <NavLink to='/chat' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <BroadcastsIcon />
          <span>Чат</span>
        </NavLink>
        <NavLink to='/profile' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ProfileIcon />
          <span>Профиль</span>
        </NavLink>
      </ul>
    </div>
  )
}
