import React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as AntroLogo } from '@icons/mobileAntroLogo.svg'
import { ReactComponent as BlockchainLife } from '@icons/mobileBLLogo.svg'
import { ReactComponent as LhLogo } from '@icons/mobileLHLogo.svg'
import { ReactComponent as Softline } from '@icons/mobileSoftlineLogo.svg'

export const OrbitMobile: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.system}>
        <div className={styles.sun} />
        <div className={styles.orbit}>
          <div className={styles.planet} />
        </div>
      </div>
      <div className={styles.logo_wrapper}>
        <div className={styles.logo_group}>
          <BlockchainLife className={styles.icon} />
          <Softline className={styles.icon} />
        </div>
        <div className={styles.logo_group}>
          <LhLogo className={styles.icon} />
          <AntroLogo className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
