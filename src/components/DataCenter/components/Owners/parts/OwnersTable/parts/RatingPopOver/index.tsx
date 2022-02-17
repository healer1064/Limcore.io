import styles from './style.module.scss'
import React, { useState } from 'react'
import { ReactComponent as OliveInfoIcon } from '@icons/oliveInfoIcon.svg'
import { PopOver } from '../PopOver'

export const RatingPopOver = ({ text }) => {
  const [isHover, setIsHover] = useState(false)

  function onMouseEnterHandler() {
    setIsHover(true)
  }

  function onMouseLeaveHandler() {
    setIsHover(false)
  }

  return (
    <div
      onMouseEnter={() => onMouseEnterHandler()}
      onMouseLeave={() => onMouseLeaveHandler()}
      className={styles.icon_wrapper}
    >
      Рейтинг
      <OliveInfoIcon className={styles.icon_info} />
      <PopOver text={text} isHover={isHover} />
    </div>
  )
}
