import React from 'react'
import styles from './styles.module.scss'

export const Text = ({ message }) => {
  return message.owner ? (
    <div className={styles.textContainer_owner}>
      <p className={styles.text_owner}>{message.message}</p>
      <span className={styles.time_owner}>
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
  ) : (
    <div className={styles.textContainer}>
      <p className={styles.text}>{message.message}</p>
      <span className={styles.time}>
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
