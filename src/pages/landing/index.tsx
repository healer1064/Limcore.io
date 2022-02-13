import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
// import { Calculator } from './components/Calculator'
import { RoadMap } from './components/RoadMap'
// import { Team } from './components/Team'
import { HowWork } from './components/HowWork/index'
import { Why } from './components/Why/index'
import { Equipment } from './components/Equipment/index'
// import { UpEcosystem } from './components/UpEcosystem'
// import { OnLine } from './components/OnLine'
import { Questions } from './components/Questions'
import { Media } from './components/Media'
import { Footer } from '@components/Footer'

export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
      {/* <Calculator /> */}
      <RoadMap />
      {/* <Team /> */}
      <HowWork />
      <Why />
      <Equipment />
      {/* <UpEcosystem /> */}
      {/* <OnLine /> */}
      <Questions />
      <Media />
      <Footer />
    </div>
  )
}
