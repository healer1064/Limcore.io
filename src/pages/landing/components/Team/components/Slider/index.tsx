import React from 'react'
import Styles from './styles.module.scss'

import { TeamCard } from './../TeamCard'
import Shumaev from '../../../../../../assets/images/Shumaev.png'
import Losev from '../../../../../../assets/images/Losev.png'
import Turkin from '../../../../../../assets/images/Turkin.png'
import Balikin from '../../../../../../assets/images/Balikin.png'
import Smirnov from '../../../../../../assets/images/Smirnov.png'
import Kazachenko from '../../../../../../assets/images/Kazachenko.png'
import Mironov from '../../../../../../assets/images/Mironov.png'
import Plotnikov from '../../../../../../assets/images/Plotnikov.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

export const Slider = () => {
  const team = [
    {
      id: 1,
      job: 'CEO / Owner',
      name: 'Дмитрий Шумаев',
      content:
        'В юношестве работал в нескольких гос. учреждениях РФ в качестве сотрудника по ИТ безопасности. Руководил гос.\n' +
        '        предприятием «БайконурСвязьИнформ»',
      foto: Shumaev,
    },
    {
      id: 2,
      job: 'Co-Owner / Chief Financial Officer',
      name: 'Павел Лосев',
      content: 'Ранее работал в Центральном Банке Российской Федерации',
      foto: Losev,
    },
    {
      id: 3,
      job: 'Руководитель службы поддержки клиентов',
      name: 'Кирилл Туркин',
      content:
        'Многозадачный и пунктуальный.\n' +
        'Имеет успешный опыт выстраивания работы отделов сопровождения особо требовательных клиентов',
      foto: Turkin,
    },
    {
      id: 4,
      job: 'Ведущий системный администратор',
      name: 'Александр Балыкин',
      content:
        'До начала работы в Limcore руководил собственной организацией по сопровождению сетевой и серверной архитектурой более чем у 20 юридических лиц',
      foto: Balikin,
    },
    {
      id: 5,
      job: 'Системный администратор',
      name: 'Дмитрий Смирнов',
      content: 'Ранее строил карьеру в качестве системного администратора в администрации г. Оренбург',
      foto: Smirnov,
    },
    {
      id: 6,
      job: 'Руководитель службы безопасности',
      name: 'Александр Казаченко',
      content:
        'Служил в силовых структурах Российской Федерации в роте специального назначения. \n' +
        'Обладатель Крапового берета',
      foto: Kazachenko,
    },
    {
      id: 7,
      job: 'Юрист',
      name: 'Тарас Миронов',
      content:
        'Молодой, но талантливый специалист. \n' +
        'Формирует технические задания для ведущих юридических компаний в рамках задач Limcore',
      foto: Mironov,
    },
    {
      id: 8,
      job: 'Руководитель строительства',
      name: 'Олег Плотников',
      content: 'Лично реализовал 68 государственных контрактов и выполнил более тысячи коммерческих подрядов в России',
      foto: Plotnikov,
    },
  ]

  const params = {
    slidesPerView: 1,
  }

  return (
    <div className={Styles.container}>
      <Swiper className={Styles.swiper} pagination {...params} spaceBetween={10}>
        {team.map((person) => (
          <SwiperSlide className={Styles.swiperSlide} key={person.id}>
            <TeamCard key={person.id} {...person} person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
