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
import { setIsAuth } from '../../../pages/auth/redux/auth.slice'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import close from '@icons/close.svg'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import { BroadcastsIcon } from '@icons/BroadcastsIcon'
import { ChatIcon } from '@icons/ChatIcon'
import { PurseIcon } from '@icons/PurseIcon'
import { ProfileIcon } from '@icons/ProfileIcon'
import { useTranslation } from 'react-i18next'

export const HeaderMobile: React.FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [t, i18n] = useTranslation()

  const isAuth = useAppSelector((state) => state.authNew.isAuth)
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

  const iconCondition =
    (isAuth && window.location.pathname.includes('my')) ||
    (isAuth && window.location.pathname.includes('chat')) ||
    (isAuth && window.location.pathname.includes('broadcasts')) ||
    (isAuth && window.location.pathname.includes('profile'))
  const burgerStyles = `${burgerOpen ? Styles.burgerMenuOpened : Styles.burgerMenuClosed}`
  const tempLink = [
    { id: 1, value: 'Что такое Limcore?', link: 'limcore', spy: true, smooth: true },
    { id: 2, value: 'Roadmap', link: 'roadmap', spy: true, smooth: true },
    { id: 3, value: 'Команда', link: 'team', spy: true, smooth: true },
    // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
    { id: 5, value: 'Вопрос-ответ', link: 'questionsMobile', spy: true, smooth: true },
  ]

  return (
    <header className={Styles.header}>
      <LinkDom to='/' className={Styles.logoIcon}>
        {iconCondition ? <Logo /> : <img className={Styles.logo} src={logoIcon} alt='Лого' />}
      </LinkDom>
      <div className={Styles.wrap}>
        {!isAuth && location.pathname !== '/auth' && (
          <a onClick={() => history.push('/auth')} className={Styles.logoLink}>
            <img src={userIcon} alt='Иконка' />
          </a>
        )}
        {isAuth ? (
          <>
            <LinkDom to='/my'>
              <ProfileHeaderIcon className={Styles.profileLogo} />
            </LinkDom>
            <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' />
          </>
        ) : null}
        {location.pathname === '/auth' ? (
          <LinkDom to='/'>
            <img src={close} alt='close' />
          </LinkDom>
        ) : (
          <div className={Styles.burger} onClick={openBurger}>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
            <span className={Styles.row}>{}</span>
          </div>
        )}
        <div className={burgerStyles}>
          <Container title='' onClose={closeBurger}>
            <img className={Styles.logoInOpenBurger} src={logoIcon} alt='Лого' />
            {!isAuth ? (
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
            {/* <ul className={Styles.social}>
              <li>
                <a href='https://twitter.com' target='blank' rel='noopener noreferrer'>
                  <img src={twitter} className={Styles.socialIcon} />
                </a>
              </li>
              <li>
                <a
                  href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg'
                  target='blank'
                  rel='noopener noreferrer'
                  className={Styles.YouTubeLink}
                >
                  <img src={youTube} className={Styles.YouTubeIcon} />
                </a>
              </li>
              <li>
                <a href='https://vk.com/' target='blank' rel='noopener noreferrer'>
                  <img src={vk} className={Styles.socialIcon} />
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com/limcore.io?utm_medium=copy_link'
                  target='blank'
                  rel='noopener noreferrer'
                >
                  <img src={insta} className={Styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer'>
                  <img src={tg} className={Styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://ru-ru.facebook.com/' target='blank' rel='noopener noreferrer'>
                  <img src={facebook} className={Styles.socialIcon} />
                </a>
              </li>
            </ul> */}
            {isAuth && (
              <ul className={Styles.content}>
                <li className={Styles.content_item}>
                  <LinkDom to='/my' className={Styles.content_link} onClick={closeBurger}>
                    <PurseIcon />
                    <span className={Styles.content_title}>Кошелек</span>
                  </LinkDom>
                </li>
                <li className={Styles.content_item}>
                  <LinkDom to='/broadcasts' className={Styles.content_link} onClick={closeBurger}>
                    <BroadcastsIcon />
                    <span className={Styles.content_title}>Трансляции</span>
                  </LinkDom>
                </li>
                <li className={Styles.content_item}>
                  <LinkDom to='/chat' className={Styles.content_link} onClick={closeBurger}>
                    <ChatIcon />
                    <span className={Styles.content_title}>Чат</span>
                  </LinkDom>
                </li>
                <li className={Styles.content_item}>
                  <LinkDom to='/profile' className={Styles.content_link} onClick={closeBurger}>
                    <ProfileIcon />
                    <span className={Styles.content_title}>Профиль</span>
                  </LinkDom>
                </li>
              </ul>
            )}
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
              <p className={Styles.email}>info@limcore.com</p>
              <div className={Styles.languageGroup}>
                <img className={Styles.languageIcon} src={i18n.language === 'ru' ? RUS : ENG} alt='lang' />
                <p className={Styles.language}>{i18n.language === 'ru' ? 'RU' : 'EN'}</p>
                {/* <img className={Styles.footer__languageArrow} src={arrow} alt='Arrow-button' /> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
