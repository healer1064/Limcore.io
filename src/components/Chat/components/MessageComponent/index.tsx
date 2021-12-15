import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/funcs'
import { IMessageInterface } from '@components/Chat/utils/types'
import red from '@icons/redRaiting.svg'
import active from '@icons/activeStatus.svg'
import { useAppSelector } from '@app/redux/hooks'
import { File } from '../File'

interface IMessageComponent {
  userId: number
  message: IMessageInterface
  isMyMsg: boolean
  date: string
  openRating: () => void
}

export const MessageComponent = ({ userId, message, isMyMsg, date, openRating }: IMessageComponent) => {
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const currentUser = useAppSelector((state) => state.chat.genChatMembers).find(
    (member) => member.user.id === userId,
  ).user
  const userName =
    currentUser.first_name && currentUser.last_name
      ? `${currentUser.first_name} ${currentUser.last_name}`
      : `User #${currentUser.id}`
  return (
    <>
      {date && <div className={styles.date}>{date}</div>}
      <div className={styles.member}>
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
            <img src={currentUser.avatar ? currentUser.avatar : profileIcon} alt='' className={styles.foto} />
            {currentUser.status === 1 && <img alt='' src={active} className={styles.status} />}
            {currentSlug === 'general_chat' && (
              <span className={styles.raiting} onClick={openRating}>
                <img src={red} alt='Rating' className={styles.raitingIcon} />
                <span>20 ТВ</span>
              </span>
            )}

            <div className={styles.messageCont}>
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
