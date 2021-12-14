import React, { useState } from 'react'
import styles from './styles.module.scss'
import { copyIcon, linkIcon, tradeIcon, withdrawIcon, copyIconWhite } from '@components/Purse/PurseMobile/images'
import { Modal } from '@components/Modal/index'

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
        <button className={styles.btn} onClick={handleCopyClick} type='button'>
          <img src={copyIcon} className={styles.icon} alt='icon' />
          Скопировать адрес кошелька
        </button>

        <Modal active={isCopyInfoVisible} style={copyModalStyles} isMobile>
          <div className={styles.copyModal}>
            <button className={styles.btn} onClick={handleWithdrawClick} type='button'>
              <img src={copyIconWhite} className={styles.icon} alt='icon' />
              Адрес кошелька скопирован
            </button>
          </div>
        </Modal>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleLinkClick} type='button'>
          <img src={linkIcon} className={styles.icon} alt='icon' />
          Привязать внешний кошелек
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleTradeClick} type='button'>
          <img src={tradeIcon} className={styles.icon} alt='icon' />
          Обменять на USDT
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={handleWithdrawClick} type='button'>
          <img src={withdrawIcon} className={styles.icon} alt='icon' />
          Вывести
        </button>
      </li>
    </ul>
  )
}
