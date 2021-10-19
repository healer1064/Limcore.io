import React from 'react'
import styles from './styles.module.scss'
import { blueArrow, details1, details2, details3 } from '../../images'

const DetailsImage = (imageFile) => <img src={imageFile} className={styles.detailsImage} />

const ColumnText = (title, text) => (
  <span className={styles.columnText}>
    <p className={styles.columnText__title}>{title}</p>
    <p className={styles.columnText__text}>{text}</p>
  </span>
)

const ColumnData = (title, text) => (
  <span className={styles.columnData}>
    <p className={styles.columnData__title}>{title}</p>
    <p className={styles.columnData__text}>{text}</p>
  </span>
)

const BalanceString = (text, data) => (
  <li className={styles.balanceString}>
    <p className={styles.balanceString__text}>{text}</p>
    <p className={styles.balanceString__data}>{data}</p>
  </li>
)

export const Details = (props) => {
  return (
    <div className={styles.details}>
      <header className={styles.details__header}>
        <h3 className={styles.details__title}>Детализация майнинга</h3>

        <ul className={styles.details__balance}>
          {BalanceString('Общий доход', '$0')}
          {BalanceString('XCH 24h', '$0')}
          {BalanceString('Все форки 24h', '$0')}
        </ul>

        <button type='button' className={styles.details__button} onClick={props.onDetailsClick}>
          <img src={blueArrow} />
        </button>
      </header>

      <ul className={styles.detailsList}>
        <li className={styles.detailsItem}>
          {DetailsImage(details1)}
          {ColumnText('Chia', 'XCH')}
          {ColumnData('0', '$0')}
        </li>
        <li className={styles.detailsItem}>
          {DetailsImage(details2)}
          {ColumnText('Flax', 'XFX')}
          {ColumnData('0', '$0')}
        </li>
        <li className={styles.detailsItem}>
          {DetailsImage(details3)}
          {ColumnText('N-Chain', 'NCH')}
          {ColumnData('0', '$0')}
        </li>
      </ul>
    </div>
  )
}
