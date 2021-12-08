import React from 'react'
import styles from './styles.module.scss'
import active from '@icons/activeStatus.svg'
import { useAppDispatch } from '@app/redux/hooks'
import { setContent, setPersonsChatMessages } from '../../redux/chatSlice'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import limcoreIcon from '@icons/limcore.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'

interface IDialogueProps {
  data: IDialogueInterface
}

export const Dialogue = ({ data }: IDialogueProps) => {
  const dispatch = useAppDispatch()

  const isGeneralChat = data.slug === 'general_chat'

  const handleGeneralChatOpen = () => {
    dispatch(setContent('group'))
  }

  const handlePersonsChatOpen = () => {
    dispatch(setContent('persons'))
    dispatch(setPersonsChatMessages(data))
  }

  // TODO: внутри каждого диалога ведь уже свои данные, нужно просто по ним сделать запрос

  return (
    <div className={styles.messageContainer} onClick={isGeneralChat ? handleGeneralChatOpen : handlePersonsChatOpen}>
      <img src={limcoreIcon} alt='image' className={styles.foto} />
      {!isGeneralChat && <img alt='' src={active} className={styles.status} />}
      {/* <img alt='' src={active} className={data.status === 'В сети' ? styles.status : styles.status_invisible} /> */}
      <p className={styles.name}>{isGeneralChat ? data.name : data.other_user.email}</p>
      <p className={styles.message}>{data.last_message.message}</p>
      <data className={styles.date}>{getMonthAndDay(data.last_message.created_at)}</data>
      <div className={data.unread_count > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
        {data.unread_count}
      </div>
      <span className={styles.line} />
    </div>
  )
}
