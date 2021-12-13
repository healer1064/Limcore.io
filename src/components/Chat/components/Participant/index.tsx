import React, { useState } from 'react'
import styles from './styles.module.scss'
import profileIcon from '@icons/profileicon.svg'
import { useAppSelector } from '@app/redux/hooks'
import { ChatContent } from '../ChatContent'
import { useDispatch } from 'react-redux'
import {
  setCurrentDialogueMember,
  setCurrentMessages,
  setCurrentPage,
  setCurrentSlug,
  setWholePages,
} from '@components/Chat/redux/chatSlice'
import { IMemberInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'

interface IParticipantProps {
  member: IMemberInterface
}

export const Participant = ({ member }: IParticipantProps) => {
  const { checkDialogueExistence } = useChat()
  const dispatch = useDispatch()

  const [isOpened, setIsOpened] = useState(false)
  const userId = useAppSelector((state) => state.user.userData?.id)

  const me = member.user.id === userId ? 'Вы' : ''
  const avatar = member.user.avatar ? member.user.avatar : profileIcon
  // const firstName = member.user?.first_name ? member.user.first_name : ''
  // const lastName = member.user?.last_name ? member.user.last_name : ''
  // const name = firstName + lastName === '' ? 'User' : `${firstName} ${lastName}`

  const onOpen = () => {
    if (!me) {
      dispatch(setCurrentPage(0))
      dispatch(setWholePages(0))
      dispatch(setCurrentMessages([]))

      dispatch(setCurrentDialogueMember(member.user))
      dispatch(setCurrentSlug(''))
      checkDialogueExistence(member.user.id)

      setIsOpened(true)
    }
  }

  return (
    <div className={styles.message} onClick={onOpen}>
      <img src={avatar} alt='' className={styles.foto} />
      {/* <p className={styles.name}>{name}</p> */}
      <p className={styles.name}>
        {member.user?.first_name || 'User'} {member.user?.last_name || ''}
      </p>
      {/* <p className={isMe ? styles.status_active : styles.status}>{isMe ? 'В сети' : 'Не в сети'}</p> */}
      {/* <p className={member.status === 'В сети' ? styles.status_active : styles.status}>{member.status}</p> */}
      {/* <p className={styles.rank}>{member.rank}</p> */}
      {/* <span className={member.rank !== '' ? styles.raiting_invisible : styles.raiting}>
        <img src={member.raitingIcon} alt='' className={styles.raitingIcon} onClick={handleRaitingListOpen} />
        <span className={styles.score}>{`${member.score} ТВ`}</span>
      </span> */}
      <span className={styles.me}>{me}</span>
      <span className={styles.line} />

      {isOpened && <ChatContent />}
    </div>
  )
}
