import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/funcs'
import { IMessageInterface, IUserInterface } from '@components/Chat/utils/types'
import red from '@icons/redRaiting.svg'
import { useAppSelector } from '@app/redux/hooks'

interface IMessageComponent {
  user: IUserInterface
  message: IMessageInterface
  isMyMsg: boolean
  date: string
  openRating: () => void
}

export const MessageComponent = ({ user, message, isMyMsg, date, openRating }: IMessageComponent) => {
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
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

            {currentSlug === 'general_chat' && (
              <span className={styles.raiting} onClick={openRating}>
                <img src={red} alt='Rating' className={styles.raitingIcon} />
                <span>20 ТВ</span>
              </span>
            )}

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
