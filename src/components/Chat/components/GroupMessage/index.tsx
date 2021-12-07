import React from 'react'
import styles from './styles.module.scss'

export const GroupMessage = ({ member, handleRaitingListOpen }) => {
  return (
    <>
      <div className={styles.message}>
        <img src={member.foto} alt={member.name} className={styles.foto} />
        <p className={styles.name}>{member.name}</p>
        <p className={member.status === 'В сети' ? styles.status_active : styles.status}>{member.status}</p>
        <p className={styles.rank}>{member.rank}</p>
        <span className={member.rank !== '' ? styles.raiting_invisible : styles.raiting}>
          <img src={member.raitingIcon} alt='raiting' className={styles.raitingIcon} onClick={handleRaitingListOpen} />
          <span className={styles.score}>{`${member.score} ТВ`}</span>
        </span>
        <span className={styles.line} />
      </div>
    </>
  )
}
