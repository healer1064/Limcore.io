import React, { useEffect, useState } from 'react'
import { DisksSwiper } from './parts/DisksSwiper/DisksSwiper'
import { DiskChart } from './parts/DiskChart/DiskChart'

const mock = [
  {
    id: 1,
    name: 'Harvester1',
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
    name: 'Harvester2',
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
    name: 'Harvester3',
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
    name: 'Harvester4',
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
    name: 'Harvester5',
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
    name: 'Harvester6',
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
  const [activeTab, setActiveTab] = useState(NaN)

  useEffect(() => {
    setActiveTab(mock[0].id)
  }, [])

  return (
    <>
      {desktop ? (
        <>
          <DisksSwiper data={mock} onClick={setActiveTab} activeTab={activeTab} />
          <DiskChart
            disk={mock.find((item) => {
              return item.id === activeTab
            })}
          />
          <div>DESKTOP_TABLE</div>
        </>
      ) : (
        <>
          <DisksSwiper data={mock} onClick={setActiveTab} activeTab={activeTab} />
          <DiskChart
            disk={mock.find((item) => {
              return item.id === activeTab
            })}
          />
          <div>MOBILE_TABLE</div>
        </>
      )}
    </>
  )
}
