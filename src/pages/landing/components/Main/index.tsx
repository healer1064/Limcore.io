import React from 'react'
import Styles from './styles.module.scss'

import { MainCaption } from './components/MainCaption'
import { MainRounds } from './components/MainRounds'
import { MainParthers } from './components/MainParthers'
import { MainHow } from './components/MainHow'

export const Main: React.FC = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.wrapper}>
        <MainCaption />
        <MainRounds />
        <MainParthers />
        <MainHow />
      </div>
    </div>
  )
}
