import React, { useState } from 'react'

import limcYellow from '@icons/limcYellow.svg'
import lockIcon from '@icons/lockIcon.svg'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { BottomModal } from '@components/Modal/BottomModal'
import { BuyLIMCModal } from './components/BuyLIMCModal'
import { SellLIMCModal } from './components/SellLIMCModal'
import { useAppSelector } from '@app/redux/hooks'

interface BalanceLIMCProps {
  clientWidth: number
}

export const BalanceLIMC: React.FC<BalanceLIMCProps> = ({ clientWidth }) => {
  const unlockedLimcBalance = useAppSelector((state) => state.auth.unlockedLimcBalance)
  const lockedLimcBalance = useAppSelector((state) => state.auth.lockedLimcBalance)
  const oneLimcPrice = useAppSelector((state) => state.auth.oneLimcPrice)

  const balanceInDollars = Math.round(unlockedLimcBalance + lockedLimcBalance) * oneLimcPrice

  const [popupOpened, setPopupOpened] = useState<boolean>(false)
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const [modalOpened2, setModalOpened2] = useState<boolean>(false)

  let timeout = null
  const openPopup = () => {
    clearInterval(timeout)
    setPopupOpened(true)
  }
  const closePopup = () => {
    timeout = setTimeout(() => setPopupOpened(false), 100)
  }

  const setActivePopup = () => {
    setPopupOpened((previous) => !previous)
  }

  const onClickCloseModal = () => {
    setModalOpened(() => false)
  }
  const onClickOpenModal = () => {
    setModalOpened(() => true)
  }

  const onClickCloseModal2 = () => {
    setModalOpened2(() => false)
  }
  const onClickOpenModal2 = () => {
    setModalOpened2(() => true)
  }

  return (
    <div className={styles.cabinet__balanceLIMC}>
      <div className={styles.cabinet__balanceLIMC_item1}>
        <div className={styles.cabinet__balanceLIMCTitle}>
          <img src={limcYellow} />
          LIMC
        </div>
        {clientWidth > 768 ? (
          <div>
            <div className={styles.cabinet__balanceLIMCStats}>
              {unlockedLimcBalance}
              <span>/</span>
              <span className={styles.lock} onMouseEnter={openPopup} onMouseLeave={closePopup}>
                {lockedLimcBalance}
                <img src={lockIcon} />
                <div className={classNames(styles.popup, popupOpened && styles.popup__active)}>
                  <p className={styles.popup_subtitle}>Сумма токенов на lock-up периоде</p>
                </div>
              </span>
            </div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balanceInDollars}</div>
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = {oneLimcPrice} USDT</div>
            <hr className={styles.cabinet__balanceLIMCLine} />
          </div>
        ) : (
          <div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balanceInDollars}</div>
            <div className={styles.cabinet__balanceLIMCStats}>
              {unlockedLimcBalance}
              <span>/</span>
              <span className={styles.lock} onClick={setActivePopup}>
                {lockedLimcBalance}
                <img src={lockIcon} />
                <BottomModal active={popupOpened} setActive={setActivePopup}>
                  <p className={styles.bottomPopup__text}>Сумма токенов на lock-up периоде</p>
                </BottomModal>
              </span>
            </div>
            <hr className={styles.cabinet__balanceLIMCLine} />
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = {oneLimcPrice} USDT</div>
          </div>
        )}
        <div style={{ margin: '0 0 10px 0' }}>
          <button className={styles.cabinet__balanceLIMCButton} type='button' onClick={onClickOpenModal}>
            <BuyLIMCModal modalOpened={modalOpened} closeModal={onClickCloseModal} />
            Купить LIMC
          </button>
        </div>
        <div>
          <button className={styles.cabinet__balanceLIMCButton} type='button' onClick={onClickOpenModal2}>
            <SellLIMCModal modalOpened={modalOpened2} closeModal={onClickCloseModal2} />
            Продать LIMC
          </button>
        </div>
      </div>
    </div>
  )
}
