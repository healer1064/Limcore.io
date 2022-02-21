import React from 'react'
import styles from './styles.module.scss'
import { Slider } from './Slider/Slider'
import { DvdScreen } from './DvdScreen'

export const ProjectNews = () => {
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>Новости проекта</h3>
      <div className={styles.news__flex}>
        <Slider />
        <DvdScreen />
      </div>
    </section>
  )
}
