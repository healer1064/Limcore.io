import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './style.module.scss'

import logoIcon from '@icons/logo.svg'
import loginIcon from '@icons/login.svg'
import caretIcon from '@icons/caret.svg'
import flagIcon from '../../assets/images/flag-ru.png'

const tempLink = [
  { id: 1, value: 'Что такое Limcore?', link: '/' },
  { id: 2, value: 'Roadmap', link: '/' },
  { id: 3, value: 'Команда', link: '/' },
  { id: 4, value: 'Экосистема', link: '/' },
  { id: 5, value: 'Вопрос-ответ', link: '/' },
]

export const Header: React.FC = () => {
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
          <button className={Styles.login}>
            <img src={loginIcon} alt='Иконка' />
            <span>Войти</span>
          </button>
        </div>
      </div>
    </header>
  )
}
