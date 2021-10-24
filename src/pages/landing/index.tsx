import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'
import { Calculator } from './components/Calculator'

export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
      <Calculator />
    </div>
  )
}
