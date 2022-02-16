import React from 'react'
import styles from './styles.module.scss'
import Lottie from 'react-lottie'
import packmann from '@animations/packman.json'

export const Why: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: packmann,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему стоимость LIMC будет раст</h2>
        <p className={styles.description}>
          Экосистема Limcore не стоит на месте! Мы добавляем новые токены для майнинга и коины для валидации, увеличивая
          доход холдеров LIMC
        </p>
        <Lottie options={defaultOptions} />
      </div>
    </section>
  )
}
