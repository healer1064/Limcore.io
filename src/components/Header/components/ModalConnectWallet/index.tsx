import React from 'react'
import Styles from './styles.module.scss'
import img2 from '../../../../assets/images/g2.png'
import img3 from '../../../../assets/images/g3.png'
import img1 from '../../../../assets/images/g1.png'
import img4 from '../../../../assets/images/g4.png'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { useAppDispatch } from '@app/redux/hooks'
import { getUsdt, getLimc } from '@app/walletConnect/walletConnect'
import BootstrapDialogTitle from './BootstrapDialogTitle'
import { useHistory } from 'react-router-dom'
import {
  setIsAuth,
  setUnlockedLimcBalance,
  setLockedLimcBalance,
  setUsdtBalance,
  setUserWallet,
} from '@app/redux/authSlice'

interface IModalConnectWalletProps {
  onClose: () => void
  open: boolean
  closeBurgerMenu: () => void
}

const ModalConnectWallet = ({ onClose, open, closeBurgerMenu }: IModalConnectWalletProps) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const BootstrapDialog = styled(Dialog)({
    '& .MuiPaper-root': {
      backgroundColor: '#192A2C',
      borderRadius: 20,
      padding: 50,
      '@media (max-width:768px)': {
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        margin: '0',
        padding: 0,
        borderRadius: '0',
      },
    },
  })

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
      const { accounts } = payload.params[0]

      dispatch(setUserWallet(accounts[0]))
      dispatch(setIsAuth(true))

      getUsdt(accounts[0]).then((res) => dispatch(setUsdtBalance(res)))
      getLimc(accounts[0]).then((res) => {
        dispatch(setUnlockedLimcBalance(res.unlockedBalance))
        dispatch(setLockedLimcBalance(res.lockedBalance))
      })

      QRCodeModal.close()
      onClose()
      closeBurgerMenu()
      history.push('/my')
    })
  }

  return (
    <BootstrapDialog onClose={onClose} aria-labelledby='customized-dialog-title' open={open}>
      <BootstrapDialogTitle id='customized-dialog-title' onClose={onClose}>
        <p className={Styles.dialogText}>Подключить кошелек</p>
      </BootstrapDialogTitle>
      <div className={Styles.dialogItem}>
        <div className={Styles.dialogItemCont}>
          <div className={Styles.itemitem} onClick={sincWithWallet}>
            <img src={img2} />
            <p className={Styles.name}>WalletConnect</p>
          </div>
          <div className={Styles.itemitem} onClick={sincWithWallet}>
            <img src={img3} />
            <p className={Styles.name}>WalletConnect</p>
          </div>
        </div>
        <div className={Styles.diologItemCont}>
          <div className={Styles.itemitem}>
            <img src={img1} />
            <p className={Styles.name}>Metamask</p>
          </div>
          <div className={Styles.itemitem}>
            <img src={img4} className={Styles.itemitemimg} />
            <p className={Styles.name}>Другие</p>
          </div>
        </div>
      </div>
      <div className={Styles.center}>
        <button autoFocus className={Styles.button}>
          Подключить
        </button>
      </div>
    </BootstrapDialog>
  )
}

export default ModalConnectWallet
