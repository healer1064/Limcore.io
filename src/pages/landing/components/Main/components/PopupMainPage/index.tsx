import React from 'react'
import Styles from './styles.module.scss'

import closeIcon from '../../../../../../assets/icons/close-notification.svg'

interface PopupMainPageProps {
  closePopup: any
  popupOpen: boolean
  className: string
}

export const PopupMainPage: React.FC<PopupMainPageProps> = ({ closePopup, children, popupOpen, className }) => {
  return (
    <div className={Styles.container}>
      <div className={`${!popupOpen ? Styles.popup_invisible : className}`}>
        <div className={Styles.content}>
          {children}
          <img className={Styles.close} src={closeIcon} alt='Иконка' onClick={closePopup} />
        </div>
      </div>
    </div>
  )
}
