import React from 'react'
import styles from './styles.module.scss'

export const DetalizationDownItem = ({ img, title, subtitle, number, money }) => {
  return (
    <li className={styles.detailsItem}>
      <img src={img} className={styles.detailsImage} alt='icon' />
      <span className={styles.columnText}>
        <p className={styles.columnText__title}>{title}</p>
        <p className={styles.columnText__text}>{subtitle}</p>
      </span>
      <span className={styles.columnData}>
        <p className={styles.columnData__title}>{number}</p>
        <p className={styles.columnData__text}>{money}</p>
      </span>
    </li>
  )
}
