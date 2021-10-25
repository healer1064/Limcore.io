import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './styles.module.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import SwiperCore, { Navigation } from 'swiper'
import left from '@icons/arrow-left-blue.svg'
import right from '@icons/arrow-right-blue.svg'
import diagram from '@images/diagram.png'

SwiperCore.use([Navigation])

export const SliderContainer = () => {
  return (
    <div className={Styles.container}>
      <button className={`${Styles.button} ${Styles.prev}`}>
        <img src={left} />
      </button>
      <button className={`${Styles.button} ${Styles.next}`}>
        <img src={right} />
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
      >
        <SwiperSlide>
          <div className={Styles.slide__wrap}>
            <img src={diagram} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
