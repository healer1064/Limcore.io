import React from 'react'
import Slider from './Slider/Slider'
import styles from './styles.module.scss'
import { Scroll } from './Scroll'
// import { arrNews } from '../constants'

export const MobileNews = () => {
  return (
    <section className={styles.mobile}>
      <h1 className={styles.mobile__title}>Новости проекта</h1>
      <div className={styles.mobile__cards}>
        <a className={styles.mobile__link}>Присоединиться к чату &#129125;</a>
        <Slider />
      </div>
      <Scroll />
    </section>
  )
}
