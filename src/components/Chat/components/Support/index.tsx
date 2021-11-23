import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const Support = ({ supportVisible, message, handleSupportClose }) => {
  const [t] = useTranslation()

  return (
    <section className={supportVisible ? styles.supportContainer : styles.supportContainer_invisible}>
      <article className={styles.supportHeader}>
        <svg
          className={styles.arrow}
          onClick={handleSupportClose}
          width='10'
          height='17'
          viewBox='0 0 10 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.26758 15.0282L1.50701 8.26764L8.26758 1.50708'
            stroke='#4A70F8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <img src={message.image} alt='' className={styles.foto} />
        <p className={styles.name}>{message.name}</p>
        <p className={`styles.status ${message.status === 'В сети' ? styles.status_active : ''}`}>{message.status}</p>
      </article>
    </section>
  )
}
