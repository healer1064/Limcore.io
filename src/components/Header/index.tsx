import React, { useEffect, useState } from 'react'
// import { Link } from 'react-scroll'
import Styles from './style.module.scss'
import { Link as LinkDom } from 'react-router-dom'

import logoIcon from '@icons/logo.svg'
// import logout from '@icons/logout.svg'
import { LoginIcon } from '@icons/LoginIcon'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
import { setIsBuyLimcClick } from '../../pages/auth/redux/authSlice'
// import { useHistory } from 'react-router'

import { useTranslation } from 'react-i18next'
// import { ButtonBig } from '../../ui-kit/ButtonBig'
// import { styled } from '@material-ui/core'
import { LanguagePopup } from '../LanguagePopup/index'
// import { doc } from 'prettier'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  // const history = useHistory()
  const [t] = useTranslation()

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  // const [btnClass, setBtnClass] = useState(Styles.login)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const isBuyLimcClick = useAppSelector((state) => state.auth.isBuyLimcClick)

  // const tempLink = [
  //   { id: 1, value: t('nav_about'), link: 'limcore', spy: true, smooth: true },
  //   { id: 2, value: t('nav_roadmap'), link: 'roadmap', spy: true, smooth: true },
  //   { id: 3, value: t('nav_team'), link: 'team', spy: true, smooth: true },
  //   { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
  // { id: 5, value: t('nav_qa'), link: 'questions', spy: true, smooth: true },
  // ]

  const links = [
    { id: 1, value: t('nav_about'), link: 'limcore' },
    { id: 2, value: t('nav_roadmap'), link: 'roadmap' },
    { id: 3, value: t('nav_team'), link: 'team' },
    { id: 5, value: t('nav_qa'), link: 'questions' },
  ]

  useEffect(() => {
    setIsLoginModalVisible(isBuyLimcClick)
  }, [isBuyLimcClick])

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
    if (isBuyLimcClick) {
      const close = () => dispatch(setIsBuyLimcClick(false))
      setTimeout(close, 200)
    }
  }

  // const onLogout = () => {
  //   localStorage.clear()
  //   dispatch(setIsAuth(false))
  //   history.push('/')
  //   window.location.reload()
  // }
  useEffect(() => {
    if (isAuth) {
      // setBtnClass(Styles.displayNone)
      setIsLoginModalVisible(false)
    }
  }, [isAuth])

  function handleClick(e) {
    e.preventDefault()
    const link = e.target.getAttribute('href').slice(1)
    const destination = document.getElementById(`${link}`)
    destination.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={Styles.header}>
      <nav className={Styles.wrapper}>
        <a href='/' className={Styles.logoLink} target='blank' rel='noopener noreferrer'>
          <img src={logoIcon} alt='Лого' />
        </a>
        <ul className={Styles.list}>
          {links.map((item) => {
            return (
              <a className={Styles.link} key={item.id} href={`#${item.link}`} onClick={(e) => handleClick(e)}>
                {item.value}
              </a>
            )
          })}
        </ul>
        <div className={Styles.container}>
          {/* {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null} */}
          {/* {isAuth ? (
            <>
              <LinkDom to='/my'>
                <ProfileHeaderIcon className={Styles.profileLogo} />
              </LinkDom>
              <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' />
            </>
          ) : null} */}
          <LanguagePopup />
          {isAuth ? (
            <button className={Styles.profileBtn} type='button'>
              <LinkDom to='/my' className={Styles.profileBtn_link}>
                <LoginIcon />
                {t('profile')}
              </LinkDom>
            </button>
          ) : (
            <button className={Styles.loginBtn} onClick={handleLoginModalOpen} type='button'>
              <LoginIcon />
              {t('login')}
            </button>
          )}
          {/* {!isAuth && (
            <button className={btnClass} onClick={handleLoginModalOpen}>
              <LoginIcon />
              <span className={Styles.enter}>{t('login')}</span>
            </button>
          )} */}

          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div>
      </nav>
    </header>
  )
}
