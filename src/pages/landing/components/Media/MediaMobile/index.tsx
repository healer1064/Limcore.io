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

SwiperCore.use([Pagination])

export const MediaMobile = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <h4 className={Styles.caption}>СМИ о нас</h4>
        <div className={Styles.container}>
          <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide className={Styles.slide}>
              <div className={Styles.block}>
                <div className={Styles.image}>
                  <a
                    className={Styles.image}
                    href='https://blockchain-life.com/europe/ru/news/kak-dobyvaetsya-kriptovalyuta-v-rossii/'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    <img src={mediaImage} alt='Изображение' />
                  </a>
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
            <SwiperSlide className={Styles.slide}>
              <div className={Styles.block}>
                <div className={Styles.image}>
                  {/* <img src={limcInterview} alt='Изображение' /> */}
                  <a
                    className={Styles.image}
                    href='https://coinpost.ru/p/interview-limcore'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    <img src={limcInterview} alt='Изображение' />
                  </a>
                </div>
                <span className={Styles.title}>
                  CEO Limcore: инвестиции в майнинг от Limcore — альтернатива банковским депозитам
                </span>
                <p className={Styles.description}>
                  Limcore: чем примечателен проект и какие преимущества могут получить ранние инвесторы
                </p>
                <div className={Styles.row}>
                  <a
                    className={Styles.link}
                    href='https://coinpost.ru/p/interview-limcore'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    coinpost.ru
                  </a>
                  <span className={Styles.date}>01.11.2021</span>
                </div>
                {/*  <div className={Styles.empty}>Совсем скоро здесь появятся еще новости о Limcore</div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
