import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import arrow from '@icons/arrow-left-blue.svg'
import { Textarea } from '@components/Chat/components/Textarea'
import { IDialogueInterface } from '@components/Chat/utils/types'
import { setIsContentVisible } from '@components/Chat/redux/chatSlice'
import { useDispatch } from 'react-redux'
import profileIcon from '@icons/profileicon.svg'

interface ISupportProps {
  contentVisible: boolean
  data: IDialogueInterface
}

export const PersonsChat = ({ contentVisible, data }: ISupportProps) => {
  const [t] = useTranslation()
  const dispatch = useDispatch()

  return (
    contentVisible && (
      <section className={styles.supportContainer}>
        <div className={styles.supportHeader}>
          <img alt='' src={arrow} className={styles.arrow} onClick={() => dispatch(setIsContentVisible(''))} />
          <img src={profileIcon} alt='' className={styles.foto} />
          <p className={styles.name}>Иван Иванов</p>
          <p className={styles.status_active}>В сети</p>
          {/* <p className={data.status === 'В сети' ? styles.status_active : styles.status}>{data.status}</p> */}
        </div>
        <div className={styles.messagesContainer}>
          <span className={styles.date}>
            {/* {data.date}.{data.year} */}
            01.01
          </span>
          {/* <Text message={data} /> */}
        </div>
        <Textarea slug={data.slug} />
        <p className={`${styles.subtitle} ${styles.subtitle_invisible}`}>{t('support_no_messages')}</p>
        <p className={`${styles.text} ${styles.text_invisible}`}>{t('support_start')}</p>
      </section>
    )
  )
}
