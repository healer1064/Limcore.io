import useWindowSize from '@helpers/useWindowSizeHook'
import React from 'react'
import styles from './styles.module.scss'
import { RoadMapDesktop } from './components/RoadMapDesktop'

export const RoadMap: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  // return <section className={styles.roadmap}>{desktop ? <RoadMapDesktop /> : <RoadMapMobile />}</section>
  return <section className={styles.roadmap}>{desktop && <RoadMapDesktop />}</section>
}
