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
          <span>{t('footer_mobNavPurse')}</span>
        </NavLink>
        <NavLink to='/broadcasts' exact className={Styles.link} activeClassName={Styles.broadcasts}>
          <BroadcastsIcon />
          <span>{t('footer_mobNavStreams')}</span>
        </NavLink>
        <NavLink to='/chat' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ChatIcon />
          <span>{t('footer_mobNavChat')}</span>
        </NavLink>
        <NavLink to='/profile' exact className={Styles.link} activeClassName={`${Styles.link_active}`}>
          <ProfileIcon />
          <span>{t('footer_mobNavProfile')}</span>
        </NavLink>
      </ul>
    </footer>
  )
}
