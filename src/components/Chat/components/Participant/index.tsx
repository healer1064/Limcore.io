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
      <img src={avatar} alt='avatar' className={styles.foto} />
      {/* <p className={styles.name}>{name}</p> */}
      <p className={styles.name}>
        {member.user?.first_name || 'User'} {member.user?.last_name || ''}
      </p>
      <p className={member.user?.status === '1' || me ? styles.status_active : styles.status}>
        {member.user?.status === '1' || me ? 'В сети' : 'Не в сети'}
      </p>
      <span className={styles.me}>{me}</span>
      <span className={styles.line} />

      {isOpened && <ChatContent />}
    </div>
  )
}
