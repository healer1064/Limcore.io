import React, { useState, useRef } from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'
import { useChat } from '@components/Chat/utils/useChat'
import { useAppSelector } from '@app/redux/hooks'

export const Textarea = () => {
  const { sendGroupMessage, sendDialogueMessage } = useChat()

  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const _slug = useAppSelector((state) => state.chat.currentSlug)
  let slug = _slug
  const IS_GENERAL_CHAT = slug === 'general_chat'

  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)
  if (currentDialogueMember.id) {
    slug = String(currentDialogueMember.id)
  }

  const handleSendIconVisibility = (e) => {
    e.target.value.length < 1 ? setIsButtonVisible(false) : setIsButtonVisible(true)
  }

  const handleInputHeight = (e) => {
    e.target.value.length !== 0
      ? (inputRef.current.style.height = e.target.scrollHeight + 'px')
      : (inputRef.current.style.height = '40px')

    handleSendIconVisibility(e)
  }

  const handleInputChange = (e) => {
    handleInputHeight(e)
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    IS_GENERAL_CHAT ? sendGroupMessage(slug, inputValue) : sendDialogueMessage(slug, inputValue)
    setInputValue('')
    inputRef.current.style.height = '40px'
  }

  return (
    <div className={styles.inputContainer}>
      <button className={styles.button} type='button'>
        <img alt='clip' src={clip} className={styles.clip} />
      </button>
      <textarea
        ref={inputRef}
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
