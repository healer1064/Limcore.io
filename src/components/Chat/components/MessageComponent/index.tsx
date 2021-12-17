import React from 'react'
import styles from './styles.module.scss'
// import profileIcon from '@icons/profileicon.svg'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { getHoursAndMinutes, getUserName } from '@components/Chat/utils/funcs'
import { IMessageInterface } from '@components/Chat/utils/types'
import { LimcRating } from '../LimcRating'
import active from '@icons/activeStatus.svg'
import { useAppSelector } from '@app/redux/hooks'
import { File } from '../File'

interface IMessageComponent {
  userId: number
  message: IMessageInterface
  isMyMsg: boolean
  date: string
  firstMessage: boolean
  openRating: () => void
}

export const MessageComponent = ({ userId, message, isMyMsg, date, firstMessage, openRating }: IMessageComponent) => {
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const currentUser = useAppSelector((state) => state.chat.genChatMembers).find(
    (member) => member.user.id === userId,
  ).user

  const toShowRaiting = Boolean(currentUser.limc_balance)

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
            <img src={currentUser.avatar ? currentUser.avatar : defaultAvatar} alt='' className={styles.foto} />
            {currentUser.status === 1 && <img alt='' src={active} className={styles.status} />}

            <div className={styles.messageCont}>
              {message.file.length !== 0 && <File file={message.file} />}
              <p className={styles.message}>
                {currentSlug === 'general_chat' && (
                  <>
                    <span className={styles.member_name}>{isMyMsg ? '' : getUserName(currentUser)}</span>
                    {toShowRaiting && <LimcRating openRating={openRating} limcBalance={currentUser.limc_balance} />}
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
