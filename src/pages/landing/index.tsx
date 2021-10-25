import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
import { Calculator } from './components/Calculator'
import { UpEcosystem } from './components/UpEcosystem'
import { OnLine } from './components/OnLine'
export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
      <Calculator />
      <UpEcosystem />
      <OnLine />
    </div>
  )
}
