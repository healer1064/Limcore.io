import React from 'react'
import Styles from './styles.module.scss'

import { MainCaption } from './components/MainCaption'
import { MainRounds } from './components/MainRounds'
import { MainParthers } from './components/MainParthers'
import { MainHow } from './components/MainHow'
import { RoadMap } from './components/RoadMap'

export const Main: React.FC = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.wrapper}>
        <MainCaption />
        <MainRounds />
        <MainParthers />
        <MainHow />
        <RoadMap />
      </div>
    </section>
  )
}