import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/ChatContent/styles.module.scss'
import listStyles from '@components/Chat/components/ParticipantsList/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent, setCurrentMessages } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthNameWithDate } from '@components/Chat/utils/funcs'
import { IMessageInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'
import profileIcon from '@icons/profileicon.svg'

export const ChatContent = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  const { getGroupMessages } = useChat()

  const slug = useAppSelector((state) => state.chat.currentSlug)
  const userId = useAppSelector((state) => state.user.userData?.id)
  const currentMessages = useAppSelector((state) => state.chat.currentMessages)
  const participants = useAppSelector((state) => state.chat.genChatMembers)
  const currentGenMessagesPage = useAppSelector((state) => state.chat.currentGenMessagesPage)
  const wholeGenMessagesPages = useAppSelector((state) => state.chat.wholeGenMessagesPages)

  let dateBuffer: string = null
  const IS_GENERAL_CHAT = slug === 'general_chat'

  const [currentPosition, setCurrentPosition] = useState(null)
  const [autoScroll, setAutoScroll] = useState(true)

  const [openListClassname, setOpenListClassname] = useState(listStyles.list_invisible)
  const handleParticipantsListOpen = () => setOpenListClassname(listStyles.list)
  const handleParticipantsListClose = () => setOpenListClassname(listStyles.list_invisible)

  const onClose = () => {
    dispatch(setCurrentMessages([]))
    dispatch(setContent(''))
  }

  const onGetAnswers = () => {
    if (
      messagesEndRef.current.scrollTop <
      messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight - 100
    ) {
      setAutoScroll(false)
    } else {
      setAutoScroll(true)
    }

    if (messagesEndRef.current.scrollTop === 0 && currentGenMessagesPage !== wholeGenMessagesPages) {
      setCurrentPosition(messagesEndRef.current.scrollHeight)
      getGroupMessages(slug, currentGenMessagesPage + 1)
    }
  }

  useEffect(() => {
    if (currentPosition && !autoScroll) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - currentPosition
      setCurrentPosition(null)
    } else if (messagesEndRef.current && autoScroll) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight
    }
  }, [currentMessages])

  return (
    <section className={styles.groupContainer}>
      <div className={styles.groupHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={onClose} />
        {IS_GENERAL_CHAT ? (
          <>
            <img src={limcoreIcon} alt='Limcore' className={styles.foto} />
            <p className={styles.name}>Mining Data Centre Limcore</p>
            <p className={styles.status} onClick={handleParticipantsListOpen}>
              {`${participants.length} ${t('group_number')}`}
            </p>
          </>
        ) : (
          <>
            <img src={profileIcon} alt='Avatar' className={styles.foto} />
            <p className={styles.name}>TODO: name</p>
            <p className={styles.status} onClick={() => {}}>
              В сети
              {/* TODO */}
            </p>
          </>
        )}
      </div>
      <div className={styles.groupMessagesContainer} ref={messagesEndRef} onScroll={onGetAnswers}>
        {currentMessages.map((msg: IMessageInterface) => {
          const msgDate = getMonthNameWithDate(msg.created_at)
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
      {IS_GENERAL_CHAT && (
        <ParticipantsList
          openListClassname={openListClassname}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
        />
      )}
      <Textarea slug={slug} />
    </section>
  )
}
