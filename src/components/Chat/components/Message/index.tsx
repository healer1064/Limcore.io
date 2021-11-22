import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const Message = ({ message }) => {
  const [t] = useTranslation()

  return (
    <article className={styles.messageContainer}>
      <img src={message.image} alt='image' className={styles.foto} />
      <p className={styles.name}>{message.name}</p>
      <p className={styles.message}>{message.message}</p>
      <data className={styles.date}>{message.date}</data>
      <span className={styles.line} />
    </article>
  )
}
