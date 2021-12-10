import React from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { useAppSelector } from '@app/redux/hooks'

export const Participant = ({ member }) => {
  const userId = useAppSelector((state) => state.user.userData?.id)
  // let me: string = null
  const me = member.user.id === userId ? 'Вы' : ''

  const name = member.user.first_name ? `${member.user.first_name} ${member.user.last_name}` : 'Пользователь'
  const avatar = member.user.avatar ? member.user.avatar : profileIcon
  // const isMe = member.user.id === userId ? (me = 'Вы') : (me = '')

  return (
    <div className={styles.message}>
      <img src={avatar} alt='' className={styles.foto} />
      <p className={styles.name}>{name}</p>
      {/* temp */}
      {/* <p className={isMe ? styles.status_active : styles.status}>{isMe ? 'В сети' : 'Не в сети'}</p> */}
      {/* <p className={member.status === 'В сети' ? styles.status_active : styles.status}>{member.status}</p> */}
      {/* <p className={styles.rank}>{member.rank}</p> */}
      {/* <span className={member.rank !== '' ? styles.raiting_invisible : styles.raiting}>
        <img src={member.raitingIcon} alt='' className={styles.raitingIcon} onClick={handleRaitingListOpen} />
        <span className={styles.score}>{`${member.score} ТВ`}</span>
      </span> */}
      <span className={styles.me}>{me}</span>
      <span className={styles.line} />
    </div>
  )
}
