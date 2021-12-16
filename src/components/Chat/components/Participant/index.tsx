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
// import red from '@icons/redRaiting.svg'
import { getUserName } from '@components/Chat/utils/funcs'

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
  // const showRaiting = Boolean(member.user.limc_balance)

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
      <p className={styles.name}>{getUserName(member.user)}</p>
      {member.user?.status === 1 || me ? (
        <p className={styles.status_active}>В сети</p>
      ) : (
        <p className={styles.status}>Не в сети</p>
      )}
      {/* <span className={showRaiting ? styles.raiting_invisible : styles.raiting}>
        <img src={red} alt='' className={styles.raitingIcon} onClick={handleRaitingListOpen} />
        <img src={red} alt='' className={styles.raitingIcon} />
        <span className={styles.score}>{`${member.user.limc_balance}  ТВ`}</span>
      </span> */}
      <span className={styles.me}>{me}</span>
      <span className={styles.line} />

      {isOpened && <ChatContent />}
    </div>
  )
}
