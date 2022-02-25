import React, { useEffect } from 'react'
import Styles from './styles.module.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'

import logoIcon from '../../assets/images/headerLogo.png'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSincWithWallet, setWalletConnectLimc, setWalletConnectUsdt } from '../../pages/auth/redux/authSlice'

// import { useTranslation } from 'react-i18next'
import { LanguagePopup } from '../LanguagePopup/index'
import { Dropdown } from './components/Dropdown'

import { infoLinks, partnersLinks } from '@components/Header/const'
import ModalConnectWallet from '@components/Header/components/ModalConnectWallet'
import { appSlice } from '@app/redux/reducers/appSlice'
import { walletConnectSlice } from '@app/redux/reducers/walletConnectSlice'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { getLimc, getUsdt } from '@components/Purse/PurseMobile/components/Balance/walletConnect'
import { getSyncData } from '@components/Wallet/redux/walletSlice'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useAppDispatch()
  // const [t] = useTranslation()
  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const { openModalConnectWallet } = useAppSelector((state) => state.app)
  const { address, chainId } = useAppSelector((state) => state.walletConnect)
  const { handlerOpenAndCloseModalConnectWallet } = appSlice.actions
  const { walletConnectAction } = walletConnectSlice.actions

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
    dispatch(walletConnectAction({ address: '', chainId: null }))
    dispatch(setIsSincWithWallet(false))
    window.location.reload()
  })

  useEffect(() => {
    if (connector.connected) {
      dispatch(setIsSincWithWallet(true))
      const dataFromLS = JSON.parse(localStorage.getItem('walletconnect'))
      dispatch(walletConnectAction({ address: dataFromLS.accounts[0], chainId: dataFromLS.chainId }))
    }
  }, [])

  useEffect(() => {
    if (chainId) {
      getUsdt(address).then((res) => dispatch(setWalletConnectUsdt(res)))
      getLimc(address).then((res) => dispatch(setWalletConnectLimc(res)))
      dispatch(getSyncData({ address }))
    }
  }, [chainId])

  const handlerDisconnectWallet = (): void => {
    if (connector.connected) {
      connector.killSession().then((res) => res)
      dispatch(setIsSincWithWallet(false))
      dispatch(walletConnectAction({ address: '', chainId: null }))
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
          {!isSync ? (
            <button
              className={Styles.profileBtn}
              type='button'
              onClick={() => dispatch(handlerOpenAndCloseModalConnectWallet(true))}
            >
              Подключить кошелек
            </button>
          ) : pathnameProfile ? (
            <div className={Styles.profile__numWalletContainerLink}>
              <p className={Styles.profile__numWallet}>{`${address.slice(0, 9)}...${address.slice(-7)}`}</p>
              <Link
                className={`${Styles.profile__link} ${Styles.profile__link_out} ${Styles.profile__numWalletContainerLink_active}`}
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
