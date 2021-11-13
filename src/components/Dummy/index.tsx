import { FooterMobile } from '@components/Footer/FooterMobile'
import React from 'react'
import styles from './style.module.scss'
import { ChatTemp } from '../../assets/icons/Chat'

export const Dummy = () => {
  return (
    <div className={styles.dummy}>
      <p className={styles.title}>
        Чат находится в разработке.
        <br />
        Вступай в чат в Telegram{' '}
        <a href='https://t.me/limcore_chat' className={styles.link}>
          @limcore_chat
        </a>
      </p>
      <div className={styles.img} />
      {/* <div className={styles.img}>
        <ChatTemp />
      </div> */}
      <FooterMobile />
    </div>
  )
}
