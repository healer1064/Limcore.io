import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import { Support } from '@components/Chat/components/Support'
import { Group } from '@components/Chat/components/Group'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsSupportVisible, setIsGroupVisible } from '../../../Chat/redux/chatSlice'

export const Message = ({ message, participants }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  // const [supportVisible, setSupportVisible] = useState(false)
  // const [groupVisible, setGroupVisible] = useState(false)

  const groupVisible = useAppSelector((state) => state.chat.isGroupVisible)
  const supportVisible = useAppSelector((state) => state.chat.isSupportVisible)

  const handleSupportOpen = () => {
    // setSupportVisible(true)
    dispatch(setIsSupportVisible(true))
  }

  const handleSupportClose = () => {
    // setSupportVisible(false)
    dispatch(setIsSupportVisible(false))
  }

  const handleGroupOpen = (evt) => {
    // setGroupVisible(true)
    dispatch(setIsGroupVisible(true))
  }

  const handleGroupClose = () => {
    // setGroupVisible(false)
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
    </>
  )
}
