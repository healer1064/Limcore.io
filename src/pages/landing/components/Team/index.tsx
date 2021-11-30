import React from 'react'
import Styles from './styles.module.scss'

import { TeamCard } from './components/TeamCard'
import { Slider } from './components/Slider'

import Shumaev from '../../../../assets/images/Shumaev.png'
import Losev from '../../../../assets/images/Losev.png'
import Turkin from '../../../../assets/images/Turkin.png'
import Balikin from '../../../../assets/images/Balikin.png'
import Smirnov from '../../../../assets/images/Smirnov.png'
import Kazachenko from '../../../../assets/images/Kazachenko.png'
import Mironov from '../../../../assets/images/Mironov.png'
import Plotnikov from '../../../../assets/images/Plotnikov.png'
import Shcherbina from '../../../../assets/images/MaskGroup.png'
import { useTranslation } from 'react-i18next'

export const Team: React.FC = () => {
  const [t] = useTranslation()

  const team = [
    {
      id: 1,
      job: t('team_shumaevRank'),
      name: t('team_shumaev'),
      content: t('team_shumaevDesc'),
      foto: Shumaev,
    },
    {
      id: 2,
      job: t('team_losevRank'),
      name: t('team_losev'),
      content: t('team_losevDesc'),
      foto: Losev,
      jobTitle: 'long',
    },
    {
      id: 3,
      job: t('team_shcherbinaRank'),
      name: t('team_shcherbina'),
      content: t('team_shcherbinaDesc'),
      foto: Shcherbina,
    },
    {
      id: 4,
      job: t('team_turkinRank'),
      name: t('team_turkin'),
      content: t('team_turkinDesc'),
      foto: Turkin,
    },
    {
      id: 5,
      job: t('team_balikinRank'),
      name: t('team_balikin'),
      content: t('team_balikinDesc'),
      foto: Balikin,
    },
    {
      id: 6,
      job: t('team_smirnovRank'),
      name: t('team_smirnov'),
      content: t('team_smirnovDesc'),
      foto: Smirnov,
    },
    {
      id: 7,
      job: t('team_kazachenkoRank'),
      name: t('team_kazachenko'),
      content: t('team_kazachenkoDesc'),
      foto: Kazachenko,
    },
    {
      id: 8,
      job: t('team_mironovRank'),
      name: t('team_mironov'),
      content: t('team_mironovDesc'),
      foto: Mironov,
    },
    {
      id: 9,
      job: t('team_plotnikovRank'),
      name: t('team_plotnikov'),
      content: t('team_plotnikovDesc'),
      foto: Plotnikov,
    },
  ]

  return (
    <section id='team' className={Styles.team}>
      <div className={Styles.wrapper}>
        <h2 className={Styles.title}>{t('team_title')}</h2>
        <ul className={Styles.container}>
          {team.map((person) => (
            <TeamCard key={person.id} {...person} person={person} />
          ))}
        </ul>
        <Slider />
      </div>
    </section>
  )
}
