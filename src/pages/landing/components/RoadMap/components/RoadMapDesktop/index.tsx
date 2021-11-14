import React, { useRef, useState } from 'react'
import Styles from './styles.module.scss'
import { RoadMapItemDesktop } from '../../partsDesktop'
import { ArrowLeft } from '@icons/ArrowLeft'
import { ArrowRight } from '@icons/ArrowRight'
import { useTranslation } from 'react-i18next'

export const RoadMapDesktop = () => {
  const [t] = useTranslation()

  const roadMapArray = [
    {
      id: 1,
      title: t('roadmap_may30'),
      status: 'done',
      deadline: '31.05.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 2,
      title: t('roadmap_june24'),
      status: 'done',
      deadline: '24.06.2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 3,
      title: t('roadmap_july10'),
      status: 'done',
      deadline: '10.07.2021',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 4,
      title: t('roadmap_july22'),
      status: 'done',
      deadline: '22.07.2021',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 5,
      title: t('roadmap_august03'),
      status: 'done',
      deadline: '03.08.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 6,
      title: t('roadmap_october15'),
      status: 'done',
      deadline: '15.10.2021',
      priority: 10,
      vertikal: 'long',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 7,
      title: t('roadmap_november1'),
      status: 'done',
      deadline: '01.11.2021',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 8,
      title: t('roadmap_registration'),
      status: 'in progress',
      deadline: t('roadmap_inProcess'),
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 9,
      title: t('roadmap_november15'),
      status: 'in progress',
      deadline: '15.11.2021',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 10,
      title: t('roadmap_startRound1'),
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
      deadline: t('roadmap_decemberEnd'),
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 13,
      title: t('roadmap_startRound2'),
      status: 'in progress',
      deadline: '10.01 – 25.02.2022',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 14,
      title: t('roadmap_listing'),
      status: 'in progress',
      deadline: '25.01.2022',
      priority: 10,
      vertikal: 'long',
      position: 'down',
      titleType: 'long',
    },
    {
      id: 15,
      title: t('roadmap_buildUp'),
      status: 'in progress',
      deadline: '25.02.2022',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 16,
      title: t('roadmap_startRound3'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 17,
      title: t('roadmap_startRound4'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'top',
      titleType: 'short',
    },
    {
      id: 18,
      title: t('roadmap_startRound5'),
      status: 'in progress',
      deadline: '2022',
      priority: 10,
      vertikal: 'short',
      position: 'down',
      titleType: 'short',
    },
    {
      id: 19,
      title: t('roadmap_mvp'),
      status: 'in progress',
      deadline: '2023 – 2024',
      priority: 10,
      vertikal: 'long',
      position: 'top',
      titleType: 'long',
    },
    {
      id: 20,
      title: t('roadmap_launch'),
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
      <span className={Styles.blueLine} />
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
