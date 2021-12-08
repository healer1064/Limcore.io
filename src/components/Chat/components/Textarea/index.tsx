import React, { useState } from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import { useChat } from '@components/Chat/utils/useChat'

export const Textarea = ({ slug }) => {
  // const { sendGroupMessage, getGroupMessages } = useChat()
  const { sendGroupMessage } = useChat()

  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSendIconVisibility = (e) => {
    e.target.value.length < 1 ? setIsButtonVisible(false) : setIsButtonVisible(true)
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
    // getGroupMessages(slug, 1)
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
        {isButtonVisible && <img alt='' src={send} className={styles.sendIcon} />}
      </button>
    </div>
  )
}
