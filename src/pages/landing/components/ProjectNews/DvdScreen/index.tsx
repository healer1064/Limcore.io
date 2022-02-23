import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { DvdTelegram } from './DvdTelegram'
import { DvdTwitter } from './DvdTwitter'
import { DvdDiscord } from './DvdDiscord'
import { DvdYoutube } from './DvdYoutube'
import useWindowSize from '../../../../../helpers/useWindowSizeHook'

export const DvdScreen = () => {
  const { width } = useWindowSize()

  const mobileCondition = width <= 768

  const containerRef = useRef(null)

  const [containerWidth, setContainerWidth] = useState<number>(370)

  useEffect(() => {
    setContainerWidth(() => containerRef.current.clientWidth)
    const updateContainerWidth = () => {
      setContainerWidth(() => containerRef.current.clientWidth)
    }
    window.addEventListener('resize', updateContainerWidth)
    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [])

  return (
    <div className={styles.container} id='dvdanim' ref={containerRef}>
      {!mobileCondition && <DvdTelegram width={containerWidth} height={560} />}
      {!mobileCondition && <DvdTwitter width={containerWidth} height={560} />}
      {!mobileCondition && <DvdYoutube width={containerWidth} height={560} />}
      {!mobileCondition && <DvdDiscord width={containerWidth} height={560} />}
    </div>
  )
}
