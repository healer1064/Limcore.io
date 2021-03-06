import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/ChatContent/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '../../../../components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import {
  setContent,
  setCurrentClickedMessage,
  setCurrentClickedUser,
  setCurrentDialogueMember,
  setCurrentMessages,
  setCurrentPage,
  setCurrentSlug,
  setWholePages,
} from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthNameWithDate, getUserName } from '@components/Chat/utils/funcs'
import { IDialogueInterface, IMessageInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { RaitingList } from '../RaitingList'
import raitingStyles from '../RaitingList/styles.module.scss'
import { Spinner } from '@components/Spinner'
import { Controllers } from '../Controllers/index'
import supportImage from '@images/support.png'

export const ChatContent = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  const { getGroupMessages, sendLastReadedMessage } = useChat()

  const slug = useAppSelector((state) => state.chat.currentSlug)
  const userId = useAppSelector((state) => state.user.userData?.id)
  const currentMessages = useAppSelector((state) => state.chat.currentMessages)

  const participants = useAppSelector((state) => state.chat.genChatMembers)
  const currentPage = useAppSelector((state) => state.chat.currentPage)
  const wholePages = useAppSelector((state) => state.chat.wholePages)
  const dialogues = useAppSelector((state) => state.chat.dialogues)
  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)
  const loader = useAppSelector((state) => state.chat.loader)

  let dateBuffer: string = null
  let idBuffer: number
  let firstMessage: boolean
  const IS_GENERAL_CHAT = slug === 'general_chat'
  const IS_SUPPORT = slug.includes('support')

  // ??????????????????
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
    setAnchorEl(null)
    dispatch(setCurrentClickedMessage(null))
    setTimeout(() => {
      dispatch(setCurrentClickedUser(null))
    }, 300)
  }

  const openMenu = (event: React.SyntheticEvent) => {
    setOpen(true)
    setAnchorEl(event.currentTarget)
  }

  // ???????????????? ???????????? ???????????????????? ???????????? ????????
  const [isListOpened, setIsListOpened] = useState(false)
  const openList = () => setIsListOpened(true)
  const closeList = () => setIsListOpened(false)

  // ???????????????? ???????????????? ???? ????????????
  const [raitingClassName, setRaitingClassName] = useState(raitingStyles.raitingList_invisible)
  const closeRating = () => setRaitingClassName(raitingStyles.raitingList_invisible)
  const openRating = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    setRaitingClassName(raitingStyles.raitingList)
  }

  // ?????????????? ????????????
  const onCloseDialogue = () => {
    dispatch(setCurrentSlug(''))
    dispatch(setCurrentMessages([]))
    dispatch(setCurrentDialogueMember({}))
    dispatch(setContent(''))
    dispatch(setCurrentPage(0))
    dispatch(setWholePages(0))
  }

  // ?????????????????? ?????????????????? ???? ??????????????
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
    // ???????? ?????? 1 ???? 1, ???? ???????????????? ?? ?????????? ???????? ?? ??????????????????????
    if (!IS_GENERAL_CHAT && currentDialogue) {
      dispatch(setCurrentDialogueMember(currentDialogue.other_user))
    }
  }, [currentDialogue?.other_user])

  // ???????????? ??????????????
  useEffect(() => {
    if (currentMessages.length) {
      if (currentPosition && !autoScroll) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - currentPosition
        setCurrentPosition(null)
      } else if (messagesEndRef.current && autoScroll) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight
        const currentMessagesIds = []
        currentMessagesIds.push(currentMessages[currentMessages.length - 1].id)
        if (currentMessages[currentMessages.length - 1]?.id) {
          sendLastReadedMessage(currentMessagesIds, slug)
        }
      }
    }
  }, [currentMessages])

  return (
    <section className={styles.groupContainer}>
      <div className={styles.groupHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={onCloseDialogue} />
        {IS_GENERAL_CHAT && (
          <>
            <img src={limcoreIcon} alt='Limcore' className={styles.foto} />
            <p className={styles.name}>Mining Data Centre Limcore</p>
            <p className={styles.status} onClick={openList}>
              {`${participants.length} ${t('group_number')}`}
            </p>
          </>
        )}
        {IS_SUPPORT && (
          <>
            <img src={supportImage} alt='Limcore' className={styles.foto} />
            <p className={styles.name}>??????????????????</p>
          </>
        )}
        {!IS_SUPPORT && !IS_GENERAL_CHAT && (
          <>
            <img src={currentDialogueMember.avatar || defaultAvatar} alt='Avatar' className={styles.foto} />
            <p className={styles.name}>{getUserName(currentDialogueMember)}</p>
            <p className={styles.status}>{currentDialogueMember.status === 1 ? '?? ????????' : '???? ?? ????????'} </p>
          </>
        )}
      </div>
      <div className={styles.groupMessagesContainer} ref={messagesEndRef} onScroll={onGetAnswers}>
        {loader && (
          <div className={styles.loaderContainer}>
            <Spinner />
          </div>
        )}
        {/* {!loader && currentMessages.length === 0 && (
          <div className={styles.dialogueEmpty}>
            <p className={styles.dialogueEmptyNoMsgs}>?????????????????? ???????? ??????...</p>
            <p className={styles.dialogueEmptyStart}>?????????????? ??????????????!</p>
          </div>
        )} */}
        {!loader && IS_SUPPORT && currentMessages.length === 0 && (
          <div className={styles.dialogueEmpty}>
            <p className={styles.dialogueEmptyNoMsgs}>????????????!</p>
            <p className={styles.dialogueEmptyStart}>???????????? ???? ?????????? ????????????!</p>
          </div>
        )}
        {currentMessages.map((msg: IMessageInterface) => {
          if (msg.files.length === 0 && (!msg.message || msg.message === '')) {
            return
          }

          const msgDate = getMonthNameWithDate(msg.created_at)
          let buffer = dateBuffer

          if (dateBuffer !== msgDate) {
            dateBuffer = msgDate
            buffer = msgDate
          } else {
            buffer = ''
          }

          if (idBuffer !== msg.user.id || buffer) {
            idBuffer = msg.user.id
            firstMessage = true
          } else {
            firstMessage = false
          }

          return (
            <MessageComponent
              key={msg.id}
              message={msg}
              user={msg.user}
              isMyMsg={userId === msg.user.id}
              date={buffer}
              firstMessage={firstMessage}
              openRating={openRating}
              openMenu={openMenu}
            />
          )
        })}
      </div>
      {IS_GENERAL_CHAT && (
        <>
          {isListOpened && <ParticipantsList onClose={closeList} participants={participants} />}
          <RaitingList handleRaitingListClose={closeRating} raitingClassName={raitingClassName} />
        </>
      )}
      <Controllers anchorEl={anchorEl} open={open} onClose={closeMenu} />
      <Textarea />
    </section>
  )
}
