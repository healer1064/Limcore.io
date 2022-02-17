import React from 'react'
import Styles from './styles.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import { Desktop } from './components/Desktop/index'
import { Mobile } from './components/Mobile/index'

export const RoadMap: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <section className={Styles.main}>
      <div className={Styles.wrapper}>{desktop ? <Desktop /> : <Mobile />}</div>
    </section>
  )
}
