import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const Message = ({ message }) => {
  const [t] = useTranslation()

  return (
    <article className={styles.messageContainer}>
      <img src={message.image} alt='image' className={styles.foto} />
      <svg
        className={message.status === 'active' ? styles.status : styles.status_invisible}
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='7' cy='7' r='6' fill='#75D68C' stroke='white' strokeWidth='2' />
      </svg>
      <p className={styles.name}>{message.name}</p>
      <p className={styles.message}>{message.message}</p>
      <data className={styles.date}>{message.date}</data>
      <div className={message.unreadMessages > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
        {message.unreadMessages}
      </div>
      <span className={styles.line} />
    </article>
  )
}
