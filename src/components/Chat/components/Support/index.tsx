import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from '@components/Chat/components/Text'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { IGroupInterface } from '@components/Chat/utils/types'

interface ISupportProps {
  contentVisible: string
  message: IGroupInterface
  handleSupportClose: () => void
}

export const Support = ({ contentVisible, message, handleSupportClose }: ISupportProps) => {
  const [t] = useTranslation()
  const [messages, setMessages] = useState([])

  // socket.onmessage = (event: MessageEvent) => {
  //   const data = JSON.parse(event.data)
  //   console.log(data)

  //   if (data.command === 4) {
  //     setMessages(data.result)
  //   }
  // }

  useEffect(() => {
    console.log('messages', messages)
  }, messages)

  return (
    contentVisible === 'support' && (
      <section className={styles.supportContainer}>
        <div className={styles.supportHeader}>
          <img alt='' src={arrow} className={styles.arrow} onClick={handleSupportClose} />
          <img src={message.image} alt='' className={styles.foto} />
          <p className={styles.name}>{message.name}</p>
          <p className={message.status === 'В сети' ? styles.status_active : styles.status}>{message.status}</p>
        </div>
        <div className={styles.messagesContainer}>
          <span className={styles.date}>
            {message.date}.{message.year}
          </span>
          <Text message={message} />
        </div>
        <Textarea slug={message.slug} />
        <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('support_no_messages')}</p>
        <p className={`${styles.text} ${styles.text_invisible}`}>{t('support_start')}</p>
      </section>
    )
  )
}
