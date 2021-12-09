import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/chat'
import { IMessageInterface, IUserInterface } from '@components/Chat/utils/types'

interface IGroupText {
  user: IUserInterface
  message: IMessageInterface
  isMyMsg: boolean
  date: string
}

export const MessageComponent = ({ user, message, isMyMsg, date }: IGroupText) => {
  const userName = user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : `User #${user.id}`

  return (
    <>
      <div className={styles.date}>{date}</div>
      <div className={styles.member}>
        <span className={styles.member_name}>{isMyMsg ? '' : userName}</span>
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
