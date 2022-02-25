import React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as AntroLogo } from '@icons/antroLogo.svg'
import { ReactComponent as BlockchainLife } from '@icons/BLLogo.svg'
import { ReactComponent as LhLogo } from '@icons/LHLogo.svg'
import { ReactComponent as Softline } from '@icons/softlineLogo.svg'

export const OrbitDesktop: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.system}>
        <div className={styles.sun} />
        <div className={styles.orbit}>
          <div className={styles.planet} />
        </div>
      </div>
      <div className={styles.logo_wrapper}>
        <BlockchainLife className={styles.icon} />
        <Softline className={styles.icon} />
        <AntroLogo className={styles.icon} />
        <LhLogo className={styles.icon} />
      </div>
    </div>
  )
}
