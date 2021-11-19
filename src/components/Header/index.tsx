import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './style.module.scss'
import { Link as LinkDom } from 'react-router-dom'

import logoIcon from '@icons/logo.svg'
// import logout from '@icons/logout.svg'
import { LoginIcon } from '@icons/LoginIcon'
// import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
// import { setIsAuth } from '../../pages/auth/redux/auth.slice'
// import { useHistory } from 'react-router'

import { useTranslation } from 'react-i18next'
// import { ButtonBig } from '../../ui-kit/ButtonBig'
// import { styled } from '@material-ui/core'
import { LanguagePopup } from '../LanguagePopup/index'

export const Header: React.FC = () => {
  // const dispatch = useAppDispatch()
  // const history = useHistory()
  const [t] = useTranslation()

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  // const [btnClass, setBtnClass] = useState(Styles.login)
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  const tempLink = [
    { id: 1, value: t('nav_about'), link: 'limcore', spy: true, smooth: true },
    { id: 2, value: t('nav_roadmap'), link: 'roadmap', spy: true, smooth: true },
    { id: 3, value: t('nav_team'), link: 'team', spy: true, smooth: true },
    // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
    { id: 5, value: t('nav_qa'), link: 'questions', spy: true, smooth: true },
  ]

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
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
  return (
    <header className={Styles.header}>
      <div className={Styles.wrapper}>
        <a href='/' className={Styles.logoLink}>
          <img src={logoIcon} alt='Лого' />
        </a>

        <ul className={Styles.list}>
          {tempLink?.map((item) => {
            return (
              <Link className={Styles.link} key={item.id} to={item.link} spy={item.spy} smooth={item.smooth}>
                {item.value}
              </Link>
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
            <button className={Styles.profileBtn}>
              <LinkDom to='/my' className={Styles.profileBtn_link}>
                <LoginIcon />
                <span className={Styles.enter}>{t('profile')}</span>
              </LinkDom>
            </button>
          ) : (
            <button className={Styles.loginBtn} onClick={handleLoginModalOpen}>
              <LoginIcon />
              <span className={Styles.enter}>{t('login')}</span>
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
      </div>
    </header>
  )
}
