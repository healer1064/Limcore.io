import React from 'react'
import Styles from './styles.module.scss'

import { MainCaption } from './components/MainCaption'
import { MainCaptionMobile } from './components/MainCaptionMobile'
import useWindowSize from '@helpers/useWindowSizeHook'
// import { MainRounds } from './components/MainRounds'
// import { MainParthers } from './components/MainParthers'
// import { MainHow } from './components/MainHow'

export const Main: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <section className={Styles.main}>
      <div className={Styles.wrapper}>
        {desktop ? <MainCaption /> : <MainCaptionMobile />}
        {/* <MainRounds /> */}
        {/* <MainParthers /> */}
        {/* <MainHow /> */}
      </div>
    </section>
  )
}
