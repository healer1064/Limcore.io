import React from 'react'
import styles from './styles.module.scss'
import { DvdScreen } from './DvdScreen/DvdScreen'
import { Slider } from './Slider/Slider'
import { MobileNews } from './MobilePage/MobileNews'
export const ProjectNews = ({ clientWidth }) => {
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>Новости проекта</h3>
      <div className={styles.news__flex}>
        <Slider />
        <div className={styles.news__position__relative}>
          <DvdScreen width={985} height={560} />
        </div>
      </div>
      {clientWidth > 768 ? <MobileNews /> : ''}
    </section>
  )
}
