import React, { useState } from 'react'

import styles from './styles.module.scss'
import infoIcon from '@icons/infoButton.svg'
import TBRatingIcon from '@icons/TBRatingIcon.svg'
import classNames from 'classnames'

export const Rating: React.FC = () => {
  const [busyTB] = useState<number>(987)
  const [precentage] = useState<number>(0.2)
  const [popupOpened, setPopupOpened] = useState(false)

  let timeout = null
  const openPopup = () => {
    clearInterval(timeout)
    setPopupOpened(true)
  }

  const closePopup = () => {
    timeout = setTimeout(() => setPopupOpened(false), 100)
  }

  return (
    <div className={styles.ASide__rating}>
      <div className={styles.ASide__ratingFlex} style={{ margin: '0 0 17px 0' }}>
        <div>
          Мой рейтинг
          <img src={infoIcon} />
        </div>
        <div>
          <img src={TBRatingIcon} />
          {busyTB} TB
        </div>
      </div>
      <div className={styles.ASide__ratingFlex}>
        <div className={styles.percentage__container}>
          % владения
          <img src={infoIcon} onMouseEnter={openPopup} onMouseLeave={closePopup} className={styles.icon} />
          <div className={classNames(styles.popup, popupOpened && styles.popup__active)}>
            <p className={styles.popup_subtitle}>Процент владения от общей мощности Limcore</p>
          </div>
        </div>
        <div>{precentage}%</div>
      </div>
    </div>
  )
}
