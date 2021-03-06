import React from 'react'
import styles from './styles.module.scss'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setContent, setCurrentSlug } from '../../redux/chatSlice'
import { getMonthAndDay, getUserName } from '@components/Chat/utils/funcs'
import limcoreIcon from '@icons/limcore.svg'
import supportImage from '@images/support.png'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'

interface IDialogueProps {
  data: IDialogueInterface
}

export const Dialogue = ({ data }: IDialogueProps) => {
  const dispatch = useAppDispatch()
  const { getGroupMessages, getMembersGroup, messageReadAllBeforeCurrent } = useChat()
  const currentPage = useAppSelector((state) => state.chat.currentPage)

  const IS_GENERAL_CHAT = data.slug === 'general_chat'
  const IS_SUPPORT = data.slug.includes('support')

  const supportTitle = 'Поддержка'
  let supportLastMsg = data.last_message
    ? data.last_message.message
    : 'Привет, здесь вы можете задать интересующий вас вопрос'

  supportLastMsg = data.last_message && data.last_message?.files?.length !== 0 ? '*файл*' : supportLastMsg

  const notSupportTitle = !IS_SUPPORT && (IS_GENERAL_CHAT ? 'Mining Data Centre Limcore' : getUserName(data.other_user))
  const notSupportAvatar = !IS_SUPPORT && (IS_GENERAL_CHAT ? limcoreIcon : data.other_user.avatar || defaultAvatar)
  const notSupportMsg = !IS_SUPPORT && (data.last_message?.message ? data.last_message.message : '*файл*')

  const avatar = IS_SUPPORT ? supportImage : notSupportAvatar
  const title = IS_SUPPORT ? supportTitle : notSupportTitle
  const msgText = IS_SUPPORT ? supportLastMsg : notSupportMsg

  const handleChatOpen = () => {
    getGroupMessages(data.slug, currentPage)
    dispatch(setCurrentSlug(data.slug))
    dispatch(setContent('content'))
    getMembersGroup(data.slug)
    messageReadAllBeforeCurrent(data.last_message?.id)
  }

  return (
    <div className={styles.messageContainer} onClick={handleChatOpen}>
      <img src={avatar} alt='image' className={styles.foto} />
      {!IS_GENERAL_CHAT && !IS_SUPPORT && data.other_user.status === 1 && (
        <img alt='' src={active} className={styles.status} />
      )}
      <p className={styles.name}>{title}</p>
      <p className={styles.message}>{msgText}</p>
      <data className={styles.date}>{data.last_message ? getMonthAndDay(data.last_message.created_at) : ''}</data>
      <div className={data.unread_count > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
        {data.unread_count}
      </div>
      <span className={styles.line} />
    </div>
  )
}
