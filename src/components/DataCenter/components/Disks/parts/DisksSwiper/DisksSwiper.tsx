import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DiskSlide } from './DiskSlide'

SwiperCore.use([Navigation])

const mock = [
  {
    id: 1,
    name: 'Harvester1',
    current: 150,
    capacity: 900,
  },
  {
    id: 2,
    name: 'Harvester2',
    current: 256,
    capacity: 800,
  },
  {
    id: 3,
    name: 'Harvester3',
    current: 321,
    capacity: 900,
  },
  {
    id: 4,
    name: 'Harvester4',
    current: 534,
    capacity: 900,
  },
  {
    id: 5,
    name: 'Harvester5',
    current: 121,
    capacity: 900,
  },
  {
    id: 6,
    name: 'Harvester6',
    current: 50,
    capacity: 900,
  },
]

export const DisksSwiper = () => {
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    setActiveTab(mock[0].id)
  }, [])

  return (
    <div className={styles.swiper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        {mock.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <DiskSlide
                data={item}
                onClick={() => {
                  setActiveTab(item.id)
                }}
                active={item.id === activeTab}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
