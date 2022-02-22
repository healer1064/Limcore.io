import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { arrNews } from '../../constants'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

// import required modules
import { EffectCards, Pagination } from 'swiper'
import './styles.css'
export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState(false)
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        effect='cards'
        grabCursor
        modules={[EffectCards, Pagination]}
        className='mySwiper'
      >
        {arrNews.map((element) => {
          return (
            <SwiperSlide className='swiperSlide' style={{ width: 300 + 'px' }} key={element.id}>
              <div className={`mobile__card ${active ? 'mobile__card_active' : ''}`}>
                <p className='mobile__date'>{element.date}</p>
                <p className='mobile__description'>{element.description}</p>
                <p className='mobile__date mobile__time'>{element.time}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
