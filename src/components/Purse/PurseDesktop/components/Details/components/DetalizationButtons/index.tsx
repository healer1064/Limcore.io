import React, { useState } from 'react'
import styles from './styles.module.scss'
import { copyIcon, linkIcon, tradeIcon, withdrawIcon, copyIconWhite } from '@components/Purse/PurseMobile/images'
import { Modal } from '../../../Modal'

export const DetalizationButtons = () => {
  const [isCopyInfoVisible, setIsCopyInfoVisible] = useState(false)

  const handleCopyClick = () => {
    setIsCopyInfoVisible(true)
    setTimeout(() => {
      setIsCopyInfoVisible(false)
    }, 1000)
  }

  const handleLinkClick = () => {
    console.log('handleLinkClick')
  }

  const handleTradeClick = () => {
    console.log('handleTradeClick')
  }

  const handleWithdrawClick = () => {
    console.log('handleWithdrawClick')
  }

  const copyModalStyles = {
    zIndex: 1001,
    backgroundColor: 'transparent',
  }

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleCopyClick}>
          <img src={copyIcon} className={styles.icon} />
          Скопировать адрес кошелька
        </button>

        <Modal active={isCopyInfoVisible} style={copyModalStyles}>
          <div className={styles.copyModal}>
            <button className={styles.btn} onClick={handleWithdrawClick}>
              <img src={copyIconWhite} className={styles.icon} />
              Адрес кошелька скопирован
            </button>
          </div>
        </Modal>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleLinkClick}>
          <img src={linkIcon} className={styles.icon} />
          Привязать внешний кошелек
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleTradeClick}>
          <img src={tradeIcon} className={styles.icon} />
          Обменять на USDT
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleWithdrawClick}>
          <img src={withdrawIcon} className={styles.icon} />
          Вывести
        </button>
      </li>
    </ul>
  )
}
