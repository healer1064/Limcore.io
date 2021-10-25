import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
import { Calculator } from './components/Calculator'
import { Team } from './components/Team'
import { UpEcosystem } from './components/UpEcosystem'
import { OnLine } from './components/OnLine'
import { Questions } from './components/Questions'
import { Media } from './components/Media'

export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
      <Calculator />
      <Team />
      <UpEcosystem />
      <OnLine />
      <Questions />
      <Media />
    </div>
  )
}
