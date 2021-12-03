import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { getHoursAndMinutes } from '@components/Chat/utils/chat'

interface IGroupText {
  member: any // TODO
  message: any // TODO
}

export const GroupText = ({ member, message }: IGroupText) => {
  if (!member.foto) {
    member.foto = profileIcon
  }

  return (
    <div className={styles.member}>
      <img src={member.foto} alt='' className={styles.foto} />
      {/* <span className={styles.raiting}>
        <img src={member.raitingIcon} alt='' className={styles.raitingIcon} />
        <span>{`${member.score} ТВ`}</span>
      </span> */}
      <p className={styles.message}>
        {message.message}
        <span className={styles.time}>{getHoursAndMinutes(message.created_at)}</span>
      </p>
    </div>
  )
}
