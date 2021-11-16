import React from 'react'
import styles from './styles.module.scss'
import { BroadcastItem } from './components/broadcastItem'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { useTranslation } from 'react-i18next'

export const BroadcastsMobile = () => {
  const [t] = useTranslation()

  const broadcastsList = [
    {
      number: 1,
      src: 'https://rtsp.me/embed/iRTG98h5/',
      title: t('streams_title_1'),
    },
    {
      number: 2,
      src: 'https://rtsp.me/embed/TrD56fbb/',
      title: t('streams_title_1'),
    },
    {
      number: 3,
      src: 'https://rtsp.me/embed/bK2f3neH/',
      title: t('streams_title_2'),
    },
    {
      number: 4,
      src: 'https://rtsp.me/embed/7rDYNfA5/',
      title: t('streams_title_2'),
    },
  ]

  return (
    <div className={styles.broadcast}>
      <ul className={styles.broadcast__items}>
        {broadcastsList.map((broadcast) => (
          <li className={styles.broadcast__item_wrapper} key={broadcast.number}>
            <BroadcastItem broadcast={broadcast} />
          </li>
        ))}
      </ul>

      <FooterMobile />
    </div>
  )
}
