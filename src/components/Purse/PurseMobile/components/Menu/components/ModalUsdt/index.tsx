import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '@components/Modal'
import { ModalHeader } from '@components/Modal/ModalHeader'
import { balanceUsdt } from '@components/Purse/PurseDesktop/images'

interface IModalUsdtProps {
  isActive: boolean
  onClose: () => any
  balance: string
}

export const ModalUsdt = ({ isActive, onClose, balance }: IModalUsdtProps) => {
  return (
    <Modal active={isActive} classname={styles.balanceModal} setActive={onClose} isMobile>
      <ModalHeader title='USDT' onClick={onClose} crossFlag />
      <div className={styles.balanceBlock}>
        <div className={styles.block}>
          <div className={styles.line}>
            <img src={balanceUsdt} alt='' />
            <span className={styles.title}>{balance} USDT</span>
          </div>
          <span className={styles.usd}>{}</span>
        </div>
      </div>
    </Modal>
  )
}
