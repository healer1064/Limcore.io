import React from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setSendIconVisible } from '../../../Chat/redux/chatSlice'

export const Textarea = () => {
  const sendIconVisible = useAppSelector((state) => state.chat.sendIconVisible)
  const dispatch = useAppDispatch()

  const handleSendIconVisibility = () => {
    dispatch(setSendIconVisible(true))
  }

  const handleInputHeight = (e) => {
    e.target.style.height = e.target.scrollHeight + 'px'
    handleSendIconVisibility()
  }
  return (
    <div className={styles.inputContainer}>
      <button className={styles.button} type='button'>
        <img alt='' src={clip} className={styles.clip} />
      </button>
      <textarea className={styles.inputText} placeholder='Сообщение' onChange={handleInputHeight} />
      <button className={styles.button} type='submit'>
        <img alt='' src={send} className={sendIconVisible ? styles.sendIcon : styles.sendIcon_invisible} />
      </button>
    </div>
  )
}
