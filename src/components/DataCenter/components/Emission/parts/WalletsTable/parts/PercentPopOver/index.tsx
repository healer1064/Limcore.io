import styles from './style.module.scss'
import React, { useState } from 'react'
import { PopOver } from '../PopOver'
import { ReactComponent as OliveInfoIcon } from '@icons/oliveInfoIcon.svg'

export const PercentPopOver = () => {
  const [isHover, setIsHover] = useState(false)

  function onMouseEnterHandler() {
    setIsHover(true)
  }

  function onMouseLeaveHandler() {
    setIsHover(false)
  }

  return (
    <div className={styles.icon_wrapper}>
      % владения
      <OliveInfoIcon
        className={styles.icon_info}
        onMouseEnter={() => onMouseEnterHandler()}
        onMouseLeave={() => onMouseLeaveHandler()}
      />
      <PopOver left='57%' top='5%' isHover={isHover}>
        <div className={styles.text}>Процент владения от общей мощности Limcore</div>
      </PopOver>
    </div>
  )
}
