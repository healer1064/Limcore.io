import React, { useEffect, useState } from 'react'
import { DisksSwiper } from './parts/DisksSwiper/DisksSwiper'
import { DiskChart } from './parts/DiskChart/DiskChart'
import { InfoTable } from '@components/DataCenter/components/Disks/parts/InfoTable'
import { InfoTableMobile } from '@components/DataCenter/components/Disks/parts/InfoTable/InfoTableMobile'
import styles from './styles.module.scss'
import { DiskSwiperMobile } from '@components/DataCenter/components/Disks/parts/DiskSwiperMobile'
import Chart from '@components/Chart'

const mock = [
  {
    id: 1,
    name: 'Harvester №1',
    current: 150,
    capacity: 900,
    data: [
      { y: 1, x: '00:00' },
      { y: 15, x: '04:00' },
      { y: 23.5, x: '08:00' },
      { y: 14, x: '12:00' },
      { y: 43.2, x: '16:00' },
      { y: 56.7, x: '20:00' },
      { y: 56.7, x: '23:59' },
    ],
  },
  {
    id: 2,
    name: 'Harvester №2',
    current: 256,
    capacity: 800,
    data: [
      { y: 11, x: '00:00' },
      { y: 24, x: '04:00' },
      { y: 13.5, x: '08:00' },
      { y: 15, x: '12:00' },
      { y: 47.2, x: '16:00' },
      { y: 88.7, x: '20:00' },
      { y: 76.7, x: '23:59' },
    ],
  },
  {
    id: 3,
    name: 'Harvester №3',
    current: 321,
    capacity: 900,
    data: [
      { y: 19, x: '00:00' },
      { y: 11, x: '04:00' },
      { y: 23.5, x: '08:00' },
      { y: 64, x: '12:00' },
      { y: 7.2, x: '16:00' },
      { y: 45.7, x: '20:00' },
      { y: 53.7, x: '23:59' },
    ],
  },
  {
    id: 4,
    name: 'Harvester №4',
    current: 534,
    capacity: 900,
    data: [
      { y: 16, x: '00:00' },
      { y: 23, x: '04:00' },
      { y: 29.5, x: '08:00' },
      { y: 18, x: '12:00' },
      { y: 43.2, x: '16:00' },
      { y: 56.7, x: '20:00' },
      { y: 89.7, x: '23:59' },
    ],
  },
  {
    id: 5,
    name: 'Harvester №5',
    current: 121,
    capacity: 900,
    data: [
      { y: 14, x: '00:00' },
      { y: 10, x: '04:00' },
      { y: 23.5, x: '08:00' },
      { y: 14, x: '12:00' },
      { y: 43.2, x: '16:00' },
      { y: 56.7, x: '20:00' },
      { y: 56.7, x: '23:59' },
    ],
  },
  {
    id: 6,
    name: 'Harvester №6',
    current: 50,
    capacity: 900,
    data: [
      { y: 80, x: '00:00' },
      { y: 75, x: '04:00' },
      { y: 66, x: '08:00' },
      { y: 53, x: '12:00' },
      { y: 82.2, x: '16:00' },
      { y: 86.7, x: '20:00' },
      { y: 85.7, x: '23:59' },
    ],
  },
]

export interface IDisks {
  desktop: boolean
}

export const Disks: React.FC<IDisks> = ({ desktop }) => {
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    setActiveTab(mock[0].id)
  }, [])

  return (
    <>
      {desktop ? (
        <>
          <div className={styles.disks__wrapper}>
            <DisksSwiper data={mock} onClick={setActiveTab} activeTab={activeTab} />
            <DiskChart
              disk={mock.find((item) => {
                return item.id === activeTab
              })}
            />
            <div className={styles.chartSection}>
              <Chart />
            </div>
          </div>
          <InfoTable />
        </>
      ) : (
        <>
          <div className={styles.disks__wrapper}>
            <DiskSwiperMobile data={mock} setActiveTab={setActiveTab} activeTab={activeTab} />
            <DiskChart
              disk={mock.find((item) => {
                return item.id === activeTab
              })}
            />
            <div className={styles.chartSection}>
              <Chart />
            </div>
          </div>
          <InfoTableMobile />
        </>
      )}
    </>
  )
}
