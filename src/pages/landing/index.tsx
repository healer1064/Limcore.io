import React from 'react'
import Styles from './styles.module.scss'

import { Main } from './components/Main'

export const LandingPage: React.FC = () => {
  return (
    <div className={Styles.landing}>
      <Main />
    </div>
  )
}
