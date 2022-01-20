import React, { useState } from 'react'
import styles from './styles.module.scss'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { useAppSelector } from '@app/redux/hooks'
import { ChatContent } from '../ChatContent'
import { useDispatch } from 'react-redux'
import {
  setCurrentClickedUser,
  setCurrentDialogueMember,
  setCurrentMessages,
  setCurrentPage,
  setCurrentSlug,
  setWholePages,
} from '@components/Chat/redux/chatSlice'
import { IMemberInterface } from '@components/Chat/utils/types'
import { useChat } from '@components/Chat/utils/useChat'
import { getUserName } from '@components/Chat/utils/funcs'
import { LimcRating } from '@components/Chat/components/LimcRating'
import blockIcon from '@icons/block.svg'

interface IParticipantProps {
  member: IMemberInterface
  openUnblockModal: () => void
  isAdmin: boolean
}

export const Participant = ({ member, openUnblockModal, isAdmin }: IParticipantProps) => {
  const { checkDialogueExistence } = useChat()
  const dispatch = useDispatch()

  const [isOpened, setIsOpened] = useState(false)
  const userId = useAppSelector((state) => state.user.userData?.id)
  // const generalChat = useAppSelector((state) =>
  //   state.chat.dialogues.find((dialogue) => dialogue.slug === 'general_chat'),
  // )
  const currentMemberDialogue = useAppSelector((state) =>
    state.chat.dialogues.find((dialogue) => dialogue.other_user && dialogue.other_user.id === member.user.id),
  )
  const currentMemberDialogueSlug = currentMemberDialogue?.slug || 'nonExistDialogue'
  const me = member.user.id === userId ? 'Вы' : ''
  const adminBadge = Boolean(member.role)
  const avatar = member.user.avatar ? member.user.avatar : defaultAvatar

  const showRaiting = Boolean(member.user.limc_balance)
  const balance = member.user.limc_balance === 'None' ? '0' : Math.floor(Number(member.user.limc_balance))
  const limcNumber = showRaiting ? balance : 0

  const onOpen = () => {
    if (!me) {
      dispatch(setCurrentPage(0))
      dispatch(setWholePages(0))
      dispatch(setCurrentMessages([]))

      dispatch(setCurrentDialogueMember(member.user))
      dispatch(setCurrentSlug(currentMemberDialogueSlug))
      checkDialogueExistence(member.user.id)
      setIsOpened(true)
    }
  }

  const onUnblock = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    dispatch(setCurrentClickedUser(member.user.id))
    openUnblockModal()
  }

  return (
    <div className={styles.message} onClick={onOpen}>
      <img src={avatar} alt='avatar' className={styles.foto} />
      <p className={styles.name}>
        {isAdmin && member.is_blocked && <img src={blockIcon} onClick={onUnblock} className={styles.blockIcon} />}
        {getUserName(member.user)}
        <span className={styles.me}>{me}</span>
      </p>
      {member.user?.status === 1 || me ? (
        <p className={styles.status_active}>В сети</p>
      ) : (
        <p className={styles.status}>Не в сети</p>
      )}
      {showRaiting && !adminBadge && (
        <span className={styles.raiting}>
          <LimcRating limcBalance={limcNumber} />
        </span>
      )}
      {adminBadge && (
        <span className={styles.raiting}>
          <p className={styles.score}>{member.role === 1 ? 'CEO Limcore.io' : 'Admin'}</p>
        </span>
      )}
      <span className={styles.line} />
      {isOpened && <ChatContent />}
    </div>
  )
}
