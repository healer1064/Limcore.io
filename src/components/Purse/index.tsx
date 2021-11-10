import React from 'react'
import styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import { PurseDesktop } from '@components/Purse/PurseDesktop'
import { PurseMobile } from '@components/Purse/PurseMobile'

export const Purse = () => {
  const { width } = useWindowSize()
  const desktop = width > 767

  return <div className={styles.purse}>{desktop ? <PurseDesktop /> : <PurseMobile />}</div>
}
