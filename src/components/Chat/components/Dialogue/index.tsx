import React from 'react'
import styles from './styles.module.scss'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent, setCurrentSlug } from '../../redux/chatSlice'
import { getMonthAndDay, getUserName } from '@components/Chat/utils/funcs'
import limcoreIcon from '@icons/limcore.svg'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'

interface IDialogueProps {
  data: IDialogueInterface
}

export const Dialogue = ({ data }: IDialogueProps) => {
  const dispatch = useAppDispatch()
  const { getGroupMessages, getMembersGroup, messageReadAllBeforeCurrent } = useChat()

  const IS_GENERAL_CHAT = data.slug === 'general_chat'
  const title = IS_GENERAL_CHAT ? 'Mining Data Centre Limcore' : getUserName(data.other_user)
  const currentPage = useAppSelector((state) => state.chat.currentPage)

  const handleChatOpen = () => {
    dispatch(setCurrentSlug(data.slug))
    dispatch(setContent('content'))
    getGroupMessages(data.slug, currentPage)
    getMembersGroup(data.slug)
    messageReadAllBeforeCurrent(data.last_message.id)
  }

  return (
    <div className={styles.messageContainer} onClick={handleChatOpen}>
      <img
        src={IS_GENERAL_CHAT ? limcoreIcon : data.other_user.avatar || defaultAvatar}
        alt='image'
        className={styles.foto}
      />
      {!IS_GENERAL_CHAT && data.other_user.status === 1 && <img alt='' src={active} className={styles.status} />}
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
