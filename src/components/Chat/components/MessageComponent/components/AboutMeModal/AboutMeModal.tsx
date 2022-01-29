import React from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'
import closeIcon from '../../../../../../assets/icons/greyClose.svg'

interface AboutMeModalProps {
  username: string
  avatar: string
  aboutUser: string
  closeModal: () => void
}

export const AboutMeModal: React.FC<AboutMeModalProps> = ({ username, avatar, closeModal, aboutUser }) => {
  const [t] = useTranslation()

  return (
    <div className={Styles.modal}>
      <button className={Styles.modal_close} onClick={closeModal}>
        <img src={closeIcon} alt='close' />
      </button>
      <div className={Styles.modal_inner}>
        <img src={avatar} alt='avatar' className={Styles.modal_avatar} />
        <span>{username}</span>
      </div>
      <div className={Styles.about_block}>
        <span className={Styles.about_title}>{t('profile_about_me')}</span>
        <p className={Styles.about_text}>{aboutUser || t('chat_modal_text') + ' :)'}</p>
      </div>
    </div>
  )
}
