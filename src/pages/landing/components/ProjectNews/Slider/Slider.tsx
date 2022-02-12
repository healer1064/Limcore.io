import React, { useState } from 'react'
import styles from '../styles.module.scss'

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
    description: `Какой то текст Какой то текст Какой то текст Какой то текст 
     Какой то текст Какой то текст Какой то текст Какой то текст Какой то текст
     Какой то текст Какой то текст
     Какой то текст Какой то текст Какой то текст Какой то текст Какой то текст Какой то текст `,
    time: '00:00',
    annotation: `У нас много новостей🔥 Давайте обо всем по порядку, ладно`,
  },
  {
    date: '10.01.2022',
    description: `Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест 
    Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест Тест 
    Тест Тест Тест Тест Тест Тест Тест`,
    time: '10.00',
    annotation: `Произошли изменения в нашей дорожной карте`,
  },
]

export const Slider = (props) => {
  const [index, setIndex] = useState(0)
  const [animation, setAnimation] = useState(false)
  let count = 0
  const handleNextNews = () => {
    setIndex((index + 1) % news.length)
    // if (index === news.length) {
    //   setIndex(0)
    // }
    handleAnimation()
  }
  const handleAnimation = () => {
    setAnimation(true)
  }
  return (
    <div className={animation ? styles.animation : styles.news__cards}>
      <a href='#' className={styles.news__link} target='_blank' rel='noopener noreferrer'>
        Присоединиться к чату &#129125;
      </a>
      <div className={styles.news__hidden} key={count++}>
        <div className={styles.news__card_grid}>
          <div className={styles.news__shadow} />
          <div className={styles.news__card}>
            <p className={styles.news__card_date}>{news[index].date}</p>
            <p className={styles.news__card_description}>{news[index].description}</p>
            <p className={styles.news__card_date}>{news[index].time}</p>
          </div>
        </div>
        <div className={styles.news__card} style={{ marginTop: '48px' }}>
          <p className={styles.news__card_date}>{news[index].date}</p>
          <p className={styles.news__card_description}>{news[index].annotation}</p>
          <p className={styles.news__card_date}>{news[index].time}</p>
        </div>
      </div>
      <div className={styles.news__div}>
        <button className={styles.news__button} onClick={handleNextNews} />
        <button className={styles.news__button} onClick={() => setIndex((index + 1) % news.length)} />
      </div>
    </div>
  )
}
