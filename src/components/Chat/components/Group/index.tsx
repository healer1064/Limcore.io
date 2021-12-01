import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import { GroupText } from '../GroupText'
import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsListVisible } from '../../../Chat/redux/chatSlice'

export const Group = ({ contentVisible, handleGroupClose, message, participants }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const listVisible = useAppSelector((state) => state.chat.isListVisible)

  const handleParticipantsListOpen = () => {
    dispatch(setIsListVisible('list'))
  }

  const handleParticipantsListClose = () => {
    dispatch(setIsListVisible('group'))
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
          listVisible={listVisible}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
          message={message}
        />
        <Textarea />
      </section>
    )
  )
}
