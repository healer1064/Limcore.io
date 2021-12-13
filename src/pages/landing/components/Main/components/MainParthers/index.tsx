import React from 'react'

import useWindowSize from '@helpers/useWindowSizeHook'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import Styles from './styles.module.scss'

import amdIcon from '@icons/amd-epyc.svg'
import blockchainIcon from '@icons/blockchain-life.svg'
import supermicrIcon from '@icons/supermicr.svg'
import softlineIcon from '@icons/softline.svg'
import mojoIcon from '@icons/logoMojo.svg'

SwiperCore.use([Autoplay])

const swiperProps = {
  spaceBetween: 60,
  slidesPerView: 2,
  // loop: true,
}

export const MainParthers: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <ul className={Styles.parthers}>
      {width >= 768 ? (
        <>
          <img src={blockchainIcon} alt='Иконка' />
          <img src={amdIcon} alt='Иконка' />
          <img src={softlineIcon} alt='Иконка' />
          <img src={supermicrIcon} alt='Иконка' />
          <img src={mojoIcon} alt='Иконка' />
        </>
      ) : (
        <Swiper className={Styles.swiper} /* autoplay={{ delay: 3000 }} */ {...swiperProps}>
          <SwiperSlide className={Styles.slide}>
            <img src={blockchainIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.slide}>
            <img src={amdIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.slide}>
            <img src={softlineIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.slide}>
            <img src={supermicrIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.slide}>
            <img src={mojoIcon} alt='Иконка' />
          </SwiperSlide>
        </Swiper>
      )}
    </ul>
  )
}
