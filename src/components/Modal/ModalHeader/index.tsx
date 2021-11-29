import React from 'react'
import styles from './styles.module.scss'
import BlueArrow from '../../Purse/PurseDesktop/images/BlueArrow/BlueArrow'

interface IModalHeader {
  title: any
  onClick: () => void
  crossFlag?: boolean
}

export const ModalHeader = ({ title, onClick, crossFlag }: IModalHeader) => {
  return (
    <div className={styles.header}>
      {crossFlag && (
        <button type='button' className={styles.headerButton} onClick={onClick}>
          <BlueArrow />
        </button>
      )}
      <h3 className={styles.headerTitle}>{title}</h3>
    </div>
  )
}
