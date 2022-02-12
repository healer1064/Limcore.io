import React from 'react'
import styles from './styles.module.scss'
import { DvdScreen } from './DvdScreen/DvdScreen'
import { Slider } from './Slider/Slider'
export const ProjectNews = () => {
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>Новости проекта</h3>
      <div className={styles.news__flex}>
        <Slider />
        <div className={styles.news__position__relative}>
          <DvdScreen />
        </div>
      </div>
    </section>
  )
}
