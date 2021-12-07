import React from 'react'
import styles from './styles.module.scss'
import { GeneralChat } from '@components/Chat/components/GeneralChat'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible } from '../../redux/chatSlice'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import limcoreIcon from '@icons/limcore.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'
import { PersonsChat } from '../PersonsChat'

interface IDialogueProps {
  data: IDialogueInterface
}

export const Dialogue = ({ data }: IDialogueProps) => {
  const dispatch = useAppDispatch()
  const contentVisible = useAppSelector((state) => state.chat.isContentVisible)

  const isGeneralChat = data.slug === 'general_chat'
  console.log(isGeneralChat)

  const handleGeneralChatOpen = () => {
    dispatch(setIsContentVisible('group'))
  }

  const handlePersonsChatOpen = () => {
    dispatch(setIsContentVisible('persons'))
  }

  return (
    <>
      <div className={styles.messageContainer} onClick={isGeneralChat ? handleGeneralChatOpen : handlePersonsChatOpen}>
        <img src={limcoreIcon} alt='image' className={styles.foto} />
        {!isGeneralChat && <img alt='' src={active} className={styles.status} />}
        {/* <img alt='' src={active} className={data.status === 'В сети' ? styles.status : styles.status_invisible} /> */}
        <p className={styles.name}>{data.name}</p>
        <p className={styles.message}>{data.last_message.message}</p>
        <data className={styles.date}>{getMonthAndDay(data.last_message.created_at)}</data>
        <div className={data.unread_count > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
          {data.unread_count}
        </div>
        <span className={styles.line} />
      </div>
      <div>
        {isGeneralChat ? (
          <GeneralChat contentVisible={contentVisible === 'group'} data={data} />
        ) : (
          <PersonsChat contentVisible={contentVisible === 'persons'} data={data} />
        )}
      </div>
    </>
  )
}
