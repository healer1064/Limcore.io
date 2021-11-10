import { FooterMobile } from '@components/Footer/FooterMobile'
import React from 'react'
import styles from './style.module.scss'

export const Dummy = () => {
  return (
    <div className={styles.dummy}>
      <h3>Чат находится в разработке</h3>
      <FooterMobile />
    </div>
  )
}
