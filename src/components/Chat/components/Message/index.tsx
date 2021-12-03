import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
// import { Support } from '@components/Chat/components/Support'
import { Group } from '@components/Chat/components/Group'
import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible } from '../../../Chat/redux/chatSlice'
import { IGroupInterface } from '@components/Chat/utils/types'
import { getGroupMessages } from '@components/Chat/utils/chat'
import { socket } from '../../index'

interface IMessageProps {
  message: IGroupInterface
  participants: any // TODO
}

export const Message = ({ message, participants }: IMessageProps) => {
  const dispatch = useAppDispatch()
  const contentVisible = useAppSelector((state) => state.chat.isContentVisible)
  const [msgs, setMsgs] = useState([])

  // const handleSupportOpen = () => {
  //   dispatch(setIsContentVisible('support'))
  // }

  // const handleSupportClose = () => {
  //   dispatch(setIsContentVisible(''))
  //   getGroupMessages(message.slug, 1)
  // }

  const handleGroupOpen = () => {
    dispatch(setIsContentVisible('group'))
    getGroupMessages(message.slug, 1)
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    setMsgs(data.result)
  }

  const handleGroupClose = () => {
    dispatch(setIsContentVisible(''))
  }

  useEffect(() => {
    console.log('msgs', msgs)
  }, [msgs])

  return (
    <>
      {/* <div className={styles.messageContainer} onClick={message.group ? handleGroupOpen : handleSupportOpen}> */}
      <div className={styles.messageContainer} onClick={handleGroupOpen}>
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
        <Group
          msgs={msgs}
          contentVisible={contentVisible}
          message={message}
          handleGroupClose={handleGroupClose}
          participants={participants}
        />
        {/* {message.group ? (
          <Group
            contentVisible={contentVisible}
            message={message}
            handleGroupClose={handleGroupClose}
            participants={participants}
          />
        ) : (
          <Support contentVisible={contentVisible} message={message} handleSupportClose={handleSupportClose} />
        )} */}
      </div>
    </>
  )
}
