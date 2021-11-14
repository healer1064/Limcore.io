import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { balance as balanceSvg, copyIcon } from '../../images'
import logoIcon from '@icons/logo.svg'
import { Modal } from '../Modal'
import { Overall } from './components/Overall/index'
import { useAppSelector } from '@app/redux/hooks'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { TwtIcon } from '@icons/twtIcon'
import { DataBaseIcon } from '@icons/dataBaseIcon'
import { ShieldIcon } from '@icons/ShieldtIcon'
import { BlackCross } from '@icons/BlackCross'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import {
  setIsSincWithWallet,
  setWalletConnectLimc,
  setWalletConnectUsdt,
} from '../../../../../pages/auth/redux/authSlice'
import { useDispatch } from 'react-redux'
import { getLimc, getUsdt } from '@components/Purse/PurseMobile/components/Balance/walletConnect'
import classNames from 'classnames'

export const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  // Если человек попал в личныый кабинет через регистрацию, то тут будет true
  const [isRegModalVisible, setIsRegModalVisible] = useState(
    useAppSelector((state) => state.auth.processType) === 'REGISTRATION',
  )
  const walletAddress = useAppSelector((state) => state.wallet.address)
  // const usdtBalance = useAppSelector((state) => state.wallet.usdt_balance)
  const usdtBalance = useAppSelector((state) => state.authNew.walletConnectUsdt)
  // const limcBalance = useAppSelector((state) => state.wallet.sum_limc_balance)
  const limcBalance = useAppSelector((state) => state.authNew.walletConnectLimc)
  const limcCount = useAppSelector((state) => state.wallet.limcCount)
  const limcLimit = useAppSelector((state) => state.wallet.limcLimit)
  const sum: number = Number(usdtBalance) + Number(limcBalance)
  const money = isNaN(sum) ? '...' : sum
  const isSync = useAppSelector((state) => state.authNew.isSincWithWallet)

  const [userPurse, setUserPurse] = useState({
    address: '',
    chainId: null,
  })

  const dispatch = useDispatch()

  const handleFirstRegModalClose = () => {
    setIsRegModalVisible(false)
  }

  const handleOpenBalanceClick = () => {
    setIsBalanceVisible(true)
  }

  const handleCloseBalanceModal = () => {
    setIsBalanceVisible(false)
  }

  useEffect(() => {
    if (isSync) {
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
      if (connector.connected) {
        dispatch(setIsSincWithWallet(true))
        const dataFromLS = JSON.parse(localStorage.getItem('walletconnect'))
        setUserPurse({ address: dataFromLS.accounts[0], chainId: dataFromLS.chainId })
      }
    }
  }, [isSync])

  const sincWithWallet = async () => {
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    })

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
  }

  useEffect(() => {
    if (userPurse.chainId) {
      getUsdt(userPurse.address).then((res) => dispatch(setWalletConnectUsdt(res)))
      getLimc(userPurse.address).then((res) => dispatch(setWalletConnectLimc(res)))
    }
  }, [userPurse])

  return (
    <div className={styles.balance}>
      <div className={styles.iconsWrapper}>
        <DataBaseIcon isSync={isSync} />
        <BlackCross />
        <TwtIcon isSync={isSync} />
        {isSync ? (
          <p>Limcore Wallet синхронизирован с&nbsp;внешним кошельком</p>
        ) : (
          <p>Для старта майнинга синхронизируйте Limcore Wallet с&nbsp;Trust Wallet</p>
        )}
      </div>
      {isSync ? (
        <div className={styles.walletId}>
          <ShieldIcon />
          <p>
            {userPurse.address.substr(0, 9)}...{userPurse.address.slice(-7)}
          </p>
        </div>
      ) : (
        <button className={styles.syncButton} onClick={sincWithWallet}>
          Синхронизировать
        </button>
      )}
      {/* <h1 className={styles.balance__sumMain}>{`$${money}`}</h1>
      <div className={styles.balance__data}>
        <p className={styles.balance__time}>24h</p>
        <p className={styles.balance__sum}>{`$ ${usdtBalance}`}</p>
        <p className={styles.balance__percent}>0%</p>
      </div>
      <div className={styles.balance__header} onClick={handleOpenBalanceClick}>
        <h3 className={styles.balance__title}>Общий баланс</h3>
        <button className={styles.balance__button}>
          <img src={balanceSvg} />
        </button>
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <p className={styles.card__subtitle}>Получено с майнинга</p>
          <p className={styles.card__number}>{`$ `}</p>
          <p className={styles.card__subtitle}>Инвестировано</p>
          <p className={styles.card__number}>{`$ `}</p>
        </li>
        <li className={styles.card}>
          <p className={styles.card__subtitle}>Получено в сети XCH</p>
          <p className={styles.card__number}>{`$ `}</p>
          <p className={styles.card__subtitle}>Получено с форков</p>
          <p className={styles.card__number}>{`$ `}</p>
        </li>
        <li className={styles.card}>
          <p className={styles.card__subtitle}>Баланс LIMC</p>
          <p className={styles.card__number}>{`$ ${limcBalance}`}</p>
          <p className={styles.card__subtitle}>Баланс USDT</p>
          <p className={styles.card__number}>{`$ ${usdtBalance} `}</p>
        </li>
        <li className={styles.cardLong}>
          <p className={styles.card__subtitle}>Получено с майнинга</p>
          <p className={styles.card__number}>{`$ `}</p>
          <p className={styles.card__subtitle}>Получено в сети XCH</p>
          <p className={styles.card__number}>{`$ `}</p>
          <p className={styles.card__subtitle}>Получено с форков</p>
          <p className={styles.card__number}>{`$ `}</p>
        </li>
        <li className={styles.cardLong}>
          <p className={styles.card__subtitle}>Инвестировано</p>
          <p className={styles.card__number}>{`$ `}</p>
          <p className={styles.card__subtitle}>Баланс LIMC</p>
          <p className={styles.card__number}>{`$ ${limcBalance}`}</p>
          <p className={styles.card__subtitle}>Баланс USDT</p>
          <p className={styles.card__number}>{`$ ${usdtBalance} `}</p>
        </li>
      </ul> */}
      <div className={`${styles.modalContainer} ${styles.modalContainer_invisible}`}>
        <Modal active={isBalanceVisible} setActive={handleCloseBalanceModal}>
          <Overall
            onClick={handleCloseBalanceModal}
            money={money}
            limcBalance={limcBalance}
            usdtBalance={usdtBalance}
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
              <p className={styles.regModalSubtitle}>На данный момент LIMC можно купить только с помощью USDT ERC-20</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
