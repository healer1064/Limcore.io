import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import { GroupText } from '../GroupText'
import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'

export const Group = ({ groupVisible, handleGroupClose, message, participants }) => {
  const [t] = useTranslation()
  const [participantsListVisible, setParticipantsListVisible] = useState(false)

  const handleParticipantsListOpen = () => {
    setParticipantsListVisible(true)
  }

  const handleParticipantsListClose = () => {
    setParticipantsListVisible(false)
  }

  return (
    <section className={groupVisible ? styles.groupContainer : styles.groupContainer_invisible}>
      <div className={styles.groupHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={handleGroupClose} />
        <img src={message.image} alt='' className={styles.foto} />
        <p className={styles.name}>{message.name}</p>
        <p className={styles.status} onClick={handleParticipantsListOpen}>
          {`${message.numberOfParticipants} ${t('group_number')}`}
        </p>
      </div>
      <div className={styles.groupMessagesContainer}>
        {participants.map((member) => (
          <GroupText key={member.id} {...member} member={member} />
        ))}
      </div>
      <List
        handleParticipantsListClose={handleParticipantsListClose}
        participantsListVisible={participantsListVisible}
        participants={participants}
        message={message}
      />
      <Textarea />
    </section>
  )
}
