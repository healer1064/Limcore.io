import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './style.module.scss'

import logoIcon from '@icons/logo.svg'
import loginIcon from '@icons/login.svg'
import caretIcon from '@icons/caret.svg'
import flagIcon from '../../assets/images/flag-ru.png'
import { Modal } from '@components/Purse/PurseMobile/components/Modal'
import { useAppSelector } from '@app/redux/hooks'
import AuthComponent from '../../pages/auth/components/Auth/Auth'

const tempLink = [
  { id: 1, value: 'Что такое Limcore?', link: '/' },
  { id: 2, value: 'Roadmap', link: '/' },
  { id: 3, value: 'Команда', link: '/' },
  { id: 4, value: 'Экосистема', link: '/' },
  { id: 5, value: 'Вопрос-ответ', link: '/' },
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
        <img src={logoIcon} alt='Лого' />
        <ul className={Styles.list}>
          {tempLink?.map((item) => {
            return (
              <Link className={Styles.link} key={item.id} to={item.link}>
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
              <img src={caretIcon} alt='Иконка' />
            </div>
          </div>
          <button className={btnClass} onClick={handleLoginModalOpen}>
            <img src={loginIcon} alt='Иконка' />
            <span>Войти</span>
          </button>

          <Modal
            active={isLoginModalVisible}
            setActive={handleLoginModalClose}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            classname={Styles.modalAuth}
            crossFlag
          >
            <div className={Styles.modalAuthInner}>
              <AuthComponent />
            </div>
          </Modal>
        </div>
      </div>
    </header>
  )
}
