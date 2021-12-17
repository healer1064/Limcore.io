import React from 'react'
import styles from './styles.module.scss'
// import profileIcon from '@icons/profileicon.svg'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { getHoursAndMinutes, getUserName } from '@components/Chat/utils/funcs'
import { IMessageInterface, IUserInterface } from '@components/Chat/utils/types'
import { LimcRating } from '../LimcRating'
import active from '@icons/activeStatus.svg'
import { useAppSelector } from '@app/redux/hooks'
import { File } from '../File'

interface IMessageComponent {
  user: IUserInterface
  message: IMessageInterface
  isMyMsg: boolean
  date: string
  firstMessage: boolean
  openRating: () => void
}

export const MessageComponent = ({ user, message, isMyMsg, date, firstMessage, openRating }: IMessageComponent) => {
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)

  const toShowRaiting = Boolean(user.limc_balance)

  return firstMessage ? (
    <>
      {date && <div className={styles.date}>{date}</div>}
      <div className={!date ? styles.member : `${styles.member} ${styles.firstMessageMember}`}>
        {isMyMsg ? (
          <div className={styles.myMessageCont}>
            {message.file.length !== 0 && <File file={message.file} />}
            <p className={styles.myMessage}>
              {message.message}
              <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
            </p>
          </div>
        ) : (
          <>
            <img src={user.avatar ? user.avatar : defaultAvatar} alt='' className={styles.foto} />
            {user.status === 1 && <img alt='' src={active} className={styles.status} />}

            <div className={styles.messageCont}>
              {message.file.length !== 0 && <File file={message.file} />}
              <p className={styles.message}>
                {currentSlug === 'general_chat' && (
                  <>
                    <span className={styles.member_name}>{isMyMsg ? '' : getUserName(user)}</span>
                    {toShowRaiting && <LimcRating openRating={openRating} limcBalance={user.limc_balance} />}
                  </>
                )}
                {message.message}
                <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  ) : (
    <>
      {date && <div className={styles.date}>{date}</div>}
      <div className={`${styles.member} ${styles.firstMessageMember}`}>
        {isMyMsg ? (
          <div className={styles.myMessageCont}>
            {message.file.length !== 0 && <File file={message.file} />}
            <p className={styles.myMessage}>
              {message.message}
              <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
            </p>
          </div>
        ) : (
          <>
            <div className={`${styles.messageCont} ${styles.firstMessage}`}>
              {message.file.length !== 0 && <File file={message.file} />}
              <p className={styles.message}>
                {message.message}
                <time className={styles.time}>{getHoursAndMinutes(message.created_at)}</time>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
