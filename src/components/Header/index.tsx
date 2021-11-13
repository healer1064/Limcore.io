import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'
import { Link as LinkDom } from 'react-router-dom'

import logoIcon from '@icons/logo.svg'
import logout from '@icons/logout.svg'
import { LoginIcon } from '@icons/LoginIcon'
import RUS from '../../assets/icons/flag-ru.svg'
import ENG from '../../assets/icons/flag-en.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
import { setIsAuth } from '../../pages/auth/redux/auth.slice'
import { useHistory } from 'react-router'
import { VectorIcon } from '@icons/VectorIcon'
import { ProfileHeaderIcon } from '@icons/ProfileHeaderIcon'

import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const [t, i18n] = useTranslation()

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [btnClass, setBtnClass] = useState(Styles.login)
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)
  const isAuth = useAppSelector((state) => state.authNew.isAuth)

  const tempLink = [
    // { id: 1, value: 'Что такое Limcore?', link: 'limcore', spy: true, smooth: true },
    // { id: 2, value: 'Roadmap', link: 'roadmap', spy: true, smooth: true },
    // { id: 3, value: 'Команда', link: 'team', spy: true, smooth: true },
    // // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
    // { id: 5, value: 'Вопрос-ответ', link: 'questions', spy: true, smooth: true },

    { id: 1, value: t('nav_about'), link: 'limcore', spy: true, smooth: true },
    { id: 2, value: t('nav_roadmap'), link: 'roadmap', spy: true, smooth: true },
    { id: 3, value: t('nav_team'), link: 'team', spy: true, smooth: true },
    { id: 5, value: t('nav_qa'), link: 'questions', spy: true, smooth: true },
  ]

  const languages = ['ru', 'en']
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setShowPopapLanguage(false)
  }

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    window.location.reload()
  }
  useEffect(() => {
    if (isAuth) {
      setBtnClass(Styles.displayNone)
      setIsLoginModalVisible(false)
    }
  }, [isAuth])
  return (
    <header className={Styles.header}>
      <div className={Styles.wrapper}>
        <a href='/' className={Styles.logoLink}>
          <img src={logoIcon} alt='Лого' />
        </a>

        {!isAuth ? (
          <ul className={Styles.list}>
            {tempLink?.map((item) => {
              return (
                <Link className={Styles.link} key={item.id} to={item.link} spy={item.spy} smooth={item.smooth}>
                  {item.value}
                </Link>
              )
            })}
          </ul>
        ) : null}

        <div className={Styles.container}>
          {/* {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null} */}
          {isAuth ? (
            <>
              <LinkDom to='/my'>
                <ProfileHeaderIcon className={Styles.profileLogo} />
              </LinkDom>
              <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' />
            </>
          ) : null}
          <div className={Styles.lang}>
            <div
              className={classNames(Styles.block, showPopapLanguage && Styles.active)}
              onClick={() => setShowPopapLanguage(!showPopapLanguage)}
            >
              <img src={i18n.language === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.img} />
              <span className={Styles.langTitle}>{i18n.language === 'ru' ? 'RU' : 'EN'}</span>
              <span className={classNames(showPopapLanguage && Styles.arrowActive, Styles.arrow)}>
                <VectorIcon />
              </span>
            </div>
            <div className={classNames(Styles.header__langoptions, showPopapLanguage && Styles.active)}>
              {languages.map((lang) => (
                <div
                  key={lang}
                  className={`${Styles.langoption} ${lang === 'ru' ? Styles.langoption_ru : Styles.langoption_en}`}
                >
                  <input
                    className={Styles.langoption__checked}
                    type='radio'
                    id={lang}
                    name='languages'
                    value={lang}
                    checked={i18n.language === lang}
                    onChange={() => changeLanguage(lang)}
                    readOnly
                  />
                  <div className={Styles.lang_box}>
                    <img src={lang === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.lang__img} />
                    <label
                      className={`${Styles.langoption__text} ${
                        i18n.language === lang && Styles.langoption__text_checked
                      }`}
                      htmlFor={lang}
                    >
                      {lang === 'ru' ? 'RU' : 'EN'}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!isAuth && (
            <button className={btnClass} onClick={handleLoginModalOpen}>
              <LoginIcon />
              {/* <span className={Styles.enter}>Войти</span> */}
              <span className={Styles.enter}>{t('login')}</span>
            </button>
          )}

          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div>
      </div>
    </header>
  )
}
