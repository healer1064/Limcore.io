import React from 'react'
import Styles from './styles.module.scss'

import { MainCaption } from './components/MainCaption'
// import { MainRounds } from './components/MainRounds'
import { MainParthers } from './components/MainParthers'
import { MainHow } from './components/MainHow'
import { DataCenter } from '../../../../components/DataCenter/DataCenter'

export const Main: React.FC = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.wrapper}>
        <DataCenter />
        <MainCaption />
        {/* <MainRounds /> */}
        <MainParthers />
        <MainHow />
      </div>
    </section>
  )
}
