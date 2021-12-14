import React from 'react'
import Styles from './styles.module.scss'

import { RoadMapItem } from './parts/index'
import { RoadMapDesktop } from './components/RoadMapDesktop'

import { TelegramIcon } from '@icons/TelegramIcon'
import { useTranslation } from 'react-i18next'

export const RoadMap: React.FC = () => {
  const [t] = useTranslation()

  const roadMapArray = [
    {
      id: 1,
      title: t('roadmap_may30'),
      status: 'done',
      deadline: t('roadmap_deadline_may30'),
      priority: 10,
    },
    {
      id: 2,
      title: t('roadmap_june24'),
      status: 'done',
      deadline: t('roadmap_deadline_june24'),
      priority: 10,
    },
    {
      id: 3,
      title: t('roadmap_july10'),
      status: 'done',
      deadline: t('roadmap_deadline_july10'),
      priority: 10,
    },
    {
      id: 4,
      title: t('roadmap_july22'),
      status: 'done',
      deadline: t('roadmap_deadline_july22'),
      priority: 10,
    },
    {
      id: 5,
      title: t('roadmap_august03'),
      status: 'done',
      deadline: t('roadmap_deadline_august03'),
      priority: 10,
    },
    {
      id: 6,
      title: t('roadmap_october15'),
      status: 'done',
      deadline: t('roadmap_deadline_october15'),
      priority: 10,
    },
    {
      id: 7,
      title: t('roadmap_november1'),
      status: 'done',
      deadline: t('roadmap_deadline_november1'),
      priority: 10,
    },
    {
      id: 8,
      title: t('roadmap_registration'),
      status: 'in progress',
      deadline: t('roadmap_inProcess'),
      priority: 10,
    },
    {
      id: 9,
      title: t('roadmap_november15'),
      status: 'done',
      deadline: t('roadmap_deadline_november15'),
      priority: 10,
    },
    {
      id: 10,
      title: t('roadmap_startRound1'),
      status: 'done',
      deadline: t('roadmap_deadline_1530'),
      priority: 10,
    },
    {
      id: 11,
      title: 'Blockchain Life. Diamond Sponsor',
      status: 'done',
      deadline: t('roadmap_deadline_2627'),
      priority: 10,
    },
    {
      id: 12,
      title: 'Chia Network IPO',
      status: 'in progress',
      deadline: t('roadmap_decemberEnd'),
      priority: 10,
    },
    {
      id: 13,
      title: t('roadmap_startRound2'),
      status: 'in progress',
      deadline: t('roadmap_deadline_1025'),
      priority: 10,
    },
    {
      id: 14,
      title: t('roadmap_listing'),
      status: 'in progress',
      deadline: t('roadmap_deadline_2501'),
      priority: 10,
    },
    {
      id: 15,
      title: t('roadmap_buildUp'),
      status: 'in progress',
      deadline: t('roadmap_deadline_2502'),
      priority: 10,
    },
    {
      id: 16,
      title: t('roadmap_startRound3'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 17,
      title: t('roadmap_startRound4'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 18,
      title: t('roadmap_startRound5'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
    },
    {
      id: 19,
      title: t('roadmap_mvp'),
      status: 'in progress',
      deadline: '2023 – 2024',
      priority: 10,
    },
    {
      id: 20,
      title: t('roadmap_launch'),
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
            {t('roadmap_tg')}{' '}
            <a className={Styles.link} target='blank' href='https://t.me/limc_russ' rel='noreferrer noopener'>
              <TelegramIcon className={Styles.icon} /> {t('roadmap_tg_channel')}
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
