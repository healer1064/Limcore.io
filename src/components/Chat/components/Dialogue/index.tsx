import React from 'react'
import styles from './styles.module.scss'
// import { Support } from '@components/Chat/components/Support'
import { DialogueContent } from '@components/Chat/components/DialogueContent'
// import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible } from '../../redux/chatSlice'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import limcoreIcon from '@icons/limcore.svg'

export const Dialogue = ({ data }) => {
  const dispatch = useAppDispatch()
  const contentVisible = useAppSelector((state) => state.chat.isContentVisible)
  console.log(data)

  const title = data.name === 'General chat' ? 'Общий чат' : data.name

  const handleGroupOpen = () => {
    dispatch(setIsContentVisible('group'))
  }

  return (
    <>
      <div className={styles.messageContainer} onClick={handleGroupOpen}>
        <img src={limcoreIcon} alt='image' className={styles.foto} />
        {/* <img alt='' src={active} className={data.status === 'В сети' ? styles.status : styles.status_invisible} /> */}
        <p className={styles.name}>{title}</p>
        <p className={styles.message}>{data.last_message.message}</p>
        <data className={styles.date}>{getMonthAndDay(data.last_message.created_at)}</data>
        <div className={data.unreadMessages > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
          {data.unreadMessages}
        </div>
        <span className={styles.line} />
      </div>
      <div>
        <DialogueContent contentVisible={contentVisible === 'group'} slug={data.slug} />
      </div>
    </>
  )
}
