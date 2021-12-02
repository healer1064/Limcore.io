import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import listStyles from '@components/Chat/components/List/styles.module.scss'
import { GroupText } from '../GroupText'
import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch } from '@app/redux/hooks'
import { setIsListVisible } from '../../../Chat/redux/chatSlice'

export const Group = ({ contentVisible, handleGroupClose, message, participants }) => {
  const [t] = useTranslation()
  const [listClassName, setListClassName] = useState(listStyles.list_invisible)
  const dispatch = useAppDispatch()

  const handleParticipantsListOpen = () => {
    dispatch(setIsListVisible('list'))
    setListClassName(listStyles.list)
  }

  const handleParticipantsListClose = () => {
    dispatch(setIsListVisible('group'))
    setListClassName(listStyles.list_invisible)
  }

  return (
    contentVisible === 'group' && (
      <section className={styles.groupContainer}>
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
          listClassName={listClassName}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
          message={message}
        />
        <Textarea />
      </section>
    )
  )
}
