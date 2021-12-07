import React, { useState } from 'react'
import styles from './styles.module.scss'
import clip from '@icons/clip.svg'
import send from '@icons/sendIcon.svg'

export const Textarea = () => {
  const [sendIconVisible, setSendIconVisible] = useState(false)

  const handleSendIconVisibility = () => {
    setSendIconVisible(true)
  }

  const handleInputHeight = (e) => {
    e.target.style.height = e.target.scrollHeight + 'px'
    handleSendIconVisibility()
  }
  return (
    <div className={styles.inputContainer}>
      <button className={styles.button} type='button'>
        <img alt='clip' src={clip} className={styles.clip} />
      </button>
      <textarea className={styles.inputText} placeholder='Сообщение' onChange={handleInputHeight} />
      <button className={styles.button} type='submit'>
        <img alt='sendIcon' src={send} className={sendIconVisible ? styles.sendIcon : styles.sendIcon_invisible} />
      </button>
    </div>
  )
}
