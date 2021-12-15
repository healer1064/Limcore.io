import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/ChatContent/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '../../../../components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent, setCurrentDialogueMember, setCurrentMessages, setCurrentSlug } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthNameWithDate } from '@components/Chat/utils/funcs'
import { IDialogueInterface, IMessageInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'
import profileIcon from '@icons/profileicon.svg'
import { RaitingList } from '../RaitingList'
import raitingStyles from '../RaitingList/styles.module.scss'

export const ChatContent = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  const { getGroupMessages, sendLastReadedMessage, getGroupsList } = useChat()

  const slug = useAppSelector((state) => state.chat.currentSlug)
  const userId = useAppSelector((state) => state.user.userData?.id)
  const currentMessages = useAppSelector((state) => state.chat.currentMessages)

  const participants = useAppSelector((state) => state.chat.genChatMembers)
  const currentPage = useAppSelector((state) => state.chat.currentPage)
  const wholePages = useAppSelector((state) => state.chat.wholePages)
  const dialogues = useAppSelector((state) => state.chat.dialogues)
  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)

  let dateBuffer: string = null
  const IS_GENERAL_CHAT = slug === 'general_chat'

  // Открытие списка участников общего чата
  const [isListOpened, setIsListOpened] = useState(false)
  const openList = () => setIsListOpened(true)
  const closeList = () => setIsListOpened(false)

  // Открытие рейтинга по лимкам
  const [raitingClassName, setRaitingClassName] = useState(raitingStyles.raitingList_invisible)
  const openRating = () => setRaitingClassName(raitingStyles.raitingList)
  const closeRating = () => setRaitingClassName(raitingStyles.raitingList_invisible)

  // Закрыть чат
  const onClose = () => {
    dispatch(setCurrentDialogueMember({}))
    dispatch(setCurrentMessages([]))
    dispatch(setContent(''))
    dispatch(setCurrentSlug(''))
    getGroupsList(1) // TODO - если групп будет больше 50 будет пагинация
  }

  // Подгрузка сообщений по скроллу
  const [currentPosition, setCurrentPosition] = useState(null)
  const [autoScroll, setAutoScroll] = useState(true)
  const currentDialogue = dialogues.find((dialogue: IDialogueInterface) => dialogue.slug === slug)

  const onGetAnswers = () => {
    if (
      messagesEndRef.current.scrollTop <
      messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight - 100
    ) {
      setAutoScroll(false)
    } else {
      setAutoScroll(true)
    }

    if (messagesEndRef.current.scrollTop === 0 && currentPage !== wholePages) {
      setCurrentPosition(messagesEndRef.current.scrollHeight)
      getGroupMessages(slug, currentPage + 1)
    }
  }

  useEffect(() => {
    // Если чат 1 на 1, то вписываю в стейт инфу о собеседнике
    if (!IS_GENERAL_CHAT && currentDialogue) {
      dispatch(setCurrentDialogueMember(currentDialogue.other_user))
    }
  }, [])

  // Логика скролла
  useEffect(() => {
    if (currentMessages.length) {
      if (currentPosition && !autoScroll) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - currentPosition
        setCurrentPosition(null)
      } else if (messagesEndRef.current && autoScroll) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight
        if (currentMessages[currentMessages.length - 1]?.id) {
          sendLastReadedMessage(currentMessages[currentMessages.length - 1].id, slug)
        }
      }
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
            <p className={styles.status} onClick={openList}>
              {`${participants.length} ${t('group_number')}`}
            </p>
          </>
        ) : (
          <>
            <img src={currentDialogueMember.avatar || profileIcon} alt='Avatar' className={styles.foto} />
            <p className={styles.name}>
              {currentDialogueMember.first_name || 'User'} {currentDialogueMember.last_name || ''}
            </p>
            <p className={styles.status}>{currentDialogueMember.status === '1' ? 'В сети' : 'Не в сети'} </p>
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
              userId={msg.user.id}
              isMyMsg={userId === msg.user.id}
              date={buffer}
              openRating={openRating}
            />
          )
        })}
      </div>
      {IS_GENERAL_CHAT && (
        <>
          <ParticipantsList isActive={isListOpened} onClose={closeList} participants={participants} />
          <RaitingList handleRaitingListClose={closeRating} raitingClassName={raitingClassName} />
        </>
      )}
      <Textarea />
    </section>
  )
}
