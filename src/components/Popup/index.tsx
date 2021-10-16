import React from 'react'
import Styles from './styles.module.scss'

import closeIcon from '@icons/close.svg'

interface PopupProps {
  closePopup: any
}

export const Popup: React.FC<PopupProps> = ({ children, closePopup }) => {
  return (
    <div className={Styles.popup}>
      <div className={Styles.content}>
        {children}
        <img className={Styles.close} src={closeIcon} alt='Иконка' onClick={closePopup} />
      </div>
    </div>
  )
}
