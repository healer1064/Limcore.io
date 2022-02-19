import React from 'react'

import { GameCaption } from '../GamificationOfMining/components/GameCaption'
import { YourPC } from './components/YourPC'
import { YouNeedInstallAppText } from './components/YouNeedInstallAppText'
import { AnimLaptop } from './components/AnimLaptop'
import style from './styles.module.scss'

interface AppForMiningProps {
  clientWidth: number
}

export const AppForMining: React.FC<AppForMiningProps> = ({ clientWidth }) => {
  return (
    <section className={style.appForMining}>
      <div className={style.border} />
      <GameCaption text='Приложение для майнинга' />
      <YourPC clientWidth={clientWidth} />
      <div className={style.appForMining__wrapper}>
        <YouNeedInstallAppText clientWidth={clientWidth} />
        <AnimLaptop />
      </div>
    </section>
  )
}
