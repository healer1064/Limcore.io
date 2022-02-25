import React, { useState } from 'react'

import limcYellow from '@icons/limcYellow.svg'
import lockIcon from '@icons/lockIcon.svg'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { BottomModal } from '@components/Modal/BottomModal'

interface BalanceLIMCProps {
  clientWidth: number
}

export const BalanceLIMC: React.FC<BalanceLIMCProps> = ({ clientWidth }) => {
  const [balance] = useState<number>(11236.26)
  const [balance2] = useState<number>(1235)
  const [lockBalance] = useState<number>(1263)
  const [popupOpened, setPopupOpened] = useState(false)

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
              {balance2}
              <span>/</span>
              <span className={styles.lock} onMouseEnter={openPopup} onMouseLeave={closePopup}>
                {lockBalance}
                <img src={lockIcon} />
                <div className={classNames(styles.popup, popupOpened && styles.popup__active)}>
                  <p className={styles.popup_subtitle}>Сумма токенов на lock-up периоде</p>
                </div>
              </span>
            </div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balance}</div>
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = 300 USDT</div>
            <hr className={styles.cabinet__balanceLIMCLine} />
          </div>
        ) : (
          <div>
            <div className={styles.cabinet__balanceLIMCMiddle}>Полный баланс</div>
            <div className={styles.cabinet__balanceLIMCSummary}>${balance}</div>
            <div className={styles.cabinet__balanceLIMCStats}>
              {balance2}
              <span>/</span>
              <span className={styles.lock} onClick={setActivePopup}>
                {lockBalance}
                <img src={lockIcon} />
                <BottomModal active={popupOpened} setActive={setActivePopup}>
                  <p className={styles.bottomPopup__text}>Сумма токенов на lock-up периоде</p>
                </BottomModal>
              </span>
            </div>
            <hr className={styles.cabinet__balanceLIMCLine} />
            <div className={styles.cabinet__balanceLIMCCourse}>1 LIMC = 300 USDT</div>
          </div>
        )}
        <div className={styles.btnContainer} style={{ margin: '0 0 10px 0' }}>
          <button className={styles.cabinet__balanceLIMCButton} type='button'>
            Купить LIMC
          </button>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.cabinet__balanceLIMCButton} type='button'>
            Продать LIMC
          </button>
        </div>
      </div>
    </div>
  )
}
