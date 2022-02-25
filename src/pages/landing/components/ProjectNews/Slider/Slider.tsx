import React, { useState } from 'react'
import styles from '../styles.module.scss'
import { arrNews } from '../constants'

export const Slider = () => {
  const [index, setIndex] = useState(0)
  const [animation, setAnimation] = useState(false)
  let count = 0
  const handleNextNews = () => {
    setInterval(() => {
      setAnimation(true)
      // classNames(styles.news__card, animation ? styles.animation : '')
      // handleAnimation()
    }, 0)
    setAnimation(false)
    setIndex((index + 1) % arrNews.length)
  }
  const handlePrevNews = () => {
    // classNames(styles.news__card, animation && styles.animation)
    setInterval(() => {
      handleAnimation()
    }, 0)
    setIndex((index + 1) % arrNews.length)
    setAnimation(false)
  }
  const handleAnimation = () => {
    setAnimation(true)
  }
  return (
    <div className={styles.news__cards}>
      <a href='#' className={styles.news__link} target='_blank' rel='noopener noreferrer'>
        Присоединиться к чату &#129125;
      </a>
      <div className={styles.news__hidden} key={count++}>
        <div className={styles.news__card_grid}>
          <div className={animation ? styles.animation : styles.news__card}>
            <p className={styles.news__card_date}>{arrNews[index].date}</p>
            <p className={styles.news__card_description}>{arrNews[index].description}</p>
            <p className={styles.news__card_date}>{arrNews[index].time}</p>
          </div>
          <div className={animation ? styles.anim : styles.news__shadow} />
        </div>
        <div className={styles.news__card_annotation} style={{ marginTop: '48px' }}>
          <p className={styles.news__card_date}>{arrNews[(index + 1) % arrNews.length].date}</p>
          <p className={styles.news__card_description}>{arrNews[(index + 1) % arrNews.length].annotation}</p>
          <p className={styles.news__card_date}>{arrNews[(index + 1) % arrNews.length].time}</p>
        </div>
      </div>
      <div className={styles.news__div}>
        <button className={styles.news__button} onClick={handleNextNews} />
        <button className={styles.news__button} onClick={handlePrevNews} />
      </div>
    </div>
  )
}
