import React from 'react'
import Styles from './styles.module.scss'

import roadMapDone from '@icons/roadMapDone.svg'
import roadMapInProgress from '@icons/roadMapInProgress.svg'

export const RoadMapItem = ({ title, date, status }) => {
  return (
    <li className={Styles.item}>
      <img className={Styles.icon} src={status === 'done' ? roadMapDone : roadMapInProgress} alt='Иконка' />
      <p className={Styles.itemDate}>{date}</p>
      <h4 className={Styles.itemTitle}>{title}</h4>
    </li>
  )
}
