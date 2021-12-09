import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/chat'
import { IMessageInterface } from '@components/Chat/utils/types'

interface IGroupText {
  user: any // TODO types
  message: IMessageInterface
  isMyMsg: boolean
  date: string
}

export const MessageComponent = ({ user, message, isMyMsg, date }: IGroupText) => {
  return (
    <>
      <div className={styles.date}>{date}</div>
      <div className={styles.member}>
        {isMyMsg ? (
          <p className={styles.myMessage}>
            {message.message}
            <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
          </p>
        ) : (
          <>
            <img src={user.avatar ? user.avatar : profileIcon} alt='' className={styles.foto} />
            {/* <span className={styles.raiting}>
              <img src={member.raitingIcon} alt='' className={styles.raitingIcon} />
              <span>{`${member.score} ТВ`}</span>
            </span> */}
            <p className={styles.message}>
              {message.message}
              <span className={styles.time}>{getHoursAndMinutes(message.created_at)}</span>
            </p>
          </>
        )}
      </div>
    </>
  )
}
