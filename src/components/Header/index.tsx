import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import logoIcon from '../../assets/images/headerLogo.png'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { LanguagePopup } from '../LanguagePopup/index'
import { Dropdown } from './components/Dropdown'
import { infoLinks, partnersLinks } from '@components/Header/const'
import ModalConnectWallet from '@components/Header/components/ModalConnectWallet'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { setIsAuth, setUserWallet } from '@app/redux/authSlice'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useAppDispatch()

  const pathnameProfile = pathname === '/my'

  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const userWallet = useAppSelector((state) => state.auth.userWallet)

  const [authModalOpened, setAuthModalOpened] = useState(false)

  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

  connector.on('disconnect', (error) => {
    if (error) {
      throw error
    }

    history.push('/')
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
      connector.killSession()
    }
  }

  const handleClick = (event) => {
    if (history.location.pathname === '/') {
      const link = event.target.getAttribute('href').slice(1)
      const destination = document.getElementById(`${link}`)
      destination.scrollIntoView({ behavior: 'smooth' })
    } else {
      history.push('./')
    }
  }

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
            <button className={Styles.profileBtn} type='button' onClick={() => setAuthModalOpened(true)}>
              Подключить кошелек
            </button>
          ) : pathnameProfile ? (
            <div className={Styles.profile__numWalletContainerLink}>
              <p className={Styles.profile__numWallet}>{`${userWallet.slice(0, 9)}...${userWallet.slice(-10)}`}</p>
              <button
                className={`${Styles.profile__link} ${Styles.profile__numWalletContainerLink_active}`}
                onClick={handlerDisconnectWallet}
              >
                Выйти
              </button>
            </div>
          ) : (
            <Link className={`${Styles.profileBtn} ${Styles.profileBtn_link}`} to='/my'>
              Профиль
            </Link>
          )}
          <ModalConnectWallet
            closeBurgerMenu={() => {}}
            onClose={() => setAuthModalOpened(false)}
            open={authModalOpened}
          />
        </div>
      </nav>
    </header>
  )
}
