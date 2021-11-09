import React from 'react'
import styles from './styles.module.scss'
import { BroadcastItem } from './components/broadcastItem'
import { broadcastsList } from '../broadcastsList'

export const BroadcastsMobile = () => {
  return (
    <div className={styles.broadcast}>
      <ul className={styles.broadcast__items}>
        {broadcastsList.map((broadcast) => (
          <li className={styles.broadcast__item_wrapper} key={broadcast.number}>
            <BroadcastItem broadcast={broadcast} />
          </li>
        ))}
      </ul>
    </div>
  )
}
