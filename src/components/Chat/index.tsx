import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Dialogue } from '@components/Chat/components/Dialogue'
import { useTranslation } from 'react-i18next'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { Spinner } from '@components/Spinner'
import { nanoid } from '@reduxjs/toolkit'

export let socket: WebSocket = null

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()

  const [dialogues, setDialogues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access
  const desktop = width >= 769

  socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)

  useEffect(() => {
    if (dialogues.length === 0) {
      socket.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data)
        console.log(data.groups)

        setDialogues(data.groups)
        setIsLoading(false)
      }
    }
  }, [])

  return desktop ? (
    <section className={styles.desktop}>
      <div className={styles.chat}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('chat_title')}</h1>
          <button className={styles.button} type='button' onClick={handleChatClose}>
            <img src={close} alt='' />
          </button>
        </div>
        <SearchForm desktop={desktop} />
        <section className={styles.messageSection}>
          {isLoading && (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          )}
          {dialogues.map((dialogue) => (
            <Dialogue key={nanoid()} data={dialogue} />
          ))}
        </section>
        <FooterMobile />
      </div>
    </section>
  ) : (
    <div className={styles.chat}>
      <SearchForm desktop={desktop} />
      <article className={styles.messageSection}>
        {dialogues.map((dialogue) => (
          <Dialogue key={nanoid()} data={dialogue} />
        ))}
      </article>
      <FooterMobile />
    </div>
  )
}
