import React from 'react'
import styles from './styles.module.scss'
import Lottie from 'react-lottie'
import map from '@animations/map.json'
import useWindowSize from '@helpers/useWindowSizeHook'
import img from '../../../../assets/images/p_img.png'

export const Equipment: React.FC = () => {
  const { width } = useWindowSize()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: map,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <section className={styles.equipment}>
      <div className={styles.container}>
        <h2 className={styles.title}>Где располагается оборудование</h2>
        <div className={styles.block}>
          <div className={styles.desck}>
            <p>Мы приобретаем необходимое оборудование, располагая его децентрализованно в странах Евросоюза</p>
            <img src={img} alt='img' />
          </div>
          <Lottie options={defaultOptions} height={1024} width={809} />
        </div>
      </div>
    </section>
  )
}
