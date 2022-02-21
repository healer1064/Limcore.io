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
    // <div className={styles.container} style={{ width: `${width - 500}px` }}>
    <div className={styles.container} id='dvdanim' ref={containerRef}>
      {!mobileCondition && <DvdTelegram width={containerWidth} height={560} />}
      {!mobileCondition && <DvdTwitter width={containerWidth} height={560} />}
      {!mobileCondition && <DvdYoutube width={containerWidth} height={560} />}
      {!mobileCondition && <DvdDiscord width={containerWidth} height={560} />}

      {/* {width >= 1280 && <DvdScreen width={985} height={560} />}
      {width > 1000 && width < 1280 && <DvdScreen width={520} height={560} />}
      {width > 768 && width < 1000 && <DvdScreen width={300} height={560} />} */}
    </div>
  )
}
