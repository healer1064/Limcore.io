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
  const parthers = [
    {
      id: 1,
      src: blockchainIcon,
      alt: 'Icon',
    },
    {
      id: 2,
      src: amdIcon,
      alt: 'Icon',
    },
    {
      id: 3,
      src: softlineIcon,
      alt: 'Icon',
    },
    {
      id: 4,
      src: supermicrIcon,
      alt: 'Icon',
    },
    {
      id: 5,
      src: mojoIcon,
      alt: 'Icon',
    },
  ]

  return (
    <div className={Styles.parthers}>
      {width >= 768 ? (
        parthers.map((parther) => <img key={parther.id} src={parther.src} alt={parther.alt} />)
      ) : (
        <Swiper className={Styles.swiper} /* autoplay={{ delay: 3000 }} */ {...swiperProps}>
          {parthers.map((parther) => (
            <SwiperSlide key={parther.id} className={Styles.slide}>
              <img src={parther.src} alt={parther.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
