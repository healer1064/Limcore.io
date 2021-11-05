import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'
import Styles from './styles.module.scss'

import logoIcon from '@icons/logo.svg'
import userIcon from '@icons/user.svg'
import logout from '@icons/logout.svg'
import { Container } from '../../../components/Container'
import twitter from '@icons/twitter-icon.png'
import youTube from '@icons/SF Symbol/play.fill.svg'
import vk from '@icons/vk-icon.png'
import insta from '@icons/insta-icon.png'
import tg from '@icons/telegram-icon.png'
import facebook from '@icons/facebook-icon.png'
import RU from '../../../assets/images/flag-ru.svg'
import { useHistory, useLocation } from 'react-router'
import { setIsAuth } from '../../../pages/auth/redux/auth.slice'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import close from '@icons/close.svg'

export const HeaderMobile: React.FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
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

  const burgerStyles = `${burgerOpen ? Styles.burgerMenuOpened : Styles.burgerMenuClosed}`
  const tempLink = [
    { id: 1, value: 'Что такое Limcore?', link: 'main', spy: true, smooth: true },
    { id: 2, value: 'Roadmap', link: 'roadmap', spy: true, smooth: true },
    { id: 3, value: 'Команда', link: 'team', spy: true, smooth: true },
    // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
    { id: 5, value: 'Вопрос-ответ', link: 'questionsMobile', spy: true, smooth: true },
  ]
  return (
    <header className={Styles.header}>
      <img className={Styles.logo} src={logoIcon} alt='Лого' />
      <div className={Styles.wrap}>
        {!isAuth && location.pathname !== '/auth' && (
          <a onClick={() => history.push('/auth')}>
            <img src={userIcon} alt='Иконка' />
          </a>
        )}
        {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null}
        {
          location.pathname === '/auth' ? (
            <LinkDom to='/'>
              <img src={close} alt='close' />
            </LinkDom>
          ) : null
          // <div className={Styles.burger} onClick={openBurger}>
          //   <span className={Styles.row}>{}</span>
          //   <span className={Styles.row}>{}</span>
          //   <span className={Styles.row}>{}</span>
          // </div>
        }
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
            <div className={Styles.group}>
              <p className={Styles.email}>info@limcore.com</p>
              <div className={Styles.languageGroup}>
                <img className={Styles.languageIcon} src={RU} alt='RU' />
                <p className={Styles.language}>RU</p>
                {/* <img className={Styles.footer__languageArrow} src={arrow} alt='Arrow-button' /> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
