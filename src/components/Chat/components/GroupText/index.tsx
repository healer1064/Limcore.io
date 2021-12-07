import React from 'react'
import styles from './styles.module.scss'

export const GroupText = ({ member }) => {
  return (
    <div className={styles.member}>
      <img src={member.foto} alt={member.name} className={styles.foto} />
      <span className={styles.raiting}>
        <img src={member.raitingIcon} alt='raitingIcon' className={styles.raitingIcon} />
        <span>{`${member.score} ТВ`}</span>
      </span>
      <p className={styles.message}>{member.message}</p>
    </div>
  )
}
