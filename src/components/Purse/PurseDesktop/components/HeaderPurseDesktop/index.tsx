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
import { changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'

interface IHeaderPurseDesktop {
  isProfileActive: boolean
  openProfile: () => void
  closeProfile: () => void
}

export const HeaderPurseDesktop = ({ isProfileActive, openProfile, closeProfile }: IHeaderPurseDesktop) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const history = useHistory()

  const userName = useAppSelector((state) => state.user.userData?.name)
  const userPhone = useAppSelector((state) => state.user.userData?.phone)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)
  const currentName = userName || userPhone

  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    location.reload()
  }

  const openMain = () => dispatch(changeViewContent('main'))
  const openBroadcasts = () => dispatch(changeViewContent('broadcasts'))

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <Link
          className={classnames([styles.nav__link, viewContent === 'main' && styles.nav__link_active])}
          to='main'
          onClick={openMain}
        >
          {t('purse_navMain')}
        </Link>
        <Link
          className={classnames([styles.nav__link, viewContent === 'broadcasts' && styles.nav__link_active])}
          to='broadcasts'
          onClick={openBroadcasts}
        >
          {t('purse_navStreams')}
        </Link>
        <LanguagePopup />
      </nav>

      <div className={styles.profileGroup} onClick={openProfile}>
        <img className={styles.profileIcon} src={profile} />
        <p className={styles.profileName}>{currentName}</p>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <LogoutIcon />
        </button>
      </div>

      <Modal active={isProfileActive} setActive={closeProfile} crossFlag isDesktop>
        <ModalHeader title={currentName} onClick={closeProfile} />
        <ProfileMobile />
      </Modal>
    </header>
  )
}
