import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './style.module.scss'

import logoIcon from '@icons/logo.svg'
// import loginIcon from '@icons/login.svg'
import { LoginIcon } from '@icons/LoginIcon'
import flagIcon from '../../assets/images/flag-ru.svg'
import { useAppSelector } from '@app/redux/hooks'
import ModalAuth from '../../pages/landing/components/ModalAuth'

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

  const handleLoginModalOpen = () => {
    setIsLoginModalVisible(true)
  }
  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
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
          <div className={Styles.lang}>
            <img src={flagIcon} alt='Флаг' />
            <div className={Styles.block}>
              <span>ru</span>

              {/* <svg */}
              {/*  width='11' */}
              {/*  height='6' */}
              {/*  viewBox='0 0 11 6' */}
              {/*  fill='none' */}
              {/*  xmlns='http://www.w3.org/2000/svg' */}
              {/*  className={Styles.svg} */}
              {/* > */}
              {/*  <path */}
              {/*    d='M1 1L5.5 5L10 1' */}
              {/*    stroke='#67686C' */}
              {/*    strokeWidth='2' */}
              {/*    strokeLinecap='round' */}
              {/*    strokeLinejoin='round' */}
              {/*    className={Styles.path} */}
              {/*  /> */}
              {/* </svg> */}
            </div>
          </div>
          <button className={btnClass} onClick={handleLoginModalOpen}>
            {/* <img src={loginIcon} alt='Иконка' /> */}
            <LoginIcon />
            <span>Войти</span>
          </button>

          <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />
        </div>
      </div>
    </header>
  )
}
