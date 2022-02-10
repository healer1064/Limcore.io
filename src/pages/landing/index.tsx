import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
// import { Calculator } from './components/Calculator'
import { GamificationOfMining } from './components/GamificationOfMining'
import { AppForMining } from './components/AppForMining'
import { RoadMap } from './components/RoadMap'
import { Team } from './components/Team'
// import { UpEcosystem } from './components/UpEcosystem'
// import { OnLine } from './components/OnLine'
import { Questions } from './components/Questions'
import { Media } from './components/Media'
import { Footer } from '@components/Footer'

export const LandingPage: React.FC = () => {
  const { innerWidth: width } = window

  const [clientWidth, setClientWidth] = useState<number>(width)

  useEffect(() => {
    const resizeHandler = () => setClientWidth(window.innerWidth)
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [clientWidth])

  return (
    <div className={Styles.landing}>
      <Main />
      {/* <Calculator /> */}
      <GamificationOfMining clientWidth={clientWidth} />
      <AppForMining clientWidth={clientWidth} />
      <RoadMap />
      <Team />
      {/* <UpEcosystem /> */}
      {/* <OnLine /> */}
      <Questions />
      <Media />
      <Footer />
    </div>
  )
}
