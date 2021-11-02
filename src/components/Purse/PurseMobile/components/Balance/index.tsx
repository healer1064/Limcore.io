import React, { useState } from 'react'
import styles from './styles.module.scss'
import { balance as balanceSvg, copyIcon } from '../../images'
import logoIcon from '@icons/logo.svg'
import { Modal } from '../Modal'
import { Overall } from './components/Overall/index'
import { useAppSelector } from '@app/redux/hooks'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'

export const Balance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  // Если человек попал в личныый кабинет через регистрацию, то тут будет true
  const [isRegModalVisible, setIsRegModalVisible] = useState(
    useAppSelector((state) => state.auth.processType) === 'REGISTRATION',
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [money, setMoney] = useState('0')
  const walletAddress = useAppSelector((state) => state.wallet.address)

  const handleFirstRegModalClose = () => {
    setIsRegModalVisible(false)
  }

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
      <Modal classname={styles.reg} active={isRegModalVisible} setActive={handleFirstRegModalClose} crossFlag>
        <div className={styles.regModal}>
          <div className={styles.regModalUp}>
            <header className={styles.regModalHeader}>
              <img src={logoIcon} onClick={handleFirstRegModalClose} />
            </header>
            <h4 className={styles.regModalTitle}>Мы создали ваш USDT кошелек</h4>
            <p className={styles.regModalSubtitle}>Адрес кошелька</p>
            <p className={styles.regModalPurse}>
              ...
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
  )
}
