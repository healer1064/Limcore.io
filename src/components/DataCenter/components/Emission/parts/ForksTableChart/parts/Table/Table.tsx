import { Modal } from '@components/Modal'
import React, { useState } from 'react'
import { Fork } from './Fork'
import styles from './styles.module.scss'

export const Table: React.FC<any> = ({ forksData }) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Modal active={modal} setActive={setModal} crossFlag>
        <ul className={styles.modalList}>
          <h4 className={styles.modalTitle}>Все форки</h4>
          {forksData.length > 0 &&
            forksData.map((fork, i) => (
              <li key={i} className={styles.modalItem}>
                <Fork fork={fork} />
              </li>
            ))}
        </ul>
      </Modal>
      <div className={styles.container}>
        <ul className={styles.list}>
          {forksData.length > 0 &&
            forksData.map((fork, i) => (
              <li key={i} className={styles.item}>
                <Fork fork={fork} />
              </li>
            ))}
        </ul>
        <button
          className={styles.allForksBtn}
          onClick={() => {
            setModal(true)
          }}
        >
          Смотреть все форки {'>'}
        </button>
      </div>
    </>
  )
}
