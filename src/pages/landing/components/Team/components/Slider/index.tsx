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
import { useTranslation } from 'react-i18next'
SwiperCore.use([Pagination])

export const Slider = () => {
  const [t] = useTranslation()

  const team = [
    {
      id: 1,
      job: 'CEO / Owner',
      name: t('team_shumaev'),
      content: t('team_shumaevDesc'),
      foto: Shumaev,
    },
    {
      id: 2,
      job: `Co-Owner / Chief${'\u00A0'}Financial${'\u00A0'}Officer`,
      name: t('team_losev'),
      content: t('team_losevDesc'),
      foto: Losev,
    },
    {
      id: 3,
      job: t('team_turkinRank'),
      name: t('team_turkin'),
      content: t('team_turkinDesc'),
      foto: Turkin,
    },
    {
      id: 4,
      job: t('team_balikinRank'),
      name: t('team_balikin'),
      content: t('team_balikinDesc'),
      foto: Balikin,
    },
    {
      id: 5,
      job: t('team_smirnovRank'),
      name: t('team_smirnov'),
      content: t('team_smirnovDesc'),
      foto: Smirnov,
    },
    {
      id: 6,
      job: t('team_kazachenkoRank'),
      name: t('team_kazachenko'),
      content: t('team_kazachenkoDesc'),
      foto: Kazachenko,
    },
    {
      id: 7,
      job: t('team_mironovRank'),
      name: t('team_mironov'),
      content: t('team_mironovDesc'),
      foto: Mironov,
    },
    {
      id: 8,
      job: t('team_plotnikovRank'),
      name: t('team_plotnikov'),
      content: t('team_plotnikovDesc'),
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
