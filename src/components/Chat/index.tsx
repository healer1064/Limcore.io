import React, { useState } from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Message } from '@components/Chat/components/Message'
import { useTranslation } from 'react-i18next'
import fotoExample from '@icons/supportFotoExample.svg'

export const Chat = () => {
  const [t] = useTranslation()
  const messages = [
    {
      id: 1,
      name: 'Поддержка',
      message: 'Привет! Здесь вы можете задать свой вопрос',
      date: 11.08,
      image: fotoExample,
    },
  ]

  return (
    <div className={styles.chat}>
      <SearchForm />
      <section className={styles.messageSection}>
        {messages.map((message) => (
          <Message key={message.id} {...message} message={message} />
        ))}
      </section>
      <FooterMobile />
    </div>
  )
}
