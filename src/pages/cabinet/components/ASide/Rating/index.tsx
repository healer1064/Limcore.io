import React, { useState } from 'react'

import styles from './styles.module.scss'
import infoIcon from '@icons/infoButton.svg'
import classNames from 'classnames'
import { BottomModal } from '@components/Modal/BottomModal'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useAppSelector } from '@app/redux/hooks'
import { LimcRating } from '@components/Chat/components/LimcRating'

export const Rating: React.FC = () => {
  const { width } = useWindowSize()

  const unlockedLimcBalance = useAppSelector((state) => state.auth.unlockedLimcBalance)
  const lockedLimcBalance = useAppSelector((state) => state.auth.lockedLimcBalance)

  const busyTB = unlockedLimcBalance + lockedLimcBalance
  const percentage = 0.2

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
    <div className={styles.ASide__rating}>
      <div className={styles.ASide__ratingFlex} style={{ margin: '0 0 17px 0' }}>
        <div>
          Мой рейтинг
          <img src={infoIcon} />
        </div>
        <div>
          <LimcRating limcBalance={busyTB} />
        </div>
      </div>
      <div className={styles.ASide__ratingFlex}>
        <div className={styles.percentage__container}>
          % владения
          {width > 768 ? (
            <>
              <img src={infoIcon} onMouseEnter={openPopup} onMouseLeave={closePopup} className={styles.icon} />
              <div className={classNames(styles.popup, popupOpened && styles.popup__active)}>
                <p className={styles.popup_subtitle}>Процент владения от общей мощности Limcore</p>
              </div>
            </>
          ) : (
            <>
              <img src={infoIcon} onClick={setActivePopup} className={styles.icon} />
              <BottomModal active={popupOpened} setActive={setActivePopup}>
                <p className={styles.bottomPopup__text}>Процент владения от общей мощности Limcore</p>
              </BottomModal>
            </>
          )}
        </div>
        <div>{percentage}%</div>
      </div>
    </div>
  )
}
