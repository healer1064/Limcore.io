import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { setContent } from '@components/Chat/redux/chatSlice'
import { useDispatch } from 'react-redux'
import profileIcon from '@icons/profileicon.svg'
import { useAppSelector } from '@app/redux/hooks'

export const PersonsChat = () => {
  const [t] = useTranslation()
  const dispatch = useDispatch()

  const data = useAppSelector((state) => state.chat.personsChatMessages)
  console.log(data)

  return (
    <section className={styles.supportContainer}>
      <div className={styles.supportHeader}>
        <img alt='' src={arrow} className={styles.arrow} onClick={() => dispatch(setContent(''))} />
        <img src={profileIcon} alt='' className={styles.foto} />
        <p className={styles.name}>{data.other_user.email}</p>
        <p className={styles.status_active}>В сети</p>
        {/* <p className={data.status === 'В сети' ? styles.status_active : styles.status}>{data.status}</p> */}
      </div>
      <div className={styles.messagesContainer}>
        <span className={styles.date}>{/* {data.date}.{data.year} */}</span>
        {/* <Text message={data} /> */}
      </div>
      <Textarea slug='todo' />
      <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('support_no_messages')}</p>
      <p className={`${styles.text} ${styles.text_invisible}`}>{t('support_start')}</p>
    </section>
  )
}
