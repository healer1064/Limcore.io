import { FooterMobile } from '@components/Footer/FooterMobile'
import React from 'react'
import styles from './style.module.scss'
import { ChatTemp } from '../../assets/icons/Chat'
import { useTranslation } from 'react-i18next'

export const Dummy = () => {
  const [t] = useTranslation()

  return (
    <div className={styles.dummy}>
      <p className={styles.title}>
        {t('chat_inProcess')}
        <br />
        {t('chat_tg')}{' '}
        <a href='https://t.me/limcore_chat' className={styles.link}>
          @limcore_chat
        </a>
      </p>
      <div className={styles.img}>
        <ChatTemp />
      </div>
      <FooterMobile />
    </div>
  )
}
