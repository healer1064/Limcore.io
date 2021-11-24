import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import { RaitingList } from '@components/Chat/components/RaitingList'

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
    <div className={participantsListVisible ? styles.list : styles.list_invisible}>
      <article className={styles.listHeader}>
        <button className={styles.button}>
          <svg
            className={styles.arrow}
            onClick={handleParticipantsListClose}
            width='10'
            height='17'
            viewBox='0 0 10 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.26758 15.0282L1.50701 8.26764L8.26758 1.50708'
              stroke='#4A70F8'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <p className={styles.title}>
          {t('group_title')}
          <span className={styles.number}>{message.numberOfParticipants}</span>
        </p>
        <button className={styles.button} onClick={handleParticipantsListClose}>
          <img src={close} alt='' />
        </button>
      </article>
      <div className={styles.messagesContainer}>
        {participants.map((part) => (
          <>
            <div className={styles.message}>
              <img src={part.foto} alt='' className={styles.foto} />
              <p className={styles.name}>{part.name}</p>
              <p className={styles.status}>{part.status}</p>
              <p className={styles.rank}>{part.rank}</p>
              <span className={styles.raiting}>
                <img src={part.raitingIcon} alt='' className={styles.raitingIcon} onClick={handleRaitingListOpen} />
                <span>{`${part.score} ТВ`}</span>
              </span>
            </div>
          </>
        ))}
      </div>
      <RaitingList raitingListVisible={raitingListVisible} handleRaitingListClose={handleRaitingListClose} />
    </div>
  )
}
