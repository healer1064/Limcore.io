import React, { useState } from 'react'

import styles from './styles.module.scss'
import arrowYellowUp from '@icons/yellowArrowUp.svg'
import infoIcon from '@icons/infoButton.svg'
import { Checkbox } from '@material-ui/core'
import classNames from 'classnames'

interface THeadProps {
  checked: boolean
  onChangeSelectedCoins: () => unknown
}

export const THead: React.FC<THeadProps> = ({ checked, onChangeSelectedCoins }) => {
  const [isHover, setHover] = useState<boolean>(false)

  const onMouseEnterCheckbox = () => {
    setHover(() => true)
  }
  const onMouseLeaveCheckbox = () => {
    setHover(() => false)
  }

  // Popup
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
    <div className={styles.THead}>
      <div>
        <Checkbox
          style={{ color: isHover ? '#26dff8' : 'rgba(79, 132, 138, 1)', padding: 0, transition: 'color 0.5s ease' }}
          onMouseEnter={onMouseEnterCheckbox}
          onMouseLeave={onMouseLeaveCheckbox}
          onChange={onChangeSelectedCoins}
          checked={checked}
        />
      </div>
      <div>Ассет</div>
      <div>Стоимость</div>
      <div className='balance'>
        Баланс
        <img className={styles.THead_ImgMargin} src={arrowYellowUp} />
      </div>
      <div>Сумма</div>
      <div className='today'>
        <div className={styles.profit} onMouseEnter={openPopup} onMouseLeave={closePopup}>
          Заработано
          <img className={styles.THead_ImgMargin} style={{ transform: 'translateY(2px)' }} src={infoIcon} />
          <div className={classNames(styles.popup, popupOpened && styles.popup__active)}>
            <p className={styles.popup_subtitle}>Зачисление один раз в сутки</p>
          </div>
        </div>
        <p className={styles.today}>Сегодня</p>
      </div>
      <div />
    </div>
  )
}
