import React, { useState } from 'react'
import { Link as LinkDom } from 'react-router-dom'
import Styles from './styles.module.scss'
import logout from '@icons/logout.svg'
import { useHistory } from 'react-router'
import { setIsAuth } from '@app/redux/authSlice'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import logoIcon from '../../../../assets/images/headerLogo.png'
import { BurgerMenu } from '../BurgerMenu'

export const HeaderMobile = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const [burgerOpen, setBurgerOpen] = useState(false)
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  const closeBurger = () => setBurgerOpen(false)
  const openBurger = () => setBurgerOpen(true)

  const onLogout = () => {
    localStorage.clear()
    dispatch(setIsAuth(false))
    history.push('/')
    window.location.reload()
  }

  const burgerStyles = `${burgerOpen ? Styles.burgerMenuOpened : Styles.burgerMenuClosed}`

  return (
    <header className={Styles.header}>
      <LinkDom to={isAuth ? '/my' : '/'} className={Styles.logoIcon}>
        <img className={Styles.logo} src={logoIcon} alt='Лого' />
      </LinkDom>

      <nav className={Styles.wrap}>
        <button type='button' className={Styles.burger} onClick={openBurger}>
          <span className={Styles.row} />
          <span className={Styles.row} />
          <span className={Styles.row} />
        </button>
        {isAuth && <img className={Styles.logout} onClick={onLogout} src={logout} alt='Logout' />}

        <div className={burgerStyles}>
          <BurgerMenu burgerOpened={burgerOpen} closeBurger={closeBurger} />
        </div>
      </nav>
    </header>
  )
}
