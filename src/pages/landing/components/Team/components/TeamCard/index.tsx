import React from 'react'
import Styles from './styles.module.scss'

export const TeamCard = ({ person }) => {
  return (
    <li className={Styles.card}>
      <div className={Styles.fotoContainer}>
        <img src={person.foto} className={Styles.card__foto} />
      </div>
      <div className={Styles.card__teamMember}>
        <p className={` ${Styles.card__job} ${person.jobTitle !== 'long' ? '' : Styles.card__jobLong}`}>{person.job}</p>
        <p className={Styles.card__name}>{person.name}</p>
      </div>
      <p className={Styles.card__paragraph}>{person.content}</p>
    </li>
  )
}
