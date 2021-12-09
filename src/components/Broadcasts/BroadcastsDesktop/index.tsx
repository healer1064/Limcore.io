import React, { useState } from 'react'
import styles from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs, Keyboard } from 'swiper'
import { useTranslation } from 'react-i18next'

SwiperCore.use([Navigation, Thumbs, Keyboard])

export const BroadcastsDesktop = () => {
  const [t] = useTranslation()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const broadcastsList = [
    {
      number: 1,
      src: 'https://rtsp.me/embed/iRTG98h5/',
      title: t('streams_title_1'),
    },
    {
      number: 2,
      src: 'https://rtsp.me/embed/TrD56fbb/',
      title: t('streams_title_1'),
    },
    {
      number: 3,
      src: 'https://rtsp.me/embed/bK2f3neH/',
      title: t('streams_title_2'),
    },
    {
      number: 4,
      src: 'https://rtsp.me/embed/7rDYNfA5/',
      title: t('streams_title_2'),
    },
  ]

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
                <p>
                  {t('stream_camera')} {broadcast.number}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={2}
        slidesPerView={broadcastsList.length - 1}
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
            <p>
              {t('stream_camera')} {broadcast.number}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
