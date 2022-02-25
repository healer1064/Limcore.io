import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
import { HowWork } from './components/HowWork/index'
import { Why } from './components/Why/index'
import { Equipment } from './components/Equipment/index'
import { GamificationOfMining } from './components/GamificationOfMining'
import { AppForMining } from './components/AppForMining'
import { RoadMap } from './components/RoadMap'
import { ProjectNews } from './components/ProjectNews'
import { Footer } from '@components/Footer'
import useWindowSize from '@helpers/useWindowSizeHook'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { Calcs } from '../landing/components/Calcs'
import { CalcsMobile } from '../landing/components/Calcs/CalcsMobile'
import { Orbit } from '../landing/components/Orbit/'

export const LandingPage: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <div className={Styles.landing}>
      <Main />
      {desktop ? <Calcs /> : <CalcsMobile />}
      <HowWork />
      <Why />
      <Equipment />
      <GamificationOfMining clientWidth={width} />
      <AppForMining clientWidth={width} />
      <ProjectNews />
      <RoadMap />
      <Orbit />
      {desktop ? <Footer /> : <FooterMobile />}
    </div>
  )
}
