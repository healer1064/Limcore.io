import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { DvdScreen } from './DvdScreen/DvdScreen'
import { Slider } from './Slider/Slider'
export const ProjectNews = ({ clientWith }) => {
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>Новости проекта</h3>
      <div className={styles.news__flex}>
        <Slider />
        <div className={styles.news__position__relative}>
          {clientWith >= 1280 && <DvdScreen width={985} height={560} />}
          {clientWith > 1000 && clientWith < 1280 && <DvdScreen width={520} height={560} />}
          {clientWith > 768 && clientWith < 1000 && <DvdScreen width={300} height={560} />}
        </div>
      </div>
    </section>
  )
}
