import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import arrow from '@icons/arrow-left-blue.svg'
import { RaitingList } from '@components/Chat/components/RaitingList'
import { GroupMessage } from '@components/Chat/components/GroupMessage'

export const List = ({ handleParticipantsListClose, participantsListVisible, participants, message }) => {
  const [t] = useTranslation()
  const [raitingListVisible, setRaitingVisible] = useState(false)

  const handleRaitingListOpen = () => {
    setRaitingVisible(true)
  }

  const handleRaitingListClose = () => {
    setRaitingVisible(false)
  }

  return (
    <section className={participantsListVisible ? styles.list : styles.list_invisible}>
      <div className={styles.listHeader}>
        <button className={styles.button}>
          <img src={arrow} alt='' className={styles.arrow} onClick={handleParticipantsListClose} />
        </button>
        <p className={styles.title}>
          {t('group_title')}
          <span className={styles.number}>{message.numberOfParticipants}</span>
        </p>
        <button className={styles.button} onClick={handleParticipantsListClose}>
          <img className={styles.close} src={close} alt='' />
        </button>
      </div>
      <div className={styles.messagesContainer}>
        {participants.map((member) => (
          <GroupMessage key={member.id} {...member} member={member} handleRaitingListOpen={handleRaitingListOpen} />
        ))}
      </div>
      <RaitingList raitingListVisible={raitingListVisible} handleRaitingListClose={handleRaitingListClose} />
    </section>
  )
}
