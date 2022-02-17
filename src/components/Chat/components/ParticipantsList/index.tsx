import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import arrow from '@icons/arrow-left-blue.svg'
import { Participant } from '@components/Chat/components/Participant'
import { IMemberInterface } from '@components/Chat/utils/types'
import { useAppSelector } from '@app/redux/hooks'

interface IParticipantsList {
  onClose: () => void
  participants: IMemberInterface[]
}

export const ParticipantsList = ({ onClose, participants }: IParticipantsList) => {
  const [t] = useTranslation()
  const userId = useAppSelector((state) => state.user.userData?.id)
  const isAdmin = Boolean(participants.find((member) => member.user.id === userId)?.role)

  const sortedPartisipants = [...participants].sort((a, b) => {
    const aMemberStatus = a.user.status || 0
    const bMemberStatus = b.user.status || 0
    return bMemberStatus - aMemberStatus
  })

  return (
    <section className={styles.list}>
      <div className={styles.header}>
        <button className={styles.button} onClick={onClose}>
          <img src={arrow} alt='icon' className={styles.arrow} />
        </button>
        <p className={styles.title}>
          {t('group_title')}
          <span className={styles.number}>{participants.length}</span>
        </p>
      </div>
      <div className={styles.participants}>
        {sortedPartisipants.map((member: IMemberInterface) => (
          <Participant key={member.user.id} member={member} isAdmin={isAdmin} />
        ))}
      </div>
    </section>
  )
}
