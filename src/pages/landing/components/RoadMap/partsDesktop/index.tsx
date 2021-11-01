import React from 'react'
import Styles from './styles.module.scss'

import roadMapDone from '@icons/roadMapDone.svg'
import roadMapInProgress from '@icons/roadMapInProgress.svg'

export const RoadMapItemDesktop = ({ title, date, status, vertikal, position, titleType }) => {
  return (
    <li className={`${position === 'down' ? Styles.itemDown : Styles.item}`}>
      <img
        className={`${position === 'down' ? Styles.iconDown : Styles.icon}`}
        src={status === 'done' ? roadMapDone : roadMapInProgress}
        alt='Иконка'
      />
      <p className={Styles.itemDate}>{date}</p>
      <h4 className={`${titleType === 'long' ? Styles.itemLongTitle : Styles.itemTitle}`}>{title}</h4>
      <div
        className={`${vertikal === 'short' ? Styles.itemShortVertikal : Styles.itemLongVertikal} ${
          position === 'down' ? Styles.itemVertikalUp : Styles.itemVertikalDown
        }`}
      />
    </li>
  )
}
