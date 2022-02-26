import React, { useEffect } from 'react'
import Styles from './styles.module.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'

import logoIcon from '../../assets/images/headerLogo.png'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'

import { LanguagePopup } from '../LanguagePopup/index'
import { Dropdown } from './components/Dropdown'

import { infoLinks, partnersLinks } from '@components/Header/const'
import ModalConnectWallet from '@components/Header/components/ModalConnectWallet'
import { appSlice } from '@app/redux/reducers/appSlice'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { setIsAuth, setUserWallet } from '@app/redux/authSlice'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const userWallet = useAppSelector((state) => state.auth.userWallet)

  const { openModalConnectWallet } = useAppSelector((state) => state.app)
  const { handlerOpenAndCloseModalConnectWallet } = appSlice.actions

  const handlerCloseModalConnectWallet = (): void => {
    dispatch(handlerOpenAndCloseModalConnectWallet(false))
  }

  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error
    }
    dispatch(setUserWallet(''))
    dispatch(setIsAuth(false))
    window.location.reload()
  })

  useEffect(() => {
    if (connector.connected) {
      dispatch(setIsAuth(true))
      const dataFromLS = JSON.parse(localStorage.getItem('walletconnect'))
      dispatch(setUserWallet(dataFromLS.accounts[0]))
    }
  }, [])

  const handlerDisconnectWallet = (): void => {
    if (connector.connected) {
      connector.killSession().then((res) => res)
      dispatch(setIsAuth(false))
      dispatch(setUserWallet(''))
      history.push('/')
    }
  }

  function handleClick(e) {
    if (history.location.pathname === '/') {
      const link = e.target.getAttribute('href').slice(1)
      const destination = document.getElementById(`${link}`)
      destination.scrollIntoView({ behavior: 'smooth' })
    } else {
      history.push('./')
    }
  }
  const pathnameProfile = pathname === '/my'
  return (
    <header className={Styles.header}>
      <nav className={Styles.wrapper}>
        <a href='/' className={Styles.logoLink} target='blank' rel='noopener noreferrer'>
          <img src={logoIcon} alt='Лого' className={Styles.logoImg} />
        </a>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Dropdown title='Информация'>
              {infoLinks.map((item) => {
                return (
                  <a className={Styles.link} key={item.id} href={`#${item.link}`} onClick={(e) => handleClick(e)}>
                    {item.value}
                  </a>
                )
              })}
            </Dropdown>
          </li>
          <li className={Styles.item}>
            <Dropdown title='Партнерам'>
              {partnersLinks.map((item) => {
                return (
                  <a className={Styles.link} key={item.id} href={`#${item.link}`} onClick={(e) => handleClick(e)}>
                    {item.value}
                  </a>
                )
              })}
            </Dropdown>
          </li>
          <li className={Styles.item}>
            <Link to='/data-center' href='#' className={Styles.item__link}>
              Статистика
            </Link>
          </li>
        </ul>
        <div className={Styles.container}>
          <LanguagePopup position={{ top: '37px' }} />
          {!isAuth ? (
            <button
              className={Styles.profileBtn}
              type='button'
              onClick={() => dispatch(handlerOpenAndCloseModalConnectWallet(true))}
            >
              Подключить кошелек
            </button>
          ) : pathnameProfile ? (
            <div className={Styles.profile__numWalletContainerLink}>
              <p className={Styles.profile__numWallet}>{`${userWallet.slice(0, 9)}...${userWallet.slice(-10)}`}</p>
              <Link
                className={`${Styles.profile__link} ${Styles.profile__numWalletContainerLink_active}`}
                to='/'
                onClick={handlerDisconnectWallet}
              >
                Выйти
              </Link>
            </div>
          ) : (
            <Link className={`${Styles.profileBtn} ${Styles.profileBtn_link}`} to='/my'>
              Профиль
            </Link>
          )}
          <ModalConnectWallet onClose={handlerCloseModalConnectWallet} open={openModalConnectWallet} />
        </div>
      </nav>
    </header>
  )
}
