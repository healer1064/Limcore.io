import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
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
      <SwiperSlide>
        <MobileNavTab
          onClick={onDisksHandler}
          className={styles.tab}
          chosen={mobileView === 'disks'}
          text='Рабочий объем'
        />
      </SwiperSlide>
      <SwiperSlide>
        <MobileNavTab
          onClick={onOwnersHandler}
          className={styles.tab}
          chosen={mobileView === 'owners'}
          text='Владельцы с lock up'
        />
      </SwiperSlide>
      <SwiperSlide>
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