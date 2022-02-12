import React from 'react'
import Styles from './styles.module.scss'

import { MainCaption } from './components/MainCaption'
import { MainCaptionMobile } from './components/MainCaptionMobile'
import useWindowSize from '@helpers/useWindowSizeHook'

export const Main: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <section className={Styles.main}>
      <div className={Styles.wrapper}>{desktop ? <MainCaption /> : <MainCaptionMobile />}</div>
    </section>
  )
}
