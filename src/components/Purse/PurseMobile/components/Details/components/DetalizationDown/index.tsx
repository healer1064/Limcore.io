import React from 'react'
import styles from './styles.module.scss'

// const DetailsImage = (imageFile) => <img src={imageFile} className={styles.detailsImage} />

// const ColumnText = (title, text) => (
//   <span className={styles.columnText}>
//     <p className={styles.columnText__title}>{title}</p>
//     <p className={styles.columnText__text}>{text}</p>
//   </span>
// )

// const ColumnData = (title, text) => (
//   <span className={styles.columnData}>
//     <p className={styles.columnData__title}>{title}</p>
//     <p className={styles.columnData__text}>{text}</p>
//   </span>
// )

const Item = (img, title, subtitle, number, money) => (
  <li className={styles.detailsItem}>
    <img src={img} className={styles.detailsImage} />
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

export const DetalizationDown = ({ img, title, subtitle, number, money }) => {
  return (
    <ul className={styles.detailsList}>
      {Item(img, title, subtitle, number, money)}
      {/* <li className={styles.detailsItem}>
        {/* {DetailsImage(details1)}
        {ColumnText('Chia', 'XCH')}
        {ColumnData('3.78456983', '$384')}
      </li>
      <li className={styles.detailsItem}>
        {DetailsImage(details2)}
        {ColumnText('Flax', 'XFX')}
        {ColumnData('0.76459083', '$29')}
      </li>
      <li className={styles.detailsItem}>
        {DetailsImage(details3)}
        {ColumnText('N-Chain', 'NCH')}
        {ColumnData('1.04856979', '$84')}
      </li> */}
    </ul>
  )
}
