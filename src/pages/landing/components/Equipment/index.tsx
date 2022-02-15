import React from 'react'
import styles from './styles.module.scss'
import underLine from '../../../../assets/images/p_svg.svg'
import underlineMob from '../../../../assets/images/underline_mob.png'
import mapMob from '../../../../assets/images/map_mob.svg'
import useWindowSize from '@helpers/useWindowSizeHook'

export const Equipment: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <section className={styles.equipment}>
      <div className={styles.map} />
      <div className={styles.container}>
        <h2 className={styles.title}>Где располагается оборудование</h2>
        <div className={styles.block}>
          <img src={mapMob} className={styles.map_mob} />
          <div className={styles.desck}>
            <p className={styles.p}>
              Мы приобретаем необходимое оборудование, располагая его децентрализованно в странах Евросоюза
            </p>
            <img src={width > 786 ? underLine : underlineMob} />
          </div>
        </div>
      </div>
    </section>
  )
}
