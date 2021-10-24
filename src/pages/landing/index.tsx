import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
import { Calculator } from './components/Calculator'
import { Team } from './components/Team'

export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
      <Calculator />
      <Team />
    </div>
  )
}
