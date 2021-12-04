import React from 'react'
import styles from './styles.module.scss'
// import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/chat'

interface IGroupText {
  user: any // TODO
  message: any // TODO
  isMyMsg: boolean
}

export const MessageComponent = ({ user, message, isMyMsg }: IGroupText) => {
  // if (!user.avatar) {
  //   user.avatar = profileIcon
  // }

  return (
    <div className={styles.member}>
      {isMyMsg ? (
        <p className={styles.myMessage}>
          {message.message}
          <span className={styles.time}>{getHoursAndMinutes(message.created_at)}</span>
        </p>
      ) : (
        <>
          <img src={user.avatar} alt='' className={styles.foto} />
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
  )
}
