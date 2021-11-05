import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './style.module.scss'

import logoIcon from '@icons/logo.svg'
import logout from '@icons/logout.svg'
// import loginIcon from '@icons/login.svg'
import { LoginIcon } from '@icons/LoginIcon'
// import flagIcon from '../../assets/images/flag-ru.svg'
import RUS from '../../assets/images/russia-flag.png'
import ENG from '../../assets/images/en-flag.png'
import arrow from '../../assets/icons/arrow-lang.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'
import { setIsAuth } from '../../pages/auth/redux/auth.slice'
import { useHistory } from 'react-router'

const tempLink = [
  { id: 1, value: 'Что такое Limcore?', link: 'main', spy: true, smooth: true },
  { id: 2, value: 'Roadmap', link: 'roadmap', spy: true, smooth: true },
  { id: 3, value: 'Команда', link: 'team', spy: true, smooth: true },
  // { id: 4, value: 'Экосистема', link: 'ecosystem', spy: true, smooth: true },
  { id: 5, value: 'Вопрос-ответ', link: 'questions', spy: true, smooth: true },
]

export const Header: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [btnClass, setBtnClass] = useState(Styles.login)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const dispatch = useAppDispatch()
  const history = useHistory()
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
  const [showPopapLanguage, setShowPopapLanguage] = useState(false)
  const [valueLanguage, setValueLanguage] = useState('ru')
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

        {/* <div className={Styles.container}>
          {isAuth ? <img className={Styles.logout} onClick={onLogout} src={logout} alt='Иконка' /> : null}
          <div className={Styles.lang}>
            <div className={Styles.block} onClick={() => setShowPopapLanguage(!showPopapLanguage)}>
              <img src={valueLanguage === 'ru' ? RUS : ENG} alt='Флаг' className={Styles.img} />
              <span>{valueLanguage}</span>
              <img src={arrow} className={showPopapLanguage && Styles.arrow} />
            </div>
            {showPopapLanguage && (
              <div className={Styles.header__langoptions}>
                <div className={`${Styles.langoption} ${Styles.langoption_ru}`}>
                  <input
                    className={Styles.langoption__checked}
                    type='radio'
                    name='radio1'
                    id='answer1'
                    onClick={() => setValueLanguage('ru')}
                    checked
                    readOnly
                  />
                  <div className={Styles.lang_box}>
                    <img src={RUS} alt='Флаг' className={Styles.img} />
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
                    onClick={() => setValueLanguage('en')}
                    readOnly
                  />
                  <div className={Styles.lang_box}>
                    <img src={ENG} alt='Флаг' className={Styles.img} />
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
            )}
          </div>
          <button className={btnClass} onClick={handleLoginModalOpen}>
            <img src={loginIcon} alt='Иконка' />
            <LoginIcon />
            <span>Войти</span>
          </button>

          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div> */}
      </div>
    </header>
  )
}
