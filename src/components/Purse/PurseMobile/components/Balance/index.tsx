import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { copyIcon } from '../../images'
import logoIcon from '@icons/logo.svg'
import { Modal } from '@components/Modal/index'
import { Overall } from './components/Overall/index'
import { useAppSelector } from '@app/redux/hooks'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { setIsSincWithWallet, setWalletConnectUsdt } from '../../../../../pages/auth/redux/authSlice'
import { useDispatch } from 'react-redux'
import { LogoLimc } from './Icons/LogoLimc'
import { LogoTrustWallet } from './Icons/LogoTrustWallet'
import GrayCrossIcon from '../../images/GrayCross/GrayCrossIcon'
import { WalletPurseIcon } from './Icons/WalletPurseIcon'
import classNames from 'classnames'
import { getUsdt } from './walletConnect'
import { useTranslation } from 'react-i18next'
import { getSyncData } from '@components/Wallet/redux/walletSlice'

export const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  const [userPurse, setUserPurse] = useState({
    address: '',
    chainId: null,
  })

  const [t] = useTranslation()
  const dispatch = useDispatch()
  // Если человек попал в личныый кабинет через регистрацию, то тут будет true
  const [isRegModalVisible, setIsRegModalVisible] = useState(
    useAppSelector((state) => state.auth.processType) === 'REGISTRATION',
  )
  const walletAddress = useAppSelector((state) => state.wallet.address)
  // const usdtWalletBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const usdtWalletBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  const limcWalletBalance = useAppSelector((state) => state.wallet.limc_balance)

  // const limcCount = useAppSelector((state) => state.wallet.limcCount)
  // const limcLimit = useAppSelector((state) => state.wallet.limcLimit)
  const isSinc = useAppSelector((state) => state.auth.isSincWithWallet)

  const sum: number = Number(usdtWalletBalance) + Number(limcWalletBalance)
  const money = isNaN(sum) ? '...' : sum

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

    // URI условный, подставляется автоматически другой
    const noop = () => {}
    QRCodeModal.open('uri', noop)
  }

  useEffect(() => {
    if (userPurse.chainId) {
      getUsdt(userPurse.address).then((res) => dispatch(setWalletConnectUsdt(res)))
      dispatch(getSyncData({ address: userPurse.address }))
    }
  }, [userPurse])

  const handleFirstRegModalClose = () => {
    setIsRegModalVisible(false)
  }

  // const handleOpenBalanceClick = () => {
  //   setIsBalanceVisible(true)
  // }

  const handleCloseBalanceModal = () => {
    setIsBalanceVisible(false)
  }

  return (
    <div className={styles.balance}>
      {/* <div className={styles.balance__header} onClick={handleOpenBalanceClick}>
        <h3 className={styles.balance__title}>{t('commonBalance')}</h3>
        <button className={styles.balance__button}>
          <img src={balanceSvg} />
        </button>
      </div>
      <p className={styles.balance__sumMain}>{`$${money}`}</p>
      <div className={styles.balance__data}>
        <p className={styles.balance__time}>24h</p>
        <p className={styles.balance__sum}>$0</p>
        <p className={styles.balance__percent}>0%</p>
      </div> */}

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
        <button className={buttonSincClass} onClick={sincWithWallet}>
          {isSinc ? (
            <>
              <WalletPurseIcon className={styles.trust_walletpurse} />
              {userPurse.address.substr(0, 9)}...{userPurse.address.slice(-7)}
            </>
          ) : (
            t('purse_sync')
          )}
        </button>
        {!isSinc ? (
          <p className={styles.trust_subtitle}>{t('purse_walletConnect')}</p>
        ) : (
          <p className={styles.trust_subtitle}>{t('purse_walletConnectSync')}</p>
        )}
      </div>
      {/* {isSincBtnVisible ? (
        <ButtonBig className={styles.sinc} onClick={sincWithWallet}>
          Синхронизация с Trust Wallet
        </ButtonBig>
      ) : (
        <div className={classNames(styles.timer)}>Hello</div>
      )} */}

      <Modal active={isBalanceVisible} setActive={() => {}}>
        <Overall
          onClick={handleCloseBalanceModal}
          money={money}
          limcBalance={limcWalletBalance}
          usdtBalance={usdtWalletBalance}
        />
      </Modal>
      <Modal classname={styles.reg} active={isRegModalVisible} setActive={handleFirstRegModalClose} crossFlag>
        <div className={styles.regModal}>
          <div className={styles.regModalUp}>
            <header className={styles.regModalHeader}>
              <img src={logoIcon} onClick={handleFirstRegModalClose} />
            </header>
            <h4 className={styles.regModalTitle}>Мы создали ваш USDT кошелек</h4>
            <p className={styles.regModalSubtitle}>Адрес кошелька</p>
            <p className={styles.regModalPurse}>
              {walletAddress}
              <img className={styles.regModalPurseCopy} src={copyIcon} />
            </p>
          </div>
          <div className={styles.regModalDown}>
            <ButtonBig className={styles.regModalButton} onClick={handleFirstRegModalClose}>
              Пополнить кошелек
            </ButtonBig>
          </div>
        </div>
      </Modal>
    </div>
  )
}
