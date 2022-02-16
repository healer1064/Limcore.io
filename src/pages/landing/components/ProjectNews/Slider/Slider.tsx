import React, { useState } from 'react'
import styles from '../styles.module.scss'
import classNames from 'classnames'
const news = [
  {
    date: '01.01.2022',
    description: `Ребята, привет!👋🏼
          🔥У нас много новостей🔥 Давайте обо всем по порядку, ладно?
          Во-первых: мы проводим ребрендинг😎
          Совсем скоро сайт и вся айдентика компании поменяется на 180 градусов!💥
          🔥Вторая новость: произошли изменения в нашей дорожной карте`,
    time: '13.58',
    annotation: `Совсем скоро сайт и вся айдентика компании поменяется на 180 градусов!`,
  },
  {
    date: '12.12.2021',
    description: `У нас много новостей🔥 Давайте обо всем по порядку У нас много новостей🔥 Давайте обо всем по порядку
     У нас много новостей🔥 Давайте обо всем по порядку У нас много новостей🔥
     У нас много новостей🔥 Давайте обо всем по порядку У нас много новостей🔥 Давайте обо всем по порядку У нас много новостей🔥`,
    time: '00:00',
    annotation: `У нас много новостей🔥 Давайте обо всем по порядку, ладно`,
  },
  {
    date: '10.01.2022',
    description: `Произошли изменения в нашей дорожной карте 
    Произошли изменения в нашей дорожной карте Произошли изменения в нашей дорожной карте Произошли изменения в нашей дорожной карте Произошли изменения в нашей дорожной карте 
    Произошли изменения в нашей дорожной карте Произошли изменения в нашей дорожной карте Произошли изменения в нашей дорожной карте `,
    time: '10.00',
    annotation: `Произошли изменения в нашей дорожной карте`,
  },
]

export const Slider = (props) => {
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
    setIndex((index + 1) % news.length)
  }
  const handlePrevNews = () => {
    // classNames(styles.news__card, animation && styles.animation)
    setInterval(() => {
      handleAnimation()
    }, 0)
    setAnimation(false)
    setIndex((index + 1) % news.length)
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
            <p className={styles.news__card_date}>{news[index].date}</p>
            <p className={styles.news__card_description}>{news[index].description}</p>
            <p className={styles.news__card_date}>{news[index].time}</p>
          </div>
          <div className={animation ? styles.anim : styles.news__shadow} />
        </div>
        <div className={styles.news__card_annotation} style={{ marginTop: '48px' }}>
          <p className={styles.news__card_date}>{news[(index + 1) % news.length].date}</p>
          <p className={styles.news__card_description}>{news[(index + 1) % news.length].annotation}</p>
          <p className={styles.news__card_date}>{news[(index + 1) % news.length].time}</p>
        </div>
      </div>

      <div className={styles.news__div}>
        <button className={styles.news__button} onClick={handleNextNews} />
        <button className={styles.news__button} onClick={handlePrevNews} />
      </div>
    </div>
  )
}
