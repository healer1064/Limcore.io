import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/DialogueContent/styles.module.scss'
import listStyles from '@components/Chat/components/ParticipantsList/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible, setIsListVisible } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import { useChat } from '@components/Chat/utils/useChat'

export const DialogueContent = ({ contentVisible, data }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  let dateBuffer = null

  const userId = useAppSelector((state) => state.user.userData?.id)
  const [listClassName, setListClassName] = useState(listStyles.list_invisible)
  const [participants, setParticipants] = useState([])
  const messages = useAppSelector((state) => state.chat.messages)
  const { getGroupMessages } = useChat()

  useEffect(() => {
    if (contentVisible) {
      setParticipants(data.members)
      getGroupMessages(data.slug, 1)
    }
  }, [contentVisible])

  const handleParticipantsListOpen = () => {
    dispatch(setIsListVisible('list'))
    setListClassName(listStyles.list)
  }

  const handleParticipantsListClose = () => {
    dispatch(setIsListVisible('group'))
    setListClassName(listStyles.list_invisible)
  }

  // Скролл блока с сообщениями вниз
  useEffect(() => {
    if (messages?.length !== 0) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    console.log('Dialogue content render')
  }, [])

  return (
    contentVisible && (
      <section className={styles.groupContainer}>
        <div className={styles.groupHeader}>
          <img alt='' src={arrow} className={styles.arrow} onClick={() => dispatch(setIsContentVisible(''))} />
          <img src={limcoreIcon} alt='' className={styles.foto} />
          <p className={styles.name}>Общий чат</p>
          <p className={styles.status} onClick={handleParticipantsListOpen}>
            {`${data.members.length} ${t('group_number')}`}
          </p>
        </div>
        <div className={styles.groupMessagesContainer} ref={messagesEndRef}>
          {messages?.length !== 0 &&
            messages.map((msg) => {
              const msgDate = getMonthAndDay(msg.created_at)
              let buffer = dateBuffer

              if (dateBuffer !== msgDate) {
                dateBuffer = msgDate
                buffer = msgDate
              } else {
                buffer = ''
              }

              return (
                <MessageComponent
                  key={msg.id}
                  message={msg}
                  user={msg.user}
                  isMyMsg={userId === msg.user.id}
                  date={buffer}
                />
              )
            })}
        </div>
        <ParticipantsList
          listClassName={listClassName}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
        />
        <Textarea slug={data.slug} />
      </section>
    )
  )
}
