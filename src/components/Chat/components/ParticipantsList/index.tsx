import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import arrow from '@icons/arrow-left-blue.svg'
import { Participant } from '@components/Chat/components/Participant'
import { IMemberInterface } from '@components/Chat/utils/types'
import { BottomModal } from '@components/Modal/BottomModal'
import { Modal } from '@components/Modal/'
import { useAppSelector } from '@app/redux/hooks'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useChat } from '@components/Chat/utils/useChat'

interface IParticipantsList {
  onClose: () => void
  participants: IMemberInterface[]
  isActive: boolean
}

interface IUnblockModalContent {
  unblockUser: (event: React.SyntheticEvent) => void
  closeUnblockModal: () => void
}

const UnblockModalContent = ({ unblockUser, closeUnblockModal }: IUnblockModalContent) => (
  <div className={styles.unblock}>
    Do you want to unblock user?
    <div className={styles.unblock__inner}>
      <button className={classNames(styles.unblock__btn, styles.unblock__delete)} onClick={unblockUser}>
        Unblock
      </button>
      <button className={classNames(styles.unblock__btn, styles.unblock__cancel)} onClick={closeUnblockModal}>
        Cancel
      </button>
    </div>
  </div>
)

export const ParticipantsList = ({ onClose, participants, isActive }: IParticipantsList) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const { unblockUser } = useChat()
  const desktop = width >= 769
  const [isUnblockModalOpened, setIsUnblockModalOpened] = useState(false)
  const currentClickedUser = useAppSelector((state) => state.chat.currentClickedUser)
  const userId = useAppSelector((state) => state.user.userData?.id)
  const isAdmin = Boolean(participants.find((member) => member.user.id === userId)?.role)

  const sortedPartisipants = [...participants].sort((a, b) => {
    const aMemberStatus = a.user.status || 0
    const bMemberStatus = b.user.status || 0
    return bMemberStatus - aMemberStatus
  })

  const closeUnblockModal = () => setIsUnblockModalOpened(false)
  const openUnblockModal = () => setIsUnblockModalOpened(true)

  const onUnblockUser = (event: React.SyntheticEvent) => {
    console.log(`Unblock user #${currentClickedUser}`)
    event.stopPropagation()
    setIsUnblockModalOpened(false)
    unblockUser(currentClickedUser, 'general_chat')
  }

  return isActive ? (
    <section className={styles.list}>
      <div className={styles.listHeader}>
        <button className={styles.button} onClick={onClose}>
          <img src={arrow} alt='icon' className={styles.arrow} />
        </button>
        <p className={styles.title}>
          {t('group_title')}
          <span className={styles.number}>{participants.length}</span>
        </p>
      </div>
      <div className={styles.messagesContainer}>
        {sortedPartisipants.map((member: IMemberInterface) => (
          <Participant key={member.user.id} member={member} openUnblockModal={openUnblockModal} isAdmin={isAdmin} />
        ))}
      </div>
      {desktop ? (
        <Modal active={isUnblockModalOpened} setActive={closeUnblockModal} isAuthModal>
          <UnblockModalContent unblockUser={onUnblockUser} closeUnblockModal={closeUnblockModal} />
        </Modal>
      ) : (
        <BottomModal active={isUnblockModalOpened} setActive={closeUnblockModal}>
          <UnblockModalContent unblockUser={onUnblockUser} closeUnblockModal={closeUnblockModal} />
        </BottomModal>
      )}
    </section>
  ) : null
}
