import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Autoplay } from 'swiper'

import 'swiper/swiper.min.css'

import styles from '../styles.module.scss'
import border from '../../Images/border-modal-min.png'

const links = [
  {
    href: '#',
    name: 'Telegram',
    id: 1,
  },
  {
    href: '#',
    name: 'YouTube',
    id: 2,
  },
  {
    href: '#',
    name: 'Discord',
    id: 3,
  },
  {
    href: '#',
    name: 'Twitter',
    id: 4,
  },
  {
    href: '#',
    name: 'Telegram',
    id: 5,
  },
  {
    href: '#',
    name: 'Youtube',
    id: 6,
  },
  {
    href: '#',
    name: 'Discord',
    id: 7,
  },
  {
    href: '#',
    name: 'Twitter',
    id: 8,
  },
]

export const Scroll: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        speed={1700}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={Boolean(true)}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {links.map((el) => (
          <SwiperSlide key={el.id}>
            <a
              className={styles.mobile__scroll_item}
              style={{ background: `url("${border}") 0 0/100% 100%` }}
              href={el.href}
            >
              {el.name} &#129125;
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
