import React from 'react'
import styles from './styles.module.scss'
import { blueArrow, buttonCloseBlue } from '../../images/index'

interface IModalHeader {
  title: string
  onClick: () => void
  crossFlag?: boolean
}

export const ModalHeader = ({ title, onClick, crossFlag }: IModalHeader) => {
  return (
    <div className={styles.header}>
      <button type='button' className={styles.headerButton} onClick={onClick}>
        <img src={blueArrow} className={styles.headerButtonArrow} />
      </button>
      <h3 className={styles.headerTitle}>{title}</h3>

      {crossFlag && (
        <button type='button' className={styles.cross} onClick={onClick}>
          <img src={buttonCloseBlue} />
        </button>
      )}
    </div>
  )
}
