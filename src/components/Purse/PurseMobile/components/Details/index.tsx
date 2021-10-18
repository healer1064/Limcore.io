import React from 'react'
import styles from './styles.module.scss'
import blueArrow from '../../images/blue-arrow.svg'
import ChiaPng from '../../images/details01.png'
import Flax from '../../images/details02.png'
import Nchain from '../../images/details03.png'

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
      <header>
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
          {DetailsImage(ChiaPng)}
          {ColumnText('Chia', 'XCH')}
          {ColumnData('0', '$0')}
        </li>
        <li className={styles.detailsItem}>
          {DetailsImage(Flax)}
          {ColumnText('Flax', 'XFX')}
          {ColumnData('0', '$0')}
        </li>
        <li className={styles.detailsItem}>
          {DetailsImage(Nchain)}
          {ColumnText('N-Chain', 'NCH')}
          {ColumnData('0', '$0')}
        </li>
      </ul>
    </div>
  )
}
