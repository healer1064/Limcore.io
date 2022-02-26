import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { MobileNavTab } from './parts/MobileNavTab'
import styles from './style.module.scss'

export interface IMobileNavBar {
  mobileView: string
  onDiskHandler: () => void
  onOwnersHandler: () => void
  onEmissionHandler: () => void
  width: number
}

export const MobileNavBar = ({ mobileView, onDisksHandler, onOwnersHandler, onEmissionHandler, width }) => {
  return (
    <Swiper style={{ padding: '0px 10px' }} spaceBetween={0} slidesPerView={2.5} width={width}>
      <SwiperSlide style={{ height: 40 }}>
        <MobileNavTab
          onClick={onDisksHandler}
          className={styles.tab}
          chosen={mobileView === 'disks'}
          text='Рабочий объем'
        />
      </SwiperSlide>
      <SwiperSlide style={{ height: 40 }}>
        <MobileNavTab
          onClick={onOwnersHandler}
          className={styles.tab}
          chosen={mobileView === 'owners'}
          text='Владельцы с lock up'
        />
      </SwiperSlide>
      <SwiperSlide style={{ height: 40 }}>
        <MobileNavTab
          onClick={onEmissionHandler}
          className={styles.tab}
          chosen={mobileView === 'emission'}
          text='Общая эмиссия'
        />
      </SwiperSlide>
    </Swiper>
  )
}
