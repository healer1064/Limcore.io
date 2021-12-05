import React from 'react'
import styles from './styles.module.scss'

export const DetalizationDownItem = ({ img, title, subtitle, number, money }) => {
  return (
    <li className={styles.detailsItem}>
      <img src={img} className={styles.detailsImage} alt='icon' />
      <h3 className={styles.columnText}>
        <p className={styles.columnText__title}>{title}</p>
        <p className={styles.columnText__text}>{subtitle}</p>
      </h3>
      <h3 className={styles.columnData}>
        <data className={styles.columnData__title}>{number}</data>
        <data className={styles.columnData__text}>{money}</data>
      </h3>
    </li>
  )
}
