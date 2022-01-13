import React from 'react'
import styles from '../styles.module.scss'
import { getHoursAndMinutes } from '@components/Chat/utils/funcs'
import { IMessageInterface } from '@components/Chat/utils/types'
import { File } from '../../File'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { setCurrentClickedMessage, setCurrentClickedUser } from '@components/Chat/redux/chatSlice'

interface IMessage {
  message: IMessageInterface
  children?: React.ReactNode
  notFirstMessage?: boolean
  isMyMsg?: boolean
  openMenu: (event: React.SyntheticEvent) => void
}

export const Message = ({ message, children, notFirstMessage, isMyMsg, openMenu }: IMessage) => {
  const dispatch = useDispatch()
  const containerClass = notFirstMessage ? classNames(styles.messageCont, styles.firstMessage) : styles.messageCont

  const onMessageClick = (event: React.SyntheticEvent) => {
    dispatch(setCurrentClickedMessage(message.id))
    dispatch(setCurrentClickedUser(message.user.id))
    openMenu(event)
  }

  return (
    <div className={isMyMsg ? styles.myMessageCont : containerClass} onClick={onMessageClick}>
      <p className={isMyMsg ? styles.myMessage : styles.message}>
        {children}
        {message.message}
        <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
      </p>
      {message.file.length !== 0 && <File file={message.file} />}
    </div>
  )
}
