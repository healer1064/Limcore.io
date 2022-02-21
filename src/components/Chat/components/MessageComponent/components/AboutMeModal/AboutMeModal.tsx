import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'
import closeIcon from '../../../../../../assets/icons/greyClose.svg'
import { IUserInterface } from '@components/Chat/utils/types'
import { ChatContent } from '@components/Chat/components/ChatContent'
import { useDispatch } from 'react-redux'
import { useChat } from '@components/Chat/utils/useChat'
import {
  setCurrentDialogueMember,
  setCurrentMessages,
  setCurrentPage,
  setCurrentSlug,
  setWholePages,
} from '@components/Chat/redux/chatSlice'
import { useAppSelector } from '@app/redux/hooks'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'
import { LimcRating } from '@components/Chat/components/LimcRating'

interface AboutMeModalProps {
  username: string
  avatar: string
  user: IUserInterface
  closeModal: () => void
}

export const AboutMeModal: React.FC<AboutMeModalProps> = ({ username, avatar, closeModal, user }) => {
  const { unreadMessageCount } = useChat()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  const [isOpened, setIsOpened] = useState(false)

  const currentMemberDialogue = useAppSelector((state) =>
    state.chat.dialogues.find((dialogue) => dialogue.other_user && dialogue.other_user.id === user.id),
  )
  const currentMemberDialogueSlug = currentMemberDialogue?.slug || 'nonExistDialogue'
  const toShowRaiting = Boolean(user.limc_balance)

  const startDialogue = () => {
    dispatch(setCurrentPage(1))
    dispatch(setWholePages(0))
    dispatch(setCurrentMessages([]))

    dispatch(setCurrentDialogueMember(user))
    dispatch(setCurrentSlug(currentMemberDialogueSlug))
    unreadMessageCount(user.id)
    setIsOpened(true)
  }

  return (
    <>
      <div className={Styles.modal}>
        <button className={Styles.modal_close} onClick={closeModal}>
          <img src={closeIcon} alt='close' />
        </button>
        <div className={Styles.modal_inner}>
          <img src={avatar} alt='avatar' className={Styles.modal_avatar} />
          <span className={Styles.username}>{username}</span>
          <span className={Styles.raiting}>
            {toShowRaiting && <LimcRating limcBalance={Math.floor(Number(user.limc_balance))} />}
          </span>
        </div>
        <div className={Styles.about_block}>
          <span className={Styles.about_title}>{t('profile_about_me')}:</span>
          <p className={Styles.about_text}>{user.about_me || t('chat_modal_text') + ' :)'}</p>
        </div>
        <ButtonBig onClick={startDialogue} className={Styles.startDialogue}>
          Start dialogue
        </ButtonBig>
      </div>
      {isOpened && <ChatContent />}
    </>
  )
}
