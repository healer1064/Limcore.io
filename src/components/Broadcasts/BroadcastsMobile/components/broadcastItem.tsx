import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../styles.module.scss'
import { useTranslation } from 'react-i18next'

export const BroadcastItem = ({ broadcast }) => {
  const [t] = useTranslation()
  const [fullScreen, setFullScreen] = useState(false)

  const fontFamily = {
    fontFamily: 'Montserrat',
  }

  return (
    <>
      <div className={classNames(styles.broadcast__item, fullScreen && styles.fullScreen)}>
        <iframe
          className={classNames(styles.broadcast__videoFrame, fullScreen && styles.active)}
          src={broadcast.src}
          frameBorder='0'
          allowFullScreen
        />
        <button className={styles.fullScreenToggler} onClick={() => setFullScreen((prev) => !prev)} type='button' />
      </div>
      <div className={styles.item__text}>
        <h3 className={styles.item__title} style={fontFamily}>
          {broadcast.title}
        </h3>
        <p className={styles.item__number} style={fontFamily}>
          {t('stream_camera')} {broadcast.number}
        </p>
      </div>
    </>
  )
}
