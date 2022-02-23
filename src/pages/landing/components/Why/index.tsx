import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Lottie } from '@crello/react-lottie'
import packmann from '@animations/packman.json'
import { useInView } from 'react-intersection-observer'
import { TAnimStates } from '@lib/utils/types'

export const Why: React.FC = () => {
  const [animState, setAnimState] = useState<TAnimStates>('stopped')
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
      setAnimState('playing')
    }
  }, [inView])

  return (
    <section className={styles.why}>
      <div className={styles.border} />
      <div className={styles.border__center} />
      <div className={styles.container} ref={ref}>
        <h2 className={styles.title}>Почему стоимость LIMC будет расти</h2>
        <p className={styles.description}>
          Экосистема Limcore не стоит на месте! Мы добавляем новые токены для майнинга и коины для валидации, увеличивая
          доход холдеров LIMC
        </p>
        <Lottie config={defaultOptions} playingState={animState} />
      </div>
    </section>
  )
}
