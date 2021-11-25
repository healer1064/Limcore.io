import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import { InputText } from '../../../../ui-kit/InputText'
import { GroupText } from '../GroupText'
import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'

export const Group = ({ groupVisible, handleGroupClose, message, participants }) => {
  const [t] = useTranslation()
  const [sendIconVisible, setSendIconVisible] = useState(false)
  const [participantsListVisible, setParticipantsListVisible] = useState(false)

  const handleSendIconVisibility = () => {
    setSendIconVisible(true)
  }

  const handleParticipantsListOpen = () => {
    setParticipantsListVisible(true)
  }

  const handleParticipantsListClose = () => {
    setParticipantsListVisible(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
      {participants.map((member) => (
        <GroupText key={member.id} {...member} member={member} />
      ))}
      <form className={styles.inputContainer}>
        <button className={styles.button} type='button'>
          <img alt='' src={clip} className={styles.clip} />
        </button>
        <textarea className={styles.inputText} placeholder='Сообщение' onChange={handleSendIconVisibility} />
        <button className={styles.button} type='submit' onClick={(e) => handleSubmit(e)}>
          <img alt='' src={send} className={sendIconVisible ? styles.sendIcon : styles.sendIcon_invisible} />
        </button>
      </form>
      <List
        handleParticipantsListClose={handleParticipantsListClose}
        participantsListVisible={participantsListVisible}
        participants={participants}
        message={message}
      />
    </section>
  )
}
