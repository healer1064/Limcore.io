import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '@components/Modal/index'
import { ModalHeader } from '@components/Modal/ModalHeader'

export const Info = ({ active, setActive, title, setNotActive, image, balance }) => {
  let type = null
  if (title.includes('LIMC')) {
    type = 'LIMC'
  } else if (title.includes('USDT')) {
    type = 'USDT'
  } else {
    type = 'CARD'
  }

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
          {type !== 'CARD' && <p className={styles.headerSubtitle}>$0</p>}
        </div>
      </div>
    </Modal>
  )
}
