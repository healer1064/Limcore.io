import React, { useState } from 'react'

import useWindowSize from '@helpers/useWindowSizeHook'

import SwiperCore, { Navigation } from 'swiper'

import Styles from './styles.module.scss'
import { Card } from './components/Card'
import { SliderContainer } from './components/SliderContainer'

SwiperCore.use([Navigation])

const cardData = [
  {
    id: 1,
    title: 'Стоимость',
    isMark: true,
    text: '1 LIMC',
    value: '$95',
    isUp: true,
    dinamikValue: 7.5,
  },
  {
    id: 2,
    title: 'Обеспечение',
    isMark: true,
    text: '1 LIMC',
    value: '1TB',
    isUp: true,
    dinamikValue: 7.2,
  },
  {
    id: 3,
    title: 'Общее количество пользователей',
    isMark: false,
    text: '1 LIMC',
    value: '54',
    isUp: false,
    dinamikValue: 7.5,
  },
  {
    id: 4,
    title: 'Суммарная капитализация',
    isMark: false,
    text: '1 LIMC',
    value: '$234',
    isUp: true,
    dinamikValue: 7.5,
  },
]

export const UpEcosystem = () => {
  const { width } = useWindowSize()
  const [isActive, setIsActive] = useState(null)

  return (
    <div id='ecosystem' className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.title__container}>
          <h2 className={Styles.title}>
            Рост экосистемы <span className={Styles.title_detection}>Limcore</span>
          </h2>
          {width >= 768 ? (
            <p className={Styles.mark}>
              Последнее обновление: <span>09.10.2021</span>
            </p>
          ) : (
            ''
          )}
        </div>
        <div className={Styles.card__container}>
          {cardData.map((item) => (
            <Card
              key={item.id}
              item={item}
              isActive={isActive === item.id}
              onClick={(e) => setIsActive(Number(e.currentTarget.id))}
            />
          ))}
        </div>
        <SliderContainer />
      </div>
    </div>
  )
}
