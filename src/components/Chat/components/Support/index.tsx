import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { InputText } from '../../../../ui-kit/InputText'
import { Text } from '@components/Chat/components/Text'
import arrow from '@icons/arrow-left-blue.svg'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'

export const Support = ({ supportVisible, message, handleSupportClose }) => {
  const [t] = useTranslation()
  const [sendIconVisible, setSendIconVisible] = useState(false)

  const handleSendIconVisibility = () => {
    setSendIconVisible(true)
  }

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
      <div className={styles.inputContainer}>
        <button className={styles.button} type='button'>
          <img alt='' src={clip} className={styles.clip} />
        </button>
        <textarea className={styles.inputText} placeholder='Сообщение' onChange={handleSendIconVisibility} />
        <button className={styles.button} type='submit'>
          <img alt='' src={send} className={sendIconVisible ? styles.sendIcon : styles.sendIcon_invisible} />
        </button>
      </div>
      <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('support_no_messages')}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{t('support_start')}</p>
    </section>
  )
}
