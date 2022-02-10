import React from 'react'
import styles from './styles.module.scss'
import map from '../../../../assets/images/map.png'
import useWindowSize from '@helpers/useWindowSizeHook'
import img from '../../../../assets/images/p_img.png'

export const Equipment: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <section className={styles.equipment}>
      <img className={styles.map} src={map} alt='map' />
      <div className={styles.container}>
        <h2 className={styles.title}>Где располагается оборудование</h2>
        <div className={styles.block}>
          <div className={styles.desck}>
            <p>Мы приобретаем необходимое оборудование, располагая его децентрализованно в странах Евросоюза</p>
            <img src={img} alt='img' />
          </div>
        </div>
      </div>
    </section>
  )
}
