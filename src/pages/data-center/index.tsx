import React from 'react'
import styles from './styles.module.scss'
import { Footer } from '@components/Footer'
import { DataCenter } from '@components/DataCenter/DataCenter'

export const DataCenterPage: React.FC = () => {
  return (
    <div className={styles.dataCenterPage}>
      <DataCenter className={styles.dataCenter} />
      <Footer />
    </div>
  )
}
