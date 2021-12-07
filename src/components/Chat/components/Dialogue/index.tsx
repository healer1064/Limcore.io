import React, { RefObject } from 'react'
import styles from './styles.module.scss'
// import { Support } from '@components/Chat/components/Support'
import { DialogueContent } from '@components/Chat/components/DialogueContent'
// import active from '@icons/activeStatus.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsContentVisible } from '../../redux/chatSlice'
import { getMonthAndDay } from '@components/Chat/utils/chat'
import limcoreIcon from '@icons/limcore.svg'
import { IDialogueInterface } from '@components/Chat/utils/types'

interface IDialogueProps {
  data: IDialogueInterface
  socket: RefObject<WebSocket>
}

export const Dialogue = ({ data, socket }: IDialogueProps) => {
  const dispatch = useAppDispatch()
  const contentVisible = useAppSelector((state) => state.chat.isContentVisible)

  const handleGroupOpen = () => {
    dispatch(setIsContentVisible('group'))
  }

  return (
    <>
      <div className={styles.messageContainer} onClick={handleGroupOpen}>
        <img src={limcoreIcon} alt='image' className={styles.foto} />
        {/* <img alt='' src={active} className={data.status === 'В сети' ? styles.status : styles.status_invisible} /> */}
        <p className={styles.name}>{data.name}</p>
        <p className={styles.message}>{data.last_message.message}</p>
        <data className={styles.date}>{getMonthAndDay(data.last_message.created_at)}</data>
        <div className={data.unread_count > 0 ? styles.unreadMessages : styles.unreadMessages_invisible}>
          {data.unread_count}
        </div>
        <span className={styles.line} />
      </div>
      <div>
        {contentVisible === 'group' && (
          <DialogueContent contentVisible={contentVisible === 'group'} data={data} socket={socket} />
        )}
      </div>
    </>
  )
}
