import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '@app/redux/hooks'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import {
  setIsSincWithWallet,
  setWalletConnectLimc,
  setWalletConnectUsdt,
} from '../../../../../pages/auth/redux/authSlice'
import { useDispatch } from 'react-redux'
import { LogoLimc } from './Icons/LogoLimc'
import { LogoTrustWallet } from './Icons/LogoTrustWallet'
import GrayCrossIcon from '../../images/GrayCross/GrayCrossIcon'
import { WalletPurseIcon } from './Icons/WalletPurseIcon'
import classNames from 'classnames'
import { getLimc, getUsdt } from './walletConnect'
import { useTranslation } from 'react-i18next'
import { getSyncData } from '@components/Wallet/redux/walletSlice'

export const Balance = () => {
  const [userPurse, setUserPurse] = useState({
    address: '',
    chainId: null,
  })

  const [t] = useTranslation()
  const dispatch = useDispatch()

  const isSinc = useAppSelector((state) => state.auth.isSincWithWallet)

  const buttonSincClass = isSinc ? classNames(styles.trust_sinc, styles.trust_sinc_success) : styles.trust_sinc
  const logosClass = isSinc ? classNames(styles.trust_logos, styles.trust_logos_success) : styles.trust_logos
  const logosContClass = isSinc ? styles.trust_logos_cont__success : null
  const logosCrossClass = isSinc ? styles.trust_cross_success : null

  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error
    }

    setUserPurse({ address: '', chainId: null })
    dispatch(setIsSincWithWallet(false))
    window.location.reload()
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error
    }
    // Get updated accounts and chainId
    // const { accounts, chainId } = payload.params[0]
    console.log('session_update')
  })

  useEffect(() => {
    if (connector.connected) {
      dispatch(setIsSincWithWallet(true))
      const dataFromLS = JSON.parse(localStorage.getItem('walletconnect'))
      setUserPurse({ address: dataFromLS.accounts[0], chainId: dataFromLS.chainId })
    }
  }, [])

  const sincWithWallet = async () => {
    // Check if connection is already established
    if (!connector.connected) {
      connector.createSession()
    }

    connector.on('connect', (error, payload) => {
      if (error) {
        throw error
      }

      const { accounts, chainId } = payload.params[0]
      setUserPurse({ address: accounts[0], chainId })

      dispatch(setIsSincWithWallet(true))
      QRCodeModal.close()
    })

    // URI ????????????????, ?????????????????????????? ?????????????????????????? ????????????
    const noop = () => {}
    QRCodeModal.open('uri', noop)
  }

  useEffect(() => {
    if (userPurse.chainId) {
      getUsdt(userPurse.address).then((res) => dispatch(setWalletConnectUsdt(res)))
      getLimc(userPurse.address).then((res) => dispatch(setWalletConnectLimc(res)))
      dispatch(getSyncData({ address: userPurse.address }))
    }
  }, [userPurse])

  return (
    <div className={styles.balance}>
      <div className={styles.trust}>
        <div className={logosClass}>
          <div className={logosContClass}>
            <LogoLimc />
          </div>
          <div className={logosCrossClass}>
            <GrayCrossIcon />
          </div>
          <div className={logosContClass}>
            <LogoTrustWallet />
          </div>
        </div>
        {!isSinc ? (
          <>
            <button className={buttonSincClass} onClick={sincWithWallet} type='button'>
              {t('purse_sync')}
            </button>
            <p className={styles.trust_subtitle}>{t('purse_walletConnect')}</p>
          </>
        ) : (
          <>
            <div className={styles.trust_cont}>
              <button className={buttonSincClass} onClick={sincWithWallet} type='button'>
                <WalletPurseIcon className={styles.trust_walletpurse} />
                {userPurse.address.substr(0, 9)}...{userPurse.address.slice(-7)}
              </button>
              <button className={styles.trust_kill} onClick={() => connector.killSession()} type='button'>
                <GrayCrossIcon />
              </button>
            </div>
            <p className={styles.notion}>{t('purse_walletConnectSync')}</p>
          </>
        )}
      </div>
    </div>
  )
}
