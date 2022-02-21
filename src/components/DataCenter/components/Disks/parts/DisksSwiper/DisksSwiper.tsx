import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { DiskSlide } from './DiskSlide'
import styles from './styles.module.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

export const DisksSwiper = ({ onClick, activeTab, data }) => {
  return (
    <div className={styles.swiper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <DiskSlide data={item} onClick={() => onClick(item.id)} active={item.id === activeTab} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
