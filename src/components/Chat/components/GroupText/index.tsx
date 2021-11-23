import React from 'react'
import styles from './styles.module.scss'

export const GroupText = ({ member }) => {
  return (
    <div className={styles.member}>
      <img src={member.foto} />
      <img src={member.raitingIcon} />
      <span>{member.score}</span>
      <p>{member.message}</p>
    </div>
  )
}
