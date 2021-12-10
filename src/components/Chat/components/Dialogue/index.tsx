import React from 'react'
import styles from './styles.module.scss'
// import active from '@icons/activeStatus.svg'
import { useAppDispatch } from '@app/redux/hooks'
import { setContent, setCurrentSlug } from '../../redux/chatSlice'
import { getMonthAndDay } from '@components/Chat/utils/funcs'
import limcoreIcon from '@icons/limcore.svg'
import profileIcon from '@icons/profileicon.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'

interface IDialogueProps {
  data: IDialogueInterface
}

export const Dialogue = ({ data }: IDialogueProps) => {
  const dispatch = useAppDispatch()
  const { getGroupMessages } = useChat()

  const IS_GENERAL_CHAT = data.slug === 'general_chat'

  const name = data.other_user?.first_name
    ? `${data.other_user.first_name} ${data.other_user.last_name}`
    : `User #${data.other_user?.id}`
  const title = IS_GENERAL_CHAT ? 'Mining Data Centre Limcore' : name

  const handleChatOpen = () => {
    dispatch(setCurrentSlug(data.slug))
    getGroupMessages(data.slug, 1)
    dispatch(setContent('content'))
  }

  return (
    <div className={styles.messageContainer} onClick={handleChatOpen}>
      <img src={IS_GENERAL_CHAT ? limcoreIcon : profileIcon} alt='image' className={styles.foto} />
      {/* {!IS_GENERAL_CHAT && <img alt='' src={active} className={styles.status} />} */}
      {/* <img alt='' src={active} className={data.status === 'В сети' ? styles.status : styles.status_invisible} /> */}
      <p className={styles.name}>{title}</p>
      <p className={styles.message}>{data.last_message?.message}</p>
      <data className={styles.date}>{data.last_message ? getMonthAndDay(data.last_message.created_at) : ''}</data>
      <div className={data.unread_count > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
        {data.unread_count}
      </div>
      <span className={styles.line} />
    </div>
  )
}
