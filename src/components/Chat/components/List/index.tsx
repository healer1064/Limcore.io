import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import arrow from '@icons/arrow-left-blue.svg'
import { RaitingList } from '@components/Chat/components/RaitingList'
import { GroupMessage } from '@components/Chat/components/GroupMessage'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsRaitingVisible } from '../../../Chat/redux/chatSlice'

export const List = ({ handleParticipantsListClose, participants, message, listVisible }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const raitingVisible = useAppSelector((state) => state.chat.isRaitingVisible)

  const handleRaitingListOpen = () => {
    dispatch(setIsRaitingVisible('raiting'))
  }

  const handleRaitingListClose = () => {
    dispatch(setIsRaitingVisible(''))
  }

  return (
    listVisible === 'list' && (
      <section className={styles.list}>
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
        <RaitingList raitingVisible={raitingVisible} handleRaitingListClose={handleRaitingListClose} />
      </section>
    )
  )
}
