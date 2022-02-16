import React, { useEffect, useState } from 'react'
import styles from '../styles.module.scss'

const MS_PER_FRAME = 5
const widthDVDLogo = 195
const heightDVDLogo = 91
const width = 900
const height = 500

export const DvdScreen = () => {
  const [x, setX] = useState(Math.random() * (0 - width - widthDVDLogo) + width - widthDVDLogo)
  const [y, setY] = useState(Math.random() * (0 - height - heightDVDLogo) + height - heightDVDLogo)

  const [xSpeed, setXSpeed] = useState(1)
  const [ySpeed, setYSpeed] = useState(1)

  const moveLinks = () => {
    setX(x + xSpeed)
    setY(y + ySpeed)

    if (x + widthDVDLogo >= width || x <= 0) {
      setXSpeed(-xSpeed)
    }

    if (y + heightDVDLogo >= height || y <= 0) {
      setYSpeed(-ySpeed)
    }
  }

  useEffect(() => {
    setInterval(() => {
      moveLinks()
    }, MS_PER_FRAME)
  })

  return (
    <div className={styles.news__animation_links}>
      <div className={styles.news__position__absolute}>
        <a href='#' className={styles.news__div_links} style={{ transform: `translate(${x}px, ${y}px)` }}>
          Telegram &#129125;
        </a>
      </div>
    </div>
  )
}
