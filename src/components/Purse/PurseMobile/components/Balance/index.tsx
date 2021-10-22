import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balance as balanceSvg } from '../../images'
import { Modal } from '../Modal'
import { Overall } from './components/Overall/index'

export const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)
  const [money, setMoney] = useState('140,784')

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
        <p className={styles.balance__sum}>$1462</p>
        <p className={styles.balance__percent}>0%</p>
      </div>

      <Modal active={isBalanceVisible} setActive={() => {}}>
        <Overall onClick={handleCloseBalanceModal} money={money} />
      </Modal>
    </div>
  )
}
