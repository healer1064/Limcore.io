import styles from './style.module.scss'
import React, { useState } from 'react'
import { ReactComponent as OliveInfoIcon } from '@icons/oliveInfoIcon.svg'
import { PopOver } from '../PopOver'
import { ReactComponent as GreyRating } from '@icons/raitingGrey.svg'
import { ReactComponent as OrangeRating } from '@icons/raitingOrange.svg'
import { ReactComponent as PurpleRating } from '@icons/raitingPurple.svg'
import { ReactComponent as RedRating } from '@icons/redRaiting.svg'

export const RatingPopOver = () => {
  const [isHover, setIsHover] = useState(false)

  function onMouseEnterHandler() {
    setIsHover(true)
  }

  function onMouseLeaveHandler() {
    setIsHover(false)
  }

  return (
    <div className={styles.icon_wrapper}>
      Рейтинг
      <OliveInfoIcon
        className={styles.icon_info}
        onMouseEnter={() => onMouseEnterHandler()}
        onMouseLeave={() => onMouseLeaveHandler()}
      />
      <PopOver left='8%' top='5%' isHover={isHover}>
        <ul className={styles.list}>
          <li className={styles.list_element}>
            <div className={styles.element_content}>
              <GreyRating className={styles.icon} />1 TB – 500 TB
            </div>
          </li>
          <li className={styles.list_element}>
            <div className={styles.element_content}>
              <OrangeRating className={styles.icon} />
              501 TB – 5,000 TB
            </div>
          </li>
          <li className={styles.list_element}>
            <div className={styles.element_content}>
              <PurpleRating className={styles.icon} />
              5,000 TB – 50,000 TB
            </div>
          </li>
          <li className={styles.list_element}>
            <div className={styles.element_content}>
              <RedRating className={styles.icon} />
              &#60; 50,000 TB
            </div>
          </li>
        </ul>
        <div className={styles.description}>Ваш рейтинг зависит от количества купленных терабайт</div>
      </PopOver>
    </div>
  )
}
