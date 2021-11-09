import React, { useState } from 'react'
import styles from './style.module.scss'
import { broadcastsList } from '../broadcastsList'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs, Keyboard } from 'swiper'

SwiperCore.use([Navigation, Thumbs, Keyboard])

export const BroadcastsDesktop = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className={styles.broadcastsContainer}>
      <Swiper
        className={styles.mainSwiper}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        tag='ul'
        keyboard
      >
        {broadcastsList.map((broadcast) => (
          <SwiperSlide className={styles.mainSwiperSlide} key={broadcast.number} tag='li'>
            <div className={styles.mainFrameWrapper}>
              <iframe src={broadcast.src} frameBorder='0' allowFullScreen />
              <div className={styles.slideText}>
                <h3>{broadcast.title}</h3>
                &bull;
                <p>Камера №{broadcast.number}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={15}
        slidesPerView={broadcastsList.length}
        onSwiper={setThumbsSwiper}
        className={styles.thumbSwiper}
        tag='ul'
      >
        {broadcastsList.map((broadcast) => (
          <SwiperSlide className={styles.thumbsSlide} key={broadcast.number} tag='li'>
            <div className={styles.thumbFrameWrapper}>
              <iframe src={broadcast.src} frameBorder='0' />
              <div className={styles.frameToggler} />
            </div>
            <h3>{broadcast.title}</h3>
            <p>Камера №{broadcast.number}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
