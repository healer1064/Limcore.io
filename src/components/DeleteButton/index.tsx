import React from 'react'
import styles from './style.module.scss'
import closeBlack from '@icons/closeBlack.svg'

export const DeleteButton = () => {
  return (
    <div className={styles.clear_btn}>
      <div className={styles.clear_btn__clear_btn_content}>
        <img src={closeBlack} alt='cancel' />
      </div>
    </div>
  )
}
