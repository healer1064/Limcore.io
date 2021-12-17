import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'
import userIcon from '@icons/user.svg'
import logout from '@icons/logout.svg'
// import { Container } from '@components/Container'

import { Telegram } from '@icons/Telegram'
import { Instagram } from '@icons/Instagram'
import { Youtube } from '@icons/Youtube'
import { useHistory, useLocation } from 'react-router'
import { setIsAuth } from '../../../pages/auth/redux/authSlice'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Logo } from '@components/Purse/PurseDesktop/components/Logo'
import { useTranslation } from 'react-i18next'
import { LoginIcon } from '@icons/LoginIcon'
import { LanguagePopup } from '@components/LanguagePopup'
import { Modal } from '@components/Modal'
import close from '@icons/greyClose.svg'

export const HeaderMobile: React.FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [t] = useTranslation()

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
      <nav className={Styles.wrap}>
        {!isAuth && location.pathname !== '/auth' && (
          <a onClick={() => history.push('/auth')} className={Styles.logoLink} target='blank' rel='noopener noreferrer'>
            <img src={userIcon} alt='Иконка' />
          </a>
        )}
        {isAuth && window.location.pathname === '/' ? (
          <>
            <button className={Styles.profileBtn} type='button'>
              <LinkDom to='/my' className={Styles.profileBtn_link}>
                <LoginIcon />
                {t('profile')}
              </LinkDom>
            </button>
            <button type='button' className={Styles.burger} onClick={openBurger}>
              <span className={Styles.row} />
              <span className={Styles.row} />
              <span className={Styles.row} />
            </button>
          </>
        ) : (
          <>
            <LanguagePopup />
            {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null}
          </>
        )}
        <div className={burgerStyles}>
          <Modal active={burgerOpen} setActive={closeBurger} isMobile>
            <div className={Styles.burgerContent}>
              <button className={Styles.burgerHeader} type='reset' onClick={closeBurger}>
                <img alt='close' src={close} className={Styles.closeButton} />
              </button>
              {/* <img className={Styles.logoInOpenBurger} src={logoIcon} alt='Лого' /> */}
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
                  <a
                    href='https://t.me/limc_russ'
                    target='blank'
                    rel='noopener noreferrer'
                    className={Styles.socialLink}
                  >
                    <Telegram className={Styles.content_icon} />
                  </a>
                </li>
                <li className={Styles.content_item}>
                  <a
                    href='https://instagram.com/limcore.io?utm_medium=copy_link'
                    target='blank'
                    rel='noopener noreferrer'
                    className={Styles.socialLink}
                  >
                    <Instagram className={Styles.content_icon} />
                  </a>
                </li>
                <li className={Styles.content_item}>
                  <a
                    href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg'
                    target='blank'
                    rel='noopener noreferrer'
                    className={Styles.socialLink}
                  >
                    <Youtube className={Styles.content_icon} />
                  </a>
                </li>
              </ul>
              <div className={Styles.group}>
                <p className={Styles.email}>
                  <a
                    href='mailto:info@limcore.io'
                    target='blank'
                    rel='noopener noreferrer'
                    className={Styles.emailLink}
                  >
                    info@limcore.io
                  </a>
                </p>
                <LanguagePopup position={{ top: '-120px', left: '-25px', background: '#4a70f8' }} />
              </div>
            </div>
          </Modal>
          {/* <Container title='' onClose={closeBurger}> */}
          {/*  <img className={Styles.logoInOpenBurger} src={logoIcon} alt='Лого' /> */}
          {/*  {window.location.pathname === '/' ? ( */}
          {/*    <ul className={Styles.list}> */}
          {/*      {tempLink?.map((item) => { */}
          {/*        return ( */}
          {/*          <Link */}
          {/*            className={Styles.link} */}
          {/*            key={item.id} */}
          {/*            to={item.link} */}
          {/*            spy={item.spy} */}
          {/*            smooth={item.smooth} */}
          {/*            onClick={closeBurger} */}
          {/*          > */}
          {/*            {item.value} */}
          {/*          </Link> */}
          {/*        ) */}
          {/*      })} */}
          {/*    </ul> */}
          {/*  ) : null} */}

          {/*  <ul className={Styles.social}> */}
          {/*    <li className={Styles.content_item}> */}
          {/*      <a href='https://t.me/limc_russ' target='blank' rel='noopener noreferrer' className={Styles.socialLink}> */}
          {/*        <Telegram className={Styles.content_icon} /> */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={Styles.content_item}> */}
          {/*      <a */}
          {/*        href='https://instagram.com/limcore.io?utm_medium=copy_link' */}
          {/*        target='blank' */}
          {/*        rel='noopener noreferrer' */}
          {/*        className={Styles.socialLink} */}
          {/*      > */}
          {/*        <Instagram className={Styles.content_icon} /> */}
          {/*      </a> */}
          {/*    </li> */}
          {/*    <li className={Styles.content_item}> */}
          {/*      <a */}
          {/*        href='https://youtube.com/channel/UCjPwzyVtL5WQtRoqiR0ZdGg' */}
          {/*        target='blank' */}
          {/*        rel='noopener noreferrer' */}
          {/*        className={Styles.socialLink} */}
          {/*      > */}
          {/*        <Youtube className={Styles.content_icon} /> */}
          {/*      </a> */}
          {/*    </li> */}
          {/*  </ul> */}
          {/*  <div className={Styles.group}> */}
          {/*    <p className={Styles.email}> */}
          {/*      <a href='mailto:info@limcore.io' target='blank' rel='noopener noreferrer' className={Styles.emailLink}> */}
          {/*        info@limcore.io */}
          {/*      </a> */}
          {/*    </p> */}
          {/*    <LanguagePopup position={{ top: '-105px', left: '-25px', background: '#4a70f8' }} /> */}
          {/*  </div> */}
          {/* </Container> */}
        </div>
      </nav>
    </header>
  )
}
