import React from 'react'
import styles from './styles.module.scss'
import { DvdTelegram } from './DvdTelegram'
import { DvdTwitter } from './DvdTwitter'
import { DvdDiscord } from './DvdDiscord'
import { DvdYoutube } from './DvdYoutube'
import useWindowSize from '../../../../../helpers/useWindowSizeHook'

export const DvdScreen = () => {
  const { width } = useWindowSize()

  return (
    // <div className={styles.container} style={{ width: `${width - 500}px` }}>
    <div className={styles.container}>
      {width >= 1280 && <DvdTelegram width={800} height={560} />}
      {width >= 1280 && <DvdTwitter width={800} height={560} />}
      {width >= 1280 && <DvdYoutube width={800} height={560} />}
      {width >= 1280 && <DvdDiscord width={800} height={560} />}

      {/* {width >= 1280 && <DvdScreen width={985} height={560} />}
      {width > 1000 && width < 1280 && <DvdScreen width={520} height={560} />}
      {width > 768 && width < 1000 && <DvdScreen width={300} height={560} />} */}
    </div>
  )
}
