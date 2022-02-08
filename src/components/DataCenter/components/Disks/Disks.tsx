import React from 'react'
import { DisksSwiper } from './parts/DisksSwiper/DisksSwiper'
import { DiskChart } from './parts/DiskChart/DiskChart'
import styles from './styles.module.scss'

export const Disks = () => {
  return (
    <>
      <DisksSwiper />
      <DiskChart />
      <div>TABLE</div>
    </>
  )
}
