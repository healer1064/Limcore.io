import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

import { walletSvg } from '../../images'
import walletViolet from '../../../../../assets/icons/walletViolet.svg'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Keyboard, Navigation } from 'swiper'
SwiperCore.use([Navigation, Keyboard])

// type WalletPropsType = {}

export const Wallet = () => {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper className={styles.swiper} spaceBetween={50} slidesPerView={1} navigation keyboard>
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
          <div className={`${styles.wallet} ${styles.wallet_violet}`}>
            <p className={styles.wallet__title}>Выпустите виртуальную карту</p>
            <p className={styles.wallet__subtitle}>Оплачивайте покупки заработанными средствами</p>
            <img src={walletViolet} className={styles.wallet__image} />
            <button className={styles.moreButton} type='button'>
              Перейти
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
