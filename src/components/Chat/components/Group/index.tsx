import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import listStyles from '@components/Chat/components/List/styles.module.scss'
import { GroupText } from '../GroupText'
import { List } from '../List'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { useAppDispatch } from '@app/redux/hooks'
import { setIsListVisible } from '../../../Chat/redux/chatSlice'

export const Group = ({ contentVisible, handleGroupClose, message, participants, msgs }) => {
  const [t] = useTranslation()
  const [listClassName, setListClassName] = useState(listStyles.list_invisible)
  const dispatch = useAppDispatch()
  const [isReady, setIsReady] = useState(false)

  const handleParticipantsListOpen = () => {
    dispatch(setIsListVisible('list'))
    setListClassName(listStyles.list)
  }

  const handleParticipantsListClose = () => {
    dispatch(setIsListVisible('group'))
    setListClassName(listStyles.list_invisible)
  }

  useEffect(() => {
    if (msgs && msgs.length !== 0) {
      setIsReady(true)
    }
  }, [msgs])

  return (
    contentVisible === 'group' && (
      <section className={styles.groupContainer}>
        <div className={styles.groupHeader}>
          <img alt='' src={arrow} className={styles.arrow} onClick={handleGroupClose} />
          <img src={message.image} alt='' className={styles.foto} />
          <p className={styles.name}>{message.name}</p>
          <p className={styles.status} onClick={handleParticipantsListOpen}>
            {`${participants.length} ${t('group_number')}`}
          </p>
        </div>
        <div className={styles.groupMessagesContainer}>
          {/* {participants.map((member) => (
            <GroupText key={member.id} {...member} member={member} />
          ))} */}
          {isReady && msgs.map((msg) => <GroupText key={msg.id} message={msg} member={participants[0]} />)}
        </div>
        <List
          listClassName={listClassName}
          handleParticipantsListClose={handleParticipantsListClose}
          participants={participants}
        />
        <Textarea slug={message.slug} />
      </section>
    )
  )
}
