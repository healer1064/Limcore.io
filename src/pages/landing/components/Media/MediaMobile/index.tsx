import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import Styles from './styles.module.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import mediaImage from '../../../../../assets/images/media.png'
import limcInterview from '../../../../../assets/images/limcInterview.png'
import { useTranslation } from 'react-i18next'

SwiperCore.use([Pagination])

export const MediaMobile = () => {
  const [t] = useTranslation()

  return (
    <>
      <div className={Styles.wrapper}>
        <h4 className={Styles.caption}>{t('mm_main')}</h4>
        <div className={Styles.container}>
          <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide className={Styles.slide}>
              <article className={Styles.block}>
                <div className={Styles.image}>
                  <a
                    className={Styles.image}
                    href='https://blockchain-life.com/europe/ru/news/kak-dobyvaetsya-kriptovalyuta-v-rossii/'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    <img src={mediaImage} alt='Cover' />
                  </a>
                </div>
                <h4 className={Styles.title}>{t('mm1_title')}</h4>
                <p className={Styles.description}>{t('mm1_subtitle')}</p>
                <div className={Styles.row}>
                  <a className={Styles.link} href='/'>
                    Blockchain Life
                  </a>
                  <time className={Styles.date}>24.09.2021</time>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide className={Styles.slide}>
              <article className={Styles.block}>
                <div className={Styles.image}>
                  <a
                    className={Styles.image}
                    href='https://coinpost.ru/p/interview-limcore'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    <img src={limcInterview} alt='Cover' />
                  </a>
                </div>
                <h4 className={Styles.title}>{t('mm2_title')}</h4>
                <p className={Styles.description}>{t('mm2_subtitle')}</p>
                <div className={Styles.row}>
                  <a
                    className={Styles.link}
                    href='https://coinpost.ru/p/interview-limcore'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    coinpost.ru
                  </a>
                  <time className={Styles.date}>01.11.2021</time>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
