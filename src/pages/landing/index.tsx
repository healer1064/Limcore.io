import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
// import { Calculator } from './components/Calculator'
import { RoadMap } from './components/RoadMap'
import { Team } from './components/Team'
// import { UpEcosystem } from './components/UpEcosystem'
// import { OnLine } from './components/OnLine'
import { Questions } from './components/Questions'
import { Media } from './components/Media'
import { Footer } from '@components/Footer'
import useWindowSize from '@helpers/useWindowSizeHook'
import { FooterMobile } from '@components/Footer/FooterMobile'

export const LandingPage: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <div className={Styles.landing}>
      <Main />
      {/* <Calculator /> */}
      <RoadMap />
      <Team />
      {/* <UpEcosystem /> */}
      {/* <OnLine /> */}
      <Questions />
      <Media />
      {desktop ? <Footer /> : <FooterMobile />}
    </div>
  )
}
