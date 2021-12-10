import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Support } from '@components/Chat/components/Support'
import { Group } from '@components/Chat/components/Group'
import active from '@icons/activeStatus.svg'

export const Message = ({ message, participants }) => {
  const [supportVisible, setSupportVisible] = useState(false)
  const [groupVisible, setGroupVisible] = useState(false)

  const handleSupportOpen = () => {
    setSupportVisible(true)
  }

  const handleSupportClose = () => {
    setSupportVisible(false)
  }

  const handleGroupOpen = () => {
    setGroupVisible(true)
  }

  const handleGroupClose = () => {
    setGroupVisible(false)
  }

  return (
    <>
      <div className={styles.messageContainer} onClick={message.group ? handleGroupOpen : handleSupportOpen}>
        <img src={message.image} alt='image' className={styles.foto} />
        <img
          alt='status'
          src={active}
          className={message.status === 'В сети' ? styles.status : styles.status_invisible}
        />
        <p className={styles.name}>{message.name}</p>
        <p className={styles.message}>{message.message}</p>
        <data className={styles.date}>{message.date}</data>
        <div className={message.unreadMessages > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
          {message.unreadMessages}
        </div>
        <span className={styles.line} />
      </div>
      <Support supportVisible={supportVisible} message={message} handleSupportClose={handleSupportClose} />
      <Group
        groupVisible={groupVisible}
        message={message}
        handleGroupClose={handleGroupClose}
        participants={participants}
      />
    </>
  )
}
