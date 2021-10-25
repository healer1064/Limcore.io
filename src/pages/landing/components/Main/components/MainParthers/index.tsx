import React from 'react'

import useWindowSize from '@helpers/useWindowSizeHook'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import Styles from './styles.module.scss'

import amdIcon from '@icons/amd-epyc.svg'
import blockchainIcon from '@icons/blockchain-life.svg'
import supermicrIcon from '@icons/supermicr.svg'
import softlineIcon from '@icons/softline.svg'

SwiperCore.use([Autoplay])

const swiperProps = {
  slidesPerView: 1,
  loop: true,
}

export const MainParthers: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <div className={Styles.parthers}>
      {width >= 768 ? (
        <>
          <img src={blockchainIcon} alt='Иконка' />
          <img src={amdIcon} alt='Иконка' />
          <img src={softlineIcon} alt='Иконка' />
          <img src={supermicrIcon} alt='Иконка' />
        </>
      ) : (
        <Swiper autoplay={{ delay: 3000 }} {...swiperProps}>
          <SwiperSlide className={Styles.swiperSlide}>
            <img src={blockchainIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperSlide}>
            <img src={amdIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperSlide}>
            <img src={softlineIcon} alt='Иконка' />
          </SwiperSlide>
          <SwiperSlide className={Styles.swiperSlide}>
            <img src={supermicrIcon} alt='Иконка' />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  )
}
