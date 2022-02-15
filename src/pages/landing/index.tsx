import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
// import { Team } from './components/Team'
import { HowWork } from './components/HowWork/index'
import { Why } from './components/Why/index'
import { Equipment } from './components/Equipment/index'
import { GamificationOfMining } from './components/GamificationOfMining'
import { AppForMining } from './components/AppForMining'
// import { Team } from './components/Team'
// import { UpEcosystem } from './components/UpEcosystem'
// import { OnLine } from './components/OnLine'
// import { Questions } from './components/Questions'
// import { Media } from './components/Media'
// import { Footer } from '@components/Footer'
import { Calcs } from '../landing/components/Calcs'
import { CalcsMobile } from '../landing/components/Calcs/CalcsMobile'
import useWindowSize from '@helpers/useWindowSizeHook'

export const LandingPage: React.FC = () => {
  const { width } = useWindowSize()

  return (
    <div className={Styles.landing}>
      <Main />
      {width <= 768 ? <CalcsMobile /> : <Calcs />}
      {/* <Team /> */}
      <HowWork />
      <Why />
      <Equipment />
      <GamificationOfMining clientWidth={width} />
      <AppForMining clientWidth={width} />
      {/* <RoadMap />
      <Team /> */}
      {/* <UpEcosystem /> */}
      {/* <OnLine /> */}
      {/* <Questions />
      <Media />
      <Footer /> */}
    </div>
  )
}
