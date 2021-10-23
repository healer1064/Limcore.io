import React from 'react'
import Styles from './styles.module.scss'

import teamMember from '../../../../assets/images/team-member.png'

export const Card = ({ job, name, content }) => {
  return (
    <div className={Styles.card}>
      <img src={teamMember} className={Styles.card__foto} />
      <div className={Styles.card__teamMember}>
        <p className={Styles.card__job}>{job}</p>
        <p className={Styles.card__name}>{name}</p>
      </div>
      <p className={Styles.card__paragraph}>{content}</p>
    </div>
  )
}
