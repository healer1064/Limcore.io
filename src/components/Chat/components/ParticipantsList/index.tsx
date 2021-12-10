import React from 'react'
import styles from './styles.module.scss'
// import raitingStyles from '../RaitingList/styles.module.scss'
import { useTranslation } from 'react-i18next'
import close from '@icons/close.svg'
import arrow from '@icons/arrow-left-blue.svg'
// import { RaitingList } from '@components/Chat/components/RaitingList'
import { Participant } from '@components/Chat/components/Participant'
// import { useAppDispatch } from '@app/redux/hooks'
import { IMemberInterface } from '@components/Chat/utils/types'

export const ParticipantsList = ({ handleParticipantsListClose, participants, openListClassname }) => {
  const [t] = useTranslation()
  // const [raitingClassName, setRaitingClassName] = useState(raitingStyles.raitingList_invisible)
  // const dispatch = useAppDispatch()

  // const handleRaitingListOpen = () => {
  //   dispatch(setIsRaitingVisible('raiting'))
  //   setRaitingClassName(raitingStyles.raitingList)
  // }

  // const handleRaitingListClose = () => {
  //   dispatch(setIsRaitingVisible(''))
  //   setRaitingClassName(raitingStyles.raitingList_invisible)
  // }

  return (
    <section className={openListClassname}>
      <div className={styles.listHeader}>
        <button className={styles.button}>
          <img src={arrow} alt='' className={styles.arrow} onClick={handleParticipantsListClose} />
        </button>
        <p className={styles.title}>
          {t('group_title')}
          <span className={styles.number}>{participants.length}</span>
        </p>
        <button className={styles.button} onClick={handleParticipantsListClose}>
          <img className={styles.close} src={close} alt='' />
        </button>
      </div>
      <div className={styles.messagesContainer}>
        {participants.map((member: IMemberInterface) => {
          return (
            <Participant
              key={member.user.id}
              member={member}
              // handleRaitingListOpen={handleRaitingListOpen}
            />
          )
        })}
      </div>
      {/* <RaitingList handleRaitingListClose={handleRaitingListClose} raitingClassName={raitingClassName} /> */}
    </section>
  )
}
