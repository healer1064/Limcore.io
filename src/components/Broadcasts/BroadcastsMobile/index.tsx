import React from 'react'
import styles from './styles.module.scss'
import { BroadcastItem } from './components/broadcastItem'

const broadcasts = [
  {
    number: 1,
    src: 'https://rtsp.me/embed/iRTG98h5/',
    title: 'Ремонт здания',
  },
  {
    number: 2,
    src: 'https://rtsp.me/embed/TrD56fbb/',
    title: 'Ремонт здания',
  },
  {
    number: 3,
    src: 'https://rtsp.me/embed/bK2f3neH/',
    title: 'Ремонт прилегающей территории',
  },
  {
    number: 4,
    src: 'https://rtsp.me/embed/7rDYNfA5/',
    title: 'Ремонт прилегающей территории',
  },
]

export const BroadcastsMobile = () => {
  return (
    <div className={styles.broadcast}>
      <ul className={styles.broadcast__items}>
        {broadcasts.map((broadcast) => (
          <li className={styles.broadcast__item_wrapper} key={broadcast.number}>
            <BroadcastItem broadcast={broadcast} />
          </li>
        ))}
      </ul>
    </div>
  )
}
