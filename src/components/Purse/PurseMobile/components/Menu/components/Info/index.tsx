import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '../../../Modal/index'
import { ModalHeader } from '../../../ModalHeader'

export const Info = ({ active, setActive, title, setNotActive, image, balance }) => {
  return (
    <Modal active={active} setActive={setActive} style={{ overflow: 'auto' }}>
      <div className={styles.info}>
        <ModalHeader title={title} onClick={setNotActive} />
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.headerLogo}>
              <img src={image} />
            </span>
            <h2 className={styles.headerTitle}>{balance}</h2>
          </div>
        </div>
      </div>
    </Modal>
  )
}
