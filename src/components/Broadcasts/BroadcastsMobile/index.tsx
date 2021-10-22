import React from 'react'
import styles from './styles.module.scss'

import { testArray } from '../../../pages/cabinet/test-data'

export const BroadcastsMobile = (props) => {
  const { handleClick } = props

  return (
    <div className={styles.broadcast}>
      <ul className={styles.broadcast__items}>
        {testArray &&
          testArray.map((item, index) => {
            return (
              <li key={index} className={styles.broadcast__item}>
                <div className={styles.broadcast__videoFrame}>
                  <img src={item.preview} className={styles.broadcast__video} />
                  <button type='button' className={styles.broadcast__button} onClick={handleClick} />
                </div>
                <div className={styles.broadcast__info}>
                  <p className={styles.broadcast__title}>{item.title}</p>
                  <p className={styles.broadcast__source}>{item.source}</p>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
