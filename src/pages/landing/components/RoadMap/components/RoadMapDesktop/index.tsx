import React, { useRef, useState } from 'react'
import Styles from './styles.module.scss'
import { RoadMapItemDesktop } from '../../partsDesktop'
import { ArrowLeft } from '@icons/ArrowLeft'
import { ArrowRight } from '@icons/ArrowRight'

export const RoadMapDesktop = () => {
  const roadMapArray = [
    {
      id: 1,
      title: 'Сборка тестовой стойки для майнинга',
      status: 'done',
      deadline: '31.05.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 2,
      title: 'Запуск личного кабинета v0.1 ',
      status: 'done',
      deadline: '24.06.2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 3,
      title: 'Подписание и авансирование договора о покупке земельного участка и здания',
      status: 'done',
      deadline: '10.07.2021',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 4,
      title: 'Прокладка первых электрических сетей',
      status: 'done',
      deadline: '22.07.2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 5,
      title: 'Завершение регистрации здания и земельного участка',
      status: 'done',
      deadline: '03.08.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 6,
      title: 'Создание Limcore Token',
      status: 'done',
      deadline: '15.10.2021',
      priority: 10,
      vertikal: 'long',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 7,
      title: 'Запуск Российского юридического лица',
      status: 'done',
      deadline: '01.11.2021',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 8,
      title: 'Регистрация Швейцарского юридического лица',
      status: 'in progress',
      deadline: 'В процессе',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 9,
      title: 'Запуск личного кабинета v0.2',
      status: 'in progress',
      deadline: '15.11.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 10,
      title: 'Старт Round №1 1 LIMC = $95 / 80,000 LIMC',
      status: 'in progress',
      deadline: '15.11 – 30.12.2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 11,
      title: 'Blockchain Life. Diamond Sponsor',
      status: 'done',
      deadline: '26.10 – 27.10.2021',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 12,
      title: 'Chia Network IPO',
      status: 'in progress',
      deadline: 'конец декабря 2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 13,
      title: 'Старт Round №2 1 LIMC = min $110 / 120,000 LIMC',
      status: 'in progress',
      deadline: '10.01 – 25.02.2022',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 14,
      title: 'Листинг LIMC на биржах HITBTC + BitGlobal',
      status: 'in progress',
      deadline: '25.01.2022',
      priority: 10,
      vertikal: 'long',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 15,
      title: 'Завершение ремонта ЦОД в г. Можайск',
      status: 'in progress',
      deadline: '25.02.2022',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 16,
      title: 'Старт Round №3',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 17,
      title: 'Старт Round №4',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 18,
      title: 'Старт Round №5',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 19,
      title: 'Проектирование и создание MVP собственного ленточного накопителя',
      status: 'in progress',
      deadline: '2023 – 2024',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 20,
      title: 'Запуск серийного производства ленточного накопителя данных',
      status: 'in progress',
      deadline: '2025 – 2026',
      priority: 10,
      vertikal: 'long',
      position: 'down',
      titleType: 'long',
    },
  ]
  const roadmapRef = useRef<HTMLDivElement>(null)
  const [isArrowHidden, setIsArrowHidden] = useState(true)
  const scrollLeft = () => {
    roadmapRef.current.scrollLeft += 300
    if (roadmapRef.current.scrollLeft !== 0) {
      setIsArrowHidden(false)
    }
  }
  const scrollRight = () => {
    roadmapRef.current.scrollLeft -= 300
    if (roadmapRef.current.scrollLeft === 0) {
      setIsArrowHidden(true)
    }
  }

  return (
    <div className={Styles.container}>
      <button className={`${Styles.scrollButton} ${Styles.scrollButtonLeft}`} type='button' onClick={scrollLeft}>
        <ArrowRight className={Styles.scrollIcon} />
      </button>
      <button
        className={`${Styles.scrollButton} ${Styles.scrollButtonRight} ${isArrowHidden && Styles.arrowHidden}`}
        type='button'
        onClick={scrollRight}
      >
        <ArrowLeft className={Styles.scrollIcon} />
      </button>
      <div className={Styles.roadMap} ref={roadmapRef}>
        {roadMapArray.map((item) => (
          <RoadMapItemDesktop
            key={item.id}
            title={item.title}
            date={item.deadline}
            status={item.status}
            vertikal={item.vertikal}
            position={item.position}
            titleType={item.titleType}
          />
        ))}
      </div>
    </div>
  )
}
