import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const Text = ({ message }) => {
  const [t] = useTranslation()

  return (
    <div className={`${message.owner ? styles.textContainer_owner : styles.textContainer}`}>
      <p className={`${message.owner ? styles.text_owner : styles.text}`}>{message.message}</p>
      <span className={`${message.owner ? styles.time_owner : styles.time}`}>
        {`${new Date().getHours()}:${new Date().getMinutes()}`}
        <svg
          className={message.owner ? styles.checkIcon : styles.checkIcon_invisible}
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.4062 5.90625L4.21875 12.0938L1.125 9.00014'
            stroke='#E1E7FF'
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.8758 5.90625L10.6883 12.0938L9.04492 10.4504'
            stroke='#E1E7FF'
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
    </div>
  )
}
