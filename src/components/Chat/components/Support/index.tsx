import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from '@components/Chat/components/Text'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'

export const Support = ({ supportVisible, message, handleSupportClose }) => {
  const [t] = useTranslation()

  return (
    <section className={supportVisible ? styles.supportContainer : styles.supportContainer_invisible}>
      <div className={styles.supportHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={handleSupportClose} />
        <img src={message.image} alt='' className={styles.foto} />
        <p className={styles.name}>{message.name}</p>
        <p className={message.status === 'В сети' ? styles.status_active : styles.status}>{message.status}</p>
      </div>
      <div className={styles.messagesContainer}>
        <span
          className={styles.date}
        >{`${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</span>
        <Text message={message} />
      </div>
      <Textarea />
      <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('support_no_messages')}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{t('support_start')}</p>
    </section>
  )
}
