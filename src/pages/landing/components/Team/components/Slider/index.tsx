import React from 'react'
import Styles from './styles.module.scss'

import { TeamCard } from './../TeamCard'
import teamMember from '../../../../../../assets/images/team-member.png'
import teamMember2 from '../../../../../../assets/images/team-member-2.png'
import teamMember3 from '../../../../../../assets/images/team-member-3.png'
import teamMember4 from '../../../../../../assets/images/team-member-4.png'
import teamMember5 from '../../../../../../assets/images/team-member-5.png'
import teamMember6 from '../../../../../../assets/images/team-member-6.png'
import teamMember7 from '../../../../../../assets/images/team-member-7.png'
import teamMember8 from '../../../../../../assets/images/team-member-8.png'

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
      foto: teamMember,
    },
    {
      id: 2,
      job: 'Co-Owner / Chief Financial Officer',
      name: 'Павел Лосев',
      content: 'Ранее работал в Центральном Банке Российской Федерации',
      foto: teamMember2,
    },
    {
      id: 3,
      job: 'Руководитель службы поддержки клиентов',
      name: 'Кирилл Туркин',
      content:
        'Многозадачный и пунктуальный.\n' +
        'Имеет успешный опыт выстраивания работы отделов сопровождения особо требовательных клиентов',
      foto: teamMember3,
    },
    {
      id: 4,
      job: 'Ведущий системный администратор',
      name: 'Александр Балыкин',
      content:
        'До начала работы в Limcore руководил собственной организацией по сопровождению сетевой и серверной архитектурой более чем у 20 юридических лиц',
      foto: teamMember4,
    },
    {
      id: 5,
      job: 'Системный администратор',
      name: 'Дмитрий Смирнов',
      content:
        'Умный, молодой и по-хорошему дерзкий специалист. Ранее строил карьеру в качестве системного администратора в администрации г. Оренбург',
      foto: teamMember5,
    },
    {
      id: 6,
      job: 'Руководитель службы безопасности',
      name: 'Александр Казаченко',
      content:
        'Служил в силовых структурах Российской Федерации в роте специального назначения. \n' +
        'Обладатель Крапового берета',
      foto: teamMember6,
    },
    {
      id: 7,
      job: 'Юрист',
      name: 'Тарас Миронов',
      content:
        'Молодой, но талантливый специалист. \n' +
        'Формирует технические задания для ведущих юридических компаний в рамках задач Limcore',
      foto: teamMember7,
    },
    {
      id: 8,
      job: 'Руководитель строительства',
      name: 'Олег Плотников',
      content: 'Лично реализовал 68 государственных контрактов и выполнил более тысячи коммерческих подрядов в России',
      foto: teamMember8,
    },
  ]

  const params = {
    slidesPerView: 1,
  }

  return (
    <div className={Styles.container}>
      <Swiper className={Styles.swiper} pagination {...params}>
        {team.map((person) => (
          <SwiperSlide className={Styles.swiperSlide} key={person.id}>
            <TeamCard key={person.id} {...person} person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}