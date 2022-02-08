import React from 'react'
// import styles from '../style.module.scss'
interface Imodal {
  modal: boolean
  styles: any
}
export const Modal = ({ modal, styles }: Imodal) => {
  return (
    <div className={modal ? styles.calc__warn : styles.calc__warn_active}>
      <p className={styles.calc__warn_text}> без учета перспектив роста стоимости активов</p>
    </div>
  )
}
