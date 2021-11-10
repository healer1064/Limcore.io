import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../styles.module.scss'

export const BroadcastItem = ({ broadcast }) => {
  const [fullScreen, setFullScreen] = useState(false)

  return (
    <>
      <div className={classNames(styles.broadcast__item, fullScreen && styles.fullScreen)}>
        <iframe
          className={classNames(styles.broadcast__videoFrame, fullScreen && styles.active)}
          src={broadcast.src}
          frameBorder='0'
          allowFullScreen
        />
        <div className={styles.fullScreenToggler} onClick={() => setFullScreen((prev) => !prev)} />
      </div>
      <div className={styles.item__text}>
        <h3 className={styles.item__title}>{broadcast.title}</h3>
        <p className={styles.item__number}>Камера №{broadcast.number}</p>
      </div>
    </>
  )
}
