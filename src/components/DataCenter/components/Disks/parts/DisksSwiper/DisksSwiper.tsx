import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { DiskSlide } from './DiskSlide'
import styles from './styles.module.scss'
/* import 'swiper/swiper-bundle.min.css' */
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

export const DisksSwiper = ({ onClick, activeTab, data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        className={styles.swiper}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.disk__list}>
              <DiskSlide data={item} onClick={() => onClick(item.id)} active={item.id === activeTab} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
