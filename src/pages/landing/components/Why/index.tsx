import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Lottie from 'react-lottie'
import packmann from '@animations/packman.json'
import { useInView } from 'react-intersection-observer'

export const Why: React.FC = () => {
  const [isAnimStopped, setIsAnimStopped] = useState(true)
  const { ref, inView } = useInView({ rootMargin: '50px' })

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: packmann,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (inView) {
      setIsAnimStopped(false)
    }
  }, [inView])

  return (
    <section className={styles.why}>
      <div className={styles.border} />
      <div className={styles.border__center} />
      <div className={styles.container} ref={ref}>
        <h2 className={styles.title}>Почему стоимость LIMC будет раст</h2>
        <p className={styles.description}>
          Экосистема Limcore не стоит на месте! Мы добавляем новые токены для майнинга и коины для валидации, увеличивая
          доход холдеров LIMC
        </p>
        <Lottie options={defaultOptions} isStopped={isAnimStopped} />
      </div>
    </section>
  )
}
