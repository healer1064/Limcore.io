import React from 'react'

import styles from './styles.module.scss'
import chatYellow from '@icons/chatYellow.svg'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__flex}>
        <div>
          <img src={chatYellow} />
          Чат
        </div>
        <div>
          <img src={arrowWhiteRight} />
        </div>
      </div>
    </div>
  )
}
