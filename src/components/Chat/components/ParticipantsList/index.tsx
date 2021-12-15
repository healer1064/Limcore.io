import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import arrow from '@icons/arrow-left-blue.svg'
import { Participant } from '@components/Chat/components/Participant'
import { IMemberInterface } from '@components/Chat/utils/types'
import { Modal } from '@components/Modal'

interface IParticipantsList {
  onClose: () => void
  participants: IMemberInterface[]
  isActive: boolean
}

export const ParticipantsList = ({ onClose, participants, isActive }: IParticipantsList) => {
  const [t] = useTranslation()
  const sortedPartisipants = [...participants].sort((a, b) => {
    const aMemberStatus = a.user.status || 0
    const bMemberStatus = b.user.status || 0
    return bMemberStatus - aMemberStatus
  })

  return (
    <Modal isMobile active={isActive} setActive={onClose}>
      <section className={styles.list}>
        <div className={styles.listHeader}>
          <button className={styles.button}>
            <img src={arrow} alt='icon' className={styles.arrow} onClick={onClose} />
          </button>
          <p className={styles.title}>
            {t('group_title')}
            <span className={styles.number}>{participants.length}</span>
          </p>
          <button className={styles.button} onClick={onClose}>
            <img className={styles.close} src={close} alt='icon' />
          </button>
        </div>
        <div className={styles.messagesContainer}>
          {sortedPartisipants.map((member: IMemberInterface) => (
            <Participant key={member.user.id} member={member} />
          ))}
        </div>
      </section>
    </Modal>
  )
}
