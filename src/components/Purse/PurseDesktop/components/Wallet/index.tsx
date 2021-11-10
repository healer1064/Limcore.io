import React, { FC, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

import { walletSvg } from '../../images'
import { ArrowRight } from '@icons/ArrowRight'
import { ArrowLeft } from '@icons/ArrowLeft'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

// type WalletPropsType = {}

export const Wallet = () => {
  const params = {
    slidesPerView: 1,
  }

  return (
    <Swiper className={styles.swiper} pagination {...params} spaceBetween={10}>
      <button className={`${styles.scrollButton} ${styles.scrollButtonLeft}`} type='button'>
        <ArrowRight className={styles.scrollIcon} />
      </button>
      <button className={`${styles.scrollButton} ${styles.scrollButtonRight}`} type='button'>
        <ArrowLeft className={styles.scrollIcon} />
      </button>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wallet}>
          <p className={styles.wallet__title}>Привяжите внешние кошельки</p>
          <p className={styles.wallet__subtitle}>Добавляйте свои внешние кошельки к форкам </p>
          <img src={walletSvg} className={styles.wallet__image} />
          <button className={styles.moreButton} type='button'>
            Подробнее
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wallet}>
          <p className={styles.wallet__title}>Привяжите внешние кошельки</p>
          <p className={styles.wallet__subtitle}>Добавляйте свои внешние кошельки к форкам </p>
          <img src={walletSvg} className={styles.wallet__image} />
          <button className={styles.moreButton} type='button'>
            Подробнее
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
