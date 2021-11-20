import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'
import userIcon from '@icons/user.svg'
import { ProfileHeaderIcon } from '@icons/ProfileHeaderIcon'
import logout from '@icons/logout.svg'
import { Container } from '@components/Container'
import RUS from '@icons/flag-ru.svg'
import ENG from '@icons/flag-en.svg'

import { Telegram } from '@icons/Telegram'
import { Instagram } from '@icons/Instagram'
import { Youtube } from '@icons/Youtube'
import { useHistory, useLocation } from 'react-router'
import { setIsAuth } from '../../../pages/auth/redux/authSlice'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import close from '@icons/close.svg'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { VectorIcon } from '@icons/VectorIcon'
import { LoginIcon } from '@icons/LoginIcon'
import { LanguagePopup } from '@components/LanguagePopup'

export const HeaderMobile: React.FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)
  const [t, i18n] = useTranslation()

  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const closeBurger = () => {
    setBurgerOpen(false)
  }
  const openBurger = () => {
    setBurgerOpen(true)
  }
  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    window.location.reload()
  }

  const languages = ['ru', 'en']
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setShowPopapLanguage(false)
  }

  const iconCondition =
    (isAuth && window.location.pathname.includes('my')) ||
    (isAuth && window.location.pathname.includes('chat')) ||
    (isAuth && window.location.pathname.includes('broadcasts')) ||
    (isAuth && window.location.pathname.includes('profile'))

  const burgerStyles = `${burgerOpen ? Styles.burgerMenuOpened : Styles.burgerMenuClosed}`
  const tempLink = [
    { id: 1, value: t('nav_about'), link: 'limcore', spy: true, smooth: true },
    { id: 2, value: t('nav_roadmap'), link: 'roadmap', spy: true, smooth: true },
    { id: 3, value: t('nav_team'), link: 'team', spy: true, smooth: true },
    // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
    { id: 5, value: t('nav_qa'), link: 'questionsMobile', spy: true, smooth: true },
  ]

  return (
    <header className={Styles.header}>
      {isAuth ? (
        <LinkDom to='/my' className={Styles.logoIcon}>
          {iconCondition ? <Logo /> : <img className={Styles.logo} src={logoIcon} alt='Лого' />}
        </LinkDom>
      ) : (
        <LinkDom to='/' className={Styles.logoIcon}>
          {iconCondition ? <Logo /> : <img className={Styles.logo} src={logoIcon} alt='Лого' />}
        </LinkDom>
      )}
      <div className={Styles.wrap}>
        {!isAuth && location.pathname !== '/auth' && (
          <a onClick={() => history.push('/auth')} className={Styles.logoLink}>
            <img src={userIcon} alt='Иконка' />
          </a>
        )}
        {isAuth && window.location.pathname === '/' ? (
          <>
            <button className={Styles.profileBtn}>
              <LinkDom to='/my' className={Styles.profileBtn_link}>
                <LoginIcon />
                <span className={Styles.enter}>{t('profile')}</span>
              </LinkDom>
            </button>
            <div className={Styles.burger} onClick={openBurger}>
              <span className={Styles.row}>{}</span>
              <span className={Styles.row}>{}</span>
              <span className={Styles.row}>{}</span>
            </div>
          </>
        ) : (
          <>
            <LanguagePopup />
            {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null}
          </>
        )}
        <div className={burgerStyles}>
          <Container title='' onClose={closeBurger}>
            <img className={Styles.logoInOpenBurger} src={logoIcon} alt='Лого' />
            {window.location.pathname === '/' ? (
              <ul className={Styles.list}>
                {tempLink?.map((item) => {
                  return (
                    <Link
                      className={Styles.link}
                      key={item.id}
                      to={item.link}
                      spy={item.spy}
                      smooth={item.smooth}
                      onClick={closeBurger}
                    >
                      {item.value}
                    </Link>
                  )
                })}
              </ul>
            ) : null}

            <ul className={Styles.social}>
              <li className={Styles.content_item}>
                <a href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer'>
                  <Telegram className={Styles.content_icon} />
                </a>
              </li>
              <li className={Styles.content_item}>
                <a
                  href='https://instagram.com/limcore.io?utm_medium=copy_link'
                  target='blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className={Styles.content_icon} />
                </a>
              </li>
              <li className={Styles.content_item}>
                <a href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg' target='blank' rel='noopener noreferrer'>
                  <Youtube className={Styles.content_icon} />
                </a>
              </li>
            </ul>
            <div className={Styles.group}>
              <p className={Styles.email}>
                <a href='mailto:info@limcore.io'>info@limcore.io</a>
              </p>
              <LanguagePopup position={{ top: '-105px', left: '-25px', background: '#4a70f8' }} />
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
