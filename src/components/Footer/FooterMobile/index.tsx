import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './styles.module.scss'

import { PurseIcon } from '@icons/PurseIcon'
import { ChatIcon } from '@icons/ChatIcon'
import { BroadcastsIcon } from '@icons/BroadcastsIcon'
import { ProfileIcon } from '@icons/ProfileIcon'
import { useTranslation } from 'react-i18next'

export const FooterMobile: React.FC = () => {
  const [t] = useTranslation()

  return (
    <footer className={Styles.footer}>
      <ul className={Styles.list}>
        <NavLink to='/my' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <PurseIcon />
          {t('footer_mobNavPurse')}
        </NavLink>
        {/* <NavLink to='/broadcasts' exact className={Styles.link} activeClassName={Styles.broadcasts}>
          <BroadcastsIcon />
          {t('footer_mobNavStreams')}
        </NavLink> */}
        <NavLink to='/chat' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ChatIcon />
          {t('footer_mobNavChat')}
        </NavLink>
        <NavLink to='/profile' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ProfileIcon />
          {t('footer_mobNavProfile')}
        </NavLink>
      </ul>
    </footer>
  )
}
