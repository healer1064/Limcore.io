import React from 'react'
import styles from './styles.module.scss'
import icon from '@icons/VideoCamera.svg'

export const BroadcastsMobile = () => {
  return (
    <div className={styles.broadcast}>
      <div className={styles.broadcast__header}>
        <h2>On-line</h2>
        <img src={icon} alt='Camera' />
      </div>
      <div className={styles.broadcast__items}>
        <div className={styles.broadcast__wrapper}>
          <div className={styles.broadcast__item}>
            <iframe
              className={styles.broadcast__videoFrame}
              src='https://rtsp.me/embed/iRTG98h5/'
              frameBorder='0'
              allowFullScreen
            />
          </div>
          <div className={styles.broadcast__item}>
            <iframe
              className={styles.broadcast__videoFrame}
              src='https://rtsp.me/embed/TrD56fbb/'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </div>
        <div className={styles.broadcast__wrapper}>
          <div className={styles.broadcast__item}>
            <iframe
              className={styles.broadcast__videoFrame}
              src='https://rtsp.me/embed/bK2f3neH/'
              frameBorder='0'
              allowFullScreen
            />
          </div>
          <div className={styles.broadcast__item}>
            <iframe
              className={styles.broadcast__videoFrame}
              src='https://rtsp.me/embed/7rDYNfA5/'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
