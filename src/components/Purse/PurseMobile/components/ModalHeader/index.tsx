import React from 'react'
import styles from './styles.module.scss'
import { buttonCloseBlue } from '../../images/index'
import BlueArrow from '../../images/BlueArrow/BlueArrow'

interface IModalHeader {
  title: any
  onClick: () => void
  crossFlag?: boolean
}

export const ModalHeader = ({ title, onClick, crossFlag }: IModalHeader) => {
  return (
    <div className={styles.header}>
      <button type='button' className={styles.headerButton} onClick={onClick}>
        <BlueArrow />
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
