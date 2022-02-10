import React from 'react'
import styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import img from '../../../../assets/images/p_svg.svg'

export const Equipment: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <section className={styles.equipment}>
      <div className={styles.map} />
      <div className={styles.container}>
        <h2 className={styles.title}>Где располагается оборудование</h2>
        <div className={styles.block}>
          <div className={styles.desck}>
            <p>
              Мы приобретаем необходимое оборудование, <br /> располагая его децентрализованно в странах Евросоюза
            </p>
            <img src={img} alt='img' />
          </div>
        </div>
      </div>
    </section>
  )
}
