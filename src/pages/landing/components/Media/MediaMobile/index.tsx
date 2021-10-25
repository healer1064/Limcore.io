import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import Styles from './styles.module.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import mediaImage from '../../../../../assets/images/media.png'

SwiperCore.use([Pagination])

export const MediaMobile = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <h4 className={Styles.caption}>СМИ о нас</h4>
        <div className={Styles.container}>
          <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className={Styles.slide}>
                <div className={Styles.image}>
                  <img src={mediaImage} alt='Изображение' />
                </div>
                <span className={Styles.title}>Как добывается криптовалюта в России?</span>
                <p className={Styles.description}>
                  Пресс-центр Blockchain Life и CEO Limcore Дмитрий Шумаев обсудили частный майнинг, возможности токена
                  LIMC и любовь к стране
                </p>
                <div className={Styles.row}>
                  <a className={Styles.link} href='/'>
                    Blockchain Life
                  </a>
                  <span className={Styles.date}>24.09.2021</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={Styles.slide}>
                <div className={Styles.empty}>Совсем скоро здесь появятся еще новости о Limcore</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
