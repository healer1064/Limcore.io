import useWindowSize from '@helpers/useWindowSizeHook'
import React from 'react'
import styles from './styles.module.scss'
import { OrbitDesktop } from './components/OrbitDesktop'
import { OrbitMobile } from './components/OrbitMobile'

export const Orbit: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width >= 873

  return <section className={styles.orbit}>{desktop ? <OrbitDesktop /> : <OrbitMobile />}</section>
}
