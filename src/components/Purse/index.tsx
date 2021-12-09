import React from 'react'
import styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import { PurseDesktop } from '@components/Purse/PurseDesktop'
import { PurseMobile } from '@components/Purse/PurseMobile'
import { Spinner } from '@components/Spinner'

export const Purse = () => {
  const { width } = useWindowSize()
  const desktop = width > 767

  return width === undefined ? (
    <div className={styles.spinner}>
      <Spinner />
    </div>
  ) : (
    <div className={styles.purse}>{desktop ? <PurseDesktop /> : <PurseMobile />}</div>
  )
}
