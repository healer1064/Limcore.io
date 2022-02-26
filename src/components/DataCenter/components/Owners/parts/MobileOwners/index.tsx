import { ExternalLink } from '@components/ExternalLink'
import React from 'react'
import { OwnersCounter } from '../OwnersCounter'
import styles from './style.module.scss'
import { MobileTable } from './parts/MobileTable'
import { MobileSearchModal } from '@components/DataCenter/components/MobileSearchModal'

export const MobileOwners = ({ number, data }) => {
  return (
    <>
      <div className={styles.owners_container}>
        <OwnersCounter number={number} isMobile />
        <div className={styles.text_wrapper}>
          <p className={styles.owners_heading}>Владельцы</p>
          <p className={styles.owners_description}>С lock up периодом</p>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.table__header}>
          <p className={styles.table__wallets_number}>Всего кошельков: {number}</p>
          <div className={styles.dot} />
          <ExternalLink isMobile link='https://bscscan.com' text='BscScan' />
          <MobileSearchModal />
        </div>
        <div className={styles.table__container}>
          <MobileTable data={data} />
        </div>
      </div>
    </>
  )
}
