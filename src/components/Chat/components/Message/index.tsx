import React from 'react'
import styles from './styles.module.scss'
import { Support } from '@components/Chat/components/Support'
import { Group } from '@components/Chat/components/Group'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSupportVisible, setIsGroupVisible } from '../../../Chat/redux/chatSlice'

export const Message = ({ message, participants }) => {
  const dispatch = useAppDispatch()
  const groupVisible = useAppSelector((state) => state.chat.isGroupVisible)
  const supportVisible = useAppSelector((state) => state.chat.isSupportVisible)

  const handleSupportOpen = () => {
    dispatch(setIsSupportVisible(true))
  }

  const handleSupportClose = () => {
    dispatch(setIsSupportVisible(false))
  }

  const handleGroupOpen = () => {
    dispatch(setIsGroupVisible(true))
  }

  const handleGroupClose = () => {
    dispatch(setIsGroupVisible(false))
  }

  return (
    <>
      <div className={styles.messageContainer} onClick={!message.group ? handleSupportOpen : handleGroupOpen}>
        <img src={message.image} alt='image' className={styles.foto} />
        <img alt='' src={active} className={message.status === 'В сети' ? styles.status : styles.status_invisible} />
        <p className={styles.name}>{message.name}</p>
        <p className={styles.message}>{message.message}</p>
        <data className={styles.date}>{message.date}</data>
        <div className={message.unreadMessages > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
          {message.unreadMessages}
        </div>
        <span className={styles.line} />
      </div>
      <div>
        {message.group ? (
          <Group
            groupVisible={groupVisible}
            message={message}
            handleGroupClose={handleGroupClose}
            participants={participants}
          />
        ) : (
          <Support supportVisible={supportVisible} message={message} handleSupportClose={handleSupportClose} />
        )}
      </div>
    </>
  )
}
