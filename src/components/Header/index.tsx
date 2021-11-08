import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './style.module.scss'
import classNames from 'classnames/bind'

import logoIcon from '@icons/logo.svg'
import logout from '@icons/logout.svg'
import { LoginIcon } from '@icons/LoginIcon'
import RUS from '../../assets/icons/flag-ru.svg'
import ENG from '../../assets/icons/flag-en.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
import { setIsAuth } from '../../pages/auth/redux/auth.slice'
import { useHistory } from 'react-router'
import { VectorIcon } from '../../assets/icons/VectorIcon'

const tempLink = [
  { id: 1, value: 'Что такое Limcore?', link: 'limcore', spy: true, smooth: true },
  { id: 2, value: 'Roadmap', link: 'roadmap', spy: true, smooth: true },
  { id: 3, value: 'Команда', link: 'team', spy: true, smooth: true },
  // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
  { id: 5, value: 'Вопрос-ответ', link: 'questions', spy: true, smooth: true },
]

export const Header: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [btnClass, setBtnClass] = useState(Styles.login)
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)
  const [valueLanguage, setValueLanguage] = useState('ru')
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
  }

  const handleLanguageChange = (lang) => {
    setValueLanguage(lang)
    setShowPopapLanguage(false)
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
        <a href='/'>
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
          {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null}
          <div className={Styles.lang}>
            <div
              className={classNames(Styles.block, showPopapLanguage && Styles.active)}
              onClick={() => setShowPopapLanguage(!showPopapLanguage)}
            >
              <img src={valueLanguage === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.img} />
              <span className={Styles.langTitle}>{valueLanguage}</span>
              <span className={classNames(showPopapLanguage && Styles.arrowActive, Styles.arrow)}>
                <VectorIcon />
              </span>
            </div>
            <div className={classNames(Styles.header__langoptions, showPopapLanguage && Styles.active)}>
              <div className={`${Styles.langoption} ${Styles.langoption_ru}`}>
                <input
                  className={Styles.langoption__checked}
                  type='radio'
                  name='radio1'
                  id='answer1'
                  onClick={() => handleLanguageChange('ru')}
                  checked
                  readOnly
                />
                <div className={Styles.lang_box}>
                  <img src={RUS} alt='Флаг' className={Styles.lang__img} />
                  <label
                    className={`${Styles.langoption__text} ${
                      valueLanguage === 'ru' && Styles.langoption__text_checked
                    }`}
                    htmlFor='answer1'
                  >
                    RU
                  </label>
                </div>
              </div>
              <div className={`${Styles.langoption} ${Styles.langoption_en}`}>
                <input
                  className={Styles.langoption__checked}
                  type='radio'
                  name='radio1'
                  id='answer2'
                  onClick={() => handleLanguageChange('en')}
                  readOnly
                />
                <div className={Styles.lang_box}>
                  <img src={ENG} alt='Флаг' className={Styles.lang__img} />
                  <label
                    className={`${Styles.langoption__text} ${
                      valueLanguage === 'en' && Styles.langoption__text_checked
                    }`}
                    htmlFor='answer2'
                  >
                    EN
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button className={btnClass} onClick={handleLoginModalOpen}>
            {/* <img src={loginIcon} alt='Иконка' /> */}
            <LoginIcon />
            <span className={Styles.enter}>Войти</span>
          </button>

          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div>
      </div>
    </header>
  )
}
