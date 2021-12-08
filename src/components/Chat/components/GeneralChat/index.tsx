import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/GeneralChat/styles.module.scss'
import listStyles from '@components/Chat/components/ParticipantsList/styles.module.scss'
import { MessageComponent } from '../MessageComponent'
import { ParticipantsList } from '../ParticipantsList'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent } from '../../redux/chatSlice'
import limcoreIcon from '@icons/limcore.svg'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import { useChat } from '@components/Chat/utils/useChat'
import { IDialogueInterface, IMessageInterface } from '@components/Chat/utils/types'
// import useWindowSize from '@helpers/useWindowSizeHook'

interface IDialogueContent {
  data: IDialogueInterface
}

export const GeneralChat = ({ data }: IDialogueContent) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const messagesEndRef = useRef(null)
  const { getGroupMessages } = useChat()
  // const { height } = useWindowSize()
  let dateBuffer: string = null

  const userId = useAppSelector((state) => state.user.userData?.id)
  const genChatMessages = useAppSelector((state) => state.chat.genChatMessages)
  const [openListClassname, setOpenListClassname] = useState(listStyles.list_invisible)
  const [participants, setParticipants] = useState([])

  const handleParticipantsListOpen = () => setOpenListClassname(listStyles.list)
  const handleParticipantsListClose = () => setOpenListClassname(listStyles.list_invisible)

  useEffect(() => {
    setParticipants(data.members)
    getGroupMessages(data.slug, 1)
  }, [])

  // Скролл блока с сообщениями вниз
  useEffect(() => {
    if (genChatMessages?.length !== 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight - messagesEndRef.current.clientHeight
      // messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }, [genChatMessages])

  return (
    <section className={styles.groupContainer}>
      <div className={styles.groupHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={() => dispatch(setContent(''))} />
        <img src={limcoreIcon} alt='' className={styles.foto} />
        <p className={styles.name}>Общий чат</p>
        <p className={styles.status} onClick={handleParticipantsListOpen}>
          {/* {`${data.members.length} ${t('group_number')}`} */}
          {`${data.members.length} ${t('group_number')}`}
        </p>
      </div>
      <div className={styles.groupMessagesContainer} ref={messagesEndRef}>
        {genChatMessages?.length !== 0 &&
          genChatMessages.map((msg: IMessageInterface) => {
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
      <Textarea slug={data.slug} />
    </section>
  )
}
