import React from 'react'
import Styles from './styles.module.scss'

import { RoadMapItem } from './parts/index'
import { RoadMapDesktop } from './components/RoadMapDesktop'

import { TelegramIcon } from '@icons/TelegramIcon'

export const RoadMap: React.FC = () => {
  const roadMapArray = [
    {
      id: 1,
      title: 'Сборка тестовой стойки для майнинга',
      status: 'done',
      deadline: '31.05.2021',
      priority: 10,
    },
    {
      id: 2,
      title: 'Запуск личного кабинета v0.1 ',
      status: 'done',
      deadline: '24.06.2021',
      priority: 10,
    },
    {
      id: 3,
      title: 'Подписание и авансирование договора о покупке земельного участка и здания',
      status: 'done',
      deadline: '10.07.2021',
      priority: 10,
    },
    {
      id: 4,
      title: 'Прокладка первых электрических сетей',
      status: 'done',
      deadline: '22.07.2021',
      priority: 10,
    },
    {
      id: 5,
      title: 'Завершение регистрации здания и земельного участка',
      status: 'done',
      deadline: '03.08.2021',
      priority: 10,
    },
    {
      id: 6,
      title: 'Создание Limcore Token',
      status: 'done',
      deadline: '15.10.2021',
      priority: 10,
    },
    {
      id: 7,
      title: 'Запуск Российского юридического лица',
      status: 'done',
      deadline: '01.11.2021',
      priority: 10,
    },
    {
      id: 8,
      title: 'Регистрация Швейцарского юридического лица',
      status: 'in progress',
      deadline: 'В процессе',
      priority: 10,
    },
    {
      id: 9,
      title: 'Запуск личного кабинета v0.2',
      status: 'in progress',
      deadline: '05.11.2021',
      priority: 10,
    },
    {
      id: 10,
      title: 'Старт Round №1 1 LIMC = $95 / 80,000 LIMC',
      status: 'in progress',
      deadline: '05.11 – 30.12.2021',
      priority: 10,
    },
    {
      id: 11,
      title: 'Blockchain Life. Diamond Sponsor',
      status: 'done',
      deadline: '26.10 – 27.10.2021',
      priority: 10,
    },
    {
      id: 12,
      title: 'Chia Network IPO',
      status: 'in progress',
      deadline: 'конец декабря 2021',
      priority: 10,
    },
    {
      id: 13,
      title: 'Старт Round №2 1 LIMC = min $110 / 120,000 LIMC',
      status: 'in progress',
      deadline: '10.01 – 25.02.2022',
      priority: 10,
    },
    {
      id: 14,
      title: 'Листинг LIMC на биржах HITBTC + BitGlobal',
      status: 'in progress',
      deadline: '25.01.2022',
      priority: 10,
    },
    {
      id: 15,
      title: 'Завершение ремонта ЦОД в г. Можайск',
      status: 'in progress',
      deadline: '25.02.2022',
      priority: 10,
    },
    {
      id: 16,
      title: 'Старт Round №3',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 17,
      title: 'Старт Round №4',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 18,
      title: 'Старт Round №5',
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 19,
      title: 'Проектирование и создание MVP собственного ленточного накопителя',
      status: 'in progress',
      deadline: '2023 – 2024',
      priority: 10,
    },
    {
      id: 20,
      title: 'Запуск серийного производства ленточного накопителя данных',
      status: 'in progress',
      deadline: '2025 – 2026',
      priority: 10,
    },
  ]

  return (
    <section id='roadmap' className={Styles.roadMap}>
      <div className={Styles.wrapper}>
        <div className={Styles.header}>
          <h3 className={Styles.title}>Roadmap</h3>
          <p className={Styles.text}>
            Фото и видео в нашей группе в Telegram{' '}
            <a className={Styles.link} target='blank' href='https://t.me/limc_russ'>
              <TelegramIcon className={Styles.icon} /> @limc_russ
            </a>
          </p>
        </div>
        <ul className={Styles.list}>
          {roadMapArray.map((item) => (
            <RoadMapItem key={item.id} title={item.title} date={item.deadline} status={item.status} />
          ))}
        </ul>
        <RoadMapDesktop />
      </div>
    </section>
  )
}
