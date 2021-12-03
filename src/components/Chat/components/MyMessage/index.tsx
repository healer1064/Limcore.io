import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'

interface IGroupText {
  member: any // TODO
  message: string
  time: string
}

export const MyMessage = ({ member, message, time = '12:00' }: IGroupText) => {
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
        {message}
        <span className={styles.time}>{time}</span>
      </p>
    </div>
  )
}
