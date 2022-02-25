import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import styles from './style.module.scss'
import { ReactComponent as SearchIcon } from '@icons/searchGlass.svg'
import clsx from 'clsx'
import { ReactComponent as Calendar } from '@icons/calendar.svg'
import { ReactComponent as Arrow } from '@icons/calendarArrow.svg'
import { ReactComponent as CrossIcon } from '@icons/miniCrossIcon.svg'
import { Spinner } from '@components/Spinner'

export interface IModalHeader {
  width: number
  address: string
}

export const ForksModalHeader: React.FC<IModalHeader> = ({ width, address }) => {
  const [timeView, setTimeView] = useState(false)
  const [inputValue, setInputValue] = useState('')
  // function addressFormatter(address: string) {
  //   if (address.length > 26) {
  //     return address.substr(0, 11) + '...' + address.substr(address.length - 6, address.length)
  //   }
  //   return address
  // }

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(address)
  }, [])

  return !width ? (
    <Spinner />
  ) : (
    <Swiper spaceBetween={0} slidesPerView='auto' width={width}>
      <SwiperSlide className={styles.search_slide}>
        <button type='button' className={styles.mobile_search_button}>
          <SearchIcon />
        </button>
      </SwiperSlide>
      <SwiperSlide className={styles.address_slide}>
        <div className={styles.inputWrapper}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => inputChangeHandler(e)}
            className={styles.searchInput}
          />
          <CrossIcon className={styles.cross_icon} onClick={() => setInputValue('')} />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.date_slide}>
        <button
          className={clsx(styles.calendarBtn, timeView && styles.active)}
          onClick={() => setTimeView((prev) => !prev)}
        >
          <span>
            <Calendar />
            <Arrow className={styles.arrow} />
          </span>
        </button>
      </SwiperSlide>
    </Swiper>
  )
}
