import React, { useState } from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setIsButtonVisible } from '../../../Chat/redux/chatSlice'
import { getGroupMessages, sendGroupMessage } from '@components/Chat/utils/chat'

export const Textarea = ({ slug }) => {
  const buttonVisible = useAppSelector((state) => state.chat.isButtonVisible)
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleSendIconVisibility = (e) => {
    e.target.value.length < 1 ? dispatch(setIsButtonVisible('')) : dispatch(setIsButtonVisible('send'))
  }

  const handleInputHeight = (e) => {
    e.target.value.length !== 0
      ? (e.target.style.height = e.target.scrollHeight + 'px')
      : (e.target.style.height = '40px')

    handleSendIconVisibility(e)
  }

  const handleInputChange = (e) => {
    handleInputHeight(e)
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    setInputValue('')
    sendGroupMessage(slug, inputValue)
    getGroupMessages(slug, 1)
  }

  return (
    <div className={styles.inputContainer}>
      <button className={styles.button} type='button'>
        <img alt='' src={clip} className={styles.clip} />
      </button>
      <textarea
        value={inputValue}
        className={styles.inputText}
        placeholder='Сообщение'
        onChange={handleInputChange}
        onCut={handleInputHeight}
        onPaste={handleInputHeight}
        onInput={handleInputHeight}
      />
      <button className={styles.button} type='button' onClick={handleSubmit}>
        {buttonVisible === 'send' && <img alt='' src={send} className={styles.sendIcon} />}
      </button>
    </div>
  )
}
