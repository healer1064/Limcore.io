import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/DialogueContent/styles.module.scss'
// import listStyles from '@components/Chat/components/List/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
// import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible, setIsListVisible } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { socket } from '../../index'
import { getGroupMessages } from '@components/Chat/utils/chat'
import { nanoid } from '@reduxjs/toolkit'

export const DialogueContent = ({ contentVisible, slug }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)

  const userMail = useAppSelector((state) => state.user.userData?.email)
  // const [listClassName, setListClassName] = useState(listStyles.list_invisible)
  const [messages, setMessages] = useState([])

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.log(data.result)
    // setMessages(data.result)

    if (data.result && data.result.length !== 0) {
      setMessages([...messages, ...data.result])
    }

    // if (data.result) {
    //   console.log(data.result)
    //   setMessages(data.result)
    // }
    // setMessages([...messages, ...data.result])
  }

  const handleParticipantsListOpen = () => {
    dispatch(setIsListVisible('list'))
    // setListClassName(listStyles.list)
  }

  // const handleParticipantsListClose = () => {
  //   dispatch(setIsListVisible('group'))
  //   setListClassName(listStyles.list_invisible)
  // }

  // Скролл блока с сообщениями вниз
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (contentVisible) {
      getGroupMessages(slug, 1)
    }
  }, [contentVisible])

  // TODO: рендерится несколько раз
  return (
    contentVisible && (
      <section className={styles.groupContainer}>
        <div className={styles.groupHeader}>
          <img alt='' src={arrow} className={styles.arrow} onClick={() => dispatch(setIsContentVisible(''))} />
          <img src={limcoreIcon} alt='' className={styles.foto} />
          <p className={styles.name}>Общий чат</p>
          <p className={styles.status} onClick={handleParticipantsListOpen}>
            {/* {`${participants.length} ${t('group_number')}`} */}
            {`2 ${t('group_number')}`}
          </p>
        </div>
        <div className={styles.groupMessagesContainer} ref={messagesEndRef}>
          {messages &&
            messages.length !== 0 &&
            messages.map((msg) => {
              let isMyMsg = false
              if (userMail === msg.user.email) {
                isMyMsg = true
              }

              return <MessageComponent key={nanoid()} message={msg} user={msg.user} isMyMsg={isMyMsg} />
            })}
        </div>
        {/* <List
          listClassName={listClassName}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
        /> */}
        <Textarea slug={slug} />
      </section>
    )
  )
}
