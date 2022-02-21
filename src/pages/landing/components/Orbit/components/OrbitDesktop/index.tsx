import React from 'react'
import styles from './styles.module.scss'

import logoSF from '../../../../../../assets/images/logoSF.png'
import logoAntro from '../../../../../../assets/images/logoAntro.png'
import logoLH from '../../../../../../assets/images/logoLH.png'
import logoBL from '../../../../../../assets/images/logoBL.png'

export const OrbitDesktop: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.circle__border}>
          <span className={styles.circle__item} />
        </div>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={logoBL} alt='BL' className={styles.img} />
        </li>
        <li className={styles.item}>
          <img src={logoSF} alt='SF' className={styles.img} />
        </li>
        <li className={styles.item}>
          <img src={logoAntro} alt='Antro' className={styles.img} />
        </li>
        <li className={styles.item}>
          <img src={logoLH} alt='LH' className={styles.img} />
        </li>
      </ul>
    </div>
  )
}
