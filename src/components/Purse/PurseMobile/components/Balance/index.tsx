import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balance as balanceSvg } from '../../images'
import { Modal } from '../Modal'
import { Overall } from './components/Overall/index'
import { useAppSelector } from '@app/redux/hooks'

export const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [money, setMoney] = useState('0')
  const walletAddress = useAppSelector((state) => state.wallet.address)

  const handleOpenBalanceClick = () => {
    setIsBalanceVisible(true)
  }

  const handleCloseBalanceModal = () => {
    setIsBalanceVisible(false)
  }

  return (
    <div className={styles.balance}>
      <div className={styles.balance__header} onClick={handleOpenBalanceClick}>
        <h3 className={styles.balance__title}>Общий баланс</h3>
        <button className={styles.balance__button}>
          <img src={balanceSvg} />
        </button>
      </div>

      <p className={styles.balance__sumMain}>{`$${money}`}</p>
      <div className={styles.balance__data}>
        <p className={styles.balance__time}>24h</p>
        <p className={styles.balance__sum}>$0</p>
        <p className={styles.balance__percent}>0%</p>
      </div>
      <p className={styles.addressName}>Адрес кошелька:</p>
      <div className={styles.addressContainer}>
        <span className={styles.addressValue}>{walletAddress}</span>
        {/* {walletAddress} */}
      </div>
      <Modal active={isBalanceVisible} setActive={() => {}}>
        <Overall onClick={handleCloseBalanceModal} money={money} />
      </Modal>
    </div>
  )
}
