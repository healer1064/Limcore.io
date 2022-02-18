import useWindowSize from '@helpers/useWindowSizeHook'
import React from 'react'
import styles from './styles.module.scss'
import { RoadmapDesktop } from './components/RoadmapDesktop'
import { RoadmapMobile } from './components/RoadmapMobile'

export const Roadmap: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 769

  return <section className={styles.roadmap}>{desktop ? <RoadmapDesktop /> : <RoadmapMobile />}</section>
}
