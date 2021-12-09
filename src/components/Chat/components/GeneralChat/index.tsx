import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/GeneralChat/styles.module.scss'
import listStyles from '@components/Chat/components/ParticipantsList/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent, setGenChatMessages } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import { IMessageInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'

export const GeneralChat = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  const { getGroupMessages } = useChat()
  let dateBuffer: string = null

  const userId = useAppSelector((state) => state.user.userData?.id)
  const genChatMessages = useAppSelector((state) => state.chat.genChatMessages)
  const participants = useAppSelector((state) => state.chat.genChatMembers)
  const currentGenMessagesPage = useAppSelector((state) => state.chat.currentGenMessagesPage)
  const wholeGenMessagesPages = useAppSelector((state) => state.chat.wholeGenMessagesPages)

  const [openListClassname, setOpenListClassname] = useState(listStyles.list_invisible)
  const handleParticipantsListOpen = () => setOpenListClassname(listStyles.list)
  const handleParticipantsListClose = () => setOpenListClassname(listStyles.list_invisible)

  const onClose = () => {
    dispatch(setGenChatMessages([]))
    dispatch(setContent(''))
  }

  const onGetAnswers = () => {
    if (messagesEndRef.current.scrollTop === 0 && currentGenMessagesPage !== wholeGenMessagesPages) {
      getGroupMessages('general_chat', currentGenMessagesPage + 1)
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight
    }
  }, [genChatMessages])

  return (
    <section className={styles.groupContainer}>
      <div className={styles.groupHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={onClose} />
        <img src={limcoreIcon} alt='' className={styles.foto} />
        <p className={styles.name}>Общий чат</p>
        <p className={styles.status} onClick={handleParticipantsListOpen}>
          {`${participants.length} ${t('group_number')}`}
        </p>
      </div>
      <div className={styles.groupMessagesContainer} ref={messagesEndRef} onScroll={onGetAnswers}>
        {genChatMessages.map((msg: IMessageInterface) => {
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
        openListClassname={openListClassname}
        handleParticipantsListClose={handleParticipantsListClose}
        participants={participants}
      />
      <Textarea slug='general_chat' />
    </section>
  )
}
