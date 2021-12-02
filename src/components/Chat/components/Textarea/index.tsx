import React from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsButtonVisible } from '../../../Chat/redux/chatSlice'

export const Textarea = () => {
  const buttonVisible = useAppSelector((state) => state.chat.isButtonVisible)
  const dispatch = useAppDispatch()

  const handleSendIconVisibility = (e) => {
    if (e.target.value.length < 1) {
      dispatch(setIsButtonVisible(''))
    } else {
      dispatch(setIsButtonVisible('send'))
    }
  }

  const handleInputHeight = (e) => {
    if (e.target.value.length !== 0) {
      e.target.style.height = e.target.scrollHeight + 'px'
    } else {
      e.target.style.height = '40px'
    }
    handleSendIconVisibility(e)
  }
  return (
    <div className={styles.inputContainer}>
      <button className={styles.button} type='button'>
        <img alt='' src={clip} className={styles.clip} />
      </button>
      <textarea
        className={styles.inputText}
        placeholder='Сообщение'
        onChange={handleInputHeight}
        onCut={handleInputHeight}
        onPaste={handleInputHeight}
        onInput={handleInputHeight}
      />
      <button className={styles.button} type='submit'>
        {buttonVisible === 'send' && <img alt='' src={send} className={styles.sendIcon} />}
      </button>
    </div>
  )
}
