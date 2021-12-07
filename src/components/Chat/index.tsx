import React from 'react'
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
import { useAppSelector } from '@app/redux/hooks'
import { useChat } from './utils/useChat'

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const { joinGroup } = useChat()

  const desktop = width >= 769

  // const messages = useAppSelector((state) => state.chat.messages)
  const dialogues = useAppSelector((state) => state.chat.dialogues)
  const isLoading = useAppSelector((state) => state.chat.isLoading)

  const onJoin = () => {
    joinGroup('general_chat')
    window.location.reload()
  }

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
            dialogues.map((dialogue) => <Dialogue key={nanoid()} data={dialogue} />)
          )}
        </section>
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
          dialogues.map((dialogue) => <Dialogue key={nanoid()} data={dialogue} />)
        )}
      </article>
      <FooterMobile />
    </div>
  )
}
