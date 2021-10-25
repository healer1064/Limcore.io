import React from 'react'

import useWindowSize from '@helpers/useWindowSizeHook'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import Styles from './styles.module.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

import left from '@icons/arrow-left-blue.svg'
import right from '@icons/arrow-right-blue.svg'
import diagram from '@images/diagram.png'

SwiperCore.use([Navigation, Pagination])

export const SliderContainer = () => {
  const { width } = useWindowSize()
  return (
    <div className={Styles.container}>
      <Swiper
        slidesPerView={1}
        navigation={
          width >= 768
            ? {
                nextEl: '.next',
                prevEl: '.prev',
              }
            : false
        }
        pagination={
          width < 768
            ? {
                el: `.${Styles.pagination}`,
              }
            : false
        }
      >
        <SwiperSlide>
          <div className={Styles.slide__wrap}>
            <img src={diagram} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Styles.slide__wrap}>
            <img src={diagram} />
          </div>
        </SwiperSlide>
      </Swiper>
      {width >= 768 ? (
        <>
          <button className={`${Styles.button} ${Styles.prev}`}>
            <img src={left} />
          </button>
          <button className={`${Styles.button} ${Styles.next}`}>
            <img src={right} />
          </button>
        </>
      ) : (
        <div className={Styles.pagination} />
      )}
    </div>
  )
}
