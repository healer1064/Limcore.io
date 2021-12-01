import React from 'react'
import styles from './styles.module.scss'
import { Support } from '@components/Chat/components/Support'
import { Group } from '@components/Chat/components/Group'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible } from '../../../Chat/redux/chatSlice'

export const Message = ({ message, participants }) => {
  const dispatch = useAppDispatch()
  const contentVisible = useAppSelector((state) => state.chat.isContentVisible)

  const handleSupportOpen = () => {
    dispatch(setIsContentVisible('support'))
  }

  const handleSupportClose = () => {
    dispatch(setIsContentVisible(''))
  }

  const handleGroupOpen = () => {
    dispatch(setIsContentVisible('group'))
  }

  const handleGroupClose = () => {
    dispatch(setIsContentVisible(''))
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
            contentVisible={contentVisible}
            message={message}
            handleGroupClose={handleGroupClose}
            participants={participants}
          />
        ) : (
          <Support contentVisible={contentVisible} message={message} handleSupportClose={handleSupportClose} />
        )}
      </div>
    </>
  )
}
