import React from 'react'
import Styles from './styles.module.scss'

export const Card = ({ person }) => {
  return (
    <div className={Styles.card}>
      <img src={person.foto} className={Styles.card__foto} />
      <div className={Styles.card__teamMember}>
        <p className={Styles.card__job}>{person.job}</p>
        <p className={Styles.card__name}>{person.name}</p>
      </div>
      <p className={Styles.card__paragraph}>{person.content}</p>
    </div>
  )
}
