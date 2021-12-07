import React from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import profile from '@icons/profileIcon.png'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import classnames from 'classnames'

import { Modal } from '@components/Modal/index'
import { ModalHeader } from '@components/Modal/ModalHeader'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { setIsAuth } from '../../../../../pages/auth/redux/authSlice'
import { useHistory } from 'react-router'
import { LogoutIcon } from '@icons/LogoutIcon'
import { useTranslation } from 'react-i18next'
import { LanguagePopup } from '@components/LanguagePopup'
import { changeViewPurseContent } from '../../../../../pages/cabinet/redux/cabinetSlice'

interface IHeaderPurseDesktop {
  isProfileActive: boolean
  openProfile: () => void
  closeProfile: () => void
}

export const HeaderPurseDesktop = ({ isProfileActive, openProfile, closeProfile }: IHeaderPurseDesktop) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const history = useHistory()

  const firstName = useAppSelector((state) => state.user.data.first_name)
  const lastName = useAppSelector((state) => state.user.data.last_name)
  const userPhone = useAppSelector((state) => state.profile.phone)
  const currentName = () => {
    if (firstName && lastName) {
      return `${firstName} ${lastName[0]}.`
    } else {
      return userPhone
    }
  }
  const avatarUrl = useAppSelector((state) => state.user.data.avatar)
  const viewPurseContent = useAppSelector((state) => state.cabinet.viewPurseContent)

  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    location.reload()
  }

  const openMain = () => dispatch(changeViewPurseContent('main'))
  const openBroadcasts = () => dispatch(changeViewPurseContent('broadcasts'))

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <Link
          className={classnames([styles.nav__link, viewPurseContent === 'main' && styles.nav__link_active])}
          to='main'
          onClick={openMain}
        >
          {t('purse_navMain')}
        </Link>
        <Link
          className={classnames([styles.nav__link, viewPurseContent === 'broadcasts' && styles.nav__link_active])}
          to='broadcasts'
          onClick={openBroadcasts}
        >
          {t('purse_navStreams')}
        </Link>
        <LanguagePopup />
      </nav>

      <div className={styles.profileGroup} onClick={openProfile}>
        <img className={styles.profileIcon} src={avatarUrl || profile} />
        <p className={styles.profileName}>{currentName()}</p>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <LogoutIcon />
        </button>
      </div>

      <Modal active={isProfileActive} setActive={closeProfile} crossFlag isDesktop>
        <ModalHeader title={currentName()} onClick={closeProfile} />
        <ProfileMobile />
      </Modal>
    </header>
  )
}
