import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Dialogue } from '@components/Chat/components/Dialogue'
import { useTranslation } from 'react-i18next'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { Spinner } from '@components/Spinner'
import { nanoid } from '@reduxjs/toolkit'
import { ButtonBig } from '../../ui-kit/ButtonBig'
import { joinGroup } from './utils/chat'

export let socket: WebSocket = null

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const WS = useRef(null)

  const [dialogues, setDialogues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access
  const desktop = width >= 769

  const onJoin = () => {
    joinGroup('general_chat')
    window.location.reload()
  }

  useEffect(() => {
    if (dialogues.length === 0) {
      WS.current = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)

      WS.current.onopen = () => {
        socket = WS.current
      }

      WS.current.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data)
        console.log(data)

        setDialogues(data.groups)
        setIsLoading(false)
      }

      WS.current.onclose = (event: MessageEvent) => {
        console.log(event)
      }
    }
    return () => WS.current.close(1000)
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
          {dialogues.length === 0 ? (
            <div className={styles.joinChat}>
              <p className={styles.joinChat_title}>Вас еще нет в общем чате? Присоединяйтесь!</p>
              <ButtonBig onClick={onJoin}>Вступить в чат</ButtonBig>
            </div>
          ) : (
            dialogues.map((dialogue) => <Dialogue key={nanoid()} data={dialogue} socket={WS} />)
          )}
        </section>
        {/* <FooterMobile /> */}
      </div>
    </section>
  ) : (
    <div className={styles.chat}>
      <SearchForm desktop={desktop} />
      <article className={styles.messageSection}>
        {isLoading && (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}

        {dialogues.length === 0 ? (
          <div className={styles.joinChat}>
            <p className={styles.joinChat_title}>Вас еще нет в общем чате? Присоединяйтесь!</p>
            <ButtonBig onClick={onJoin}>Вступить в чат</ButtonBig>
          </div>
        ) : (
          dialogues.map((dialogue) => <Dialogue key={nanoid()} data={dialogue} socket={WS} />)
        )}
      </article>
      <FooterMobile />
    </div>
  )
}
