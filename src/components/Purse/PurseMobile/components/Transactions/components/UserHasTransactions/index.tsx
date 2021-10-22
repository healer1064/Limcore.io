import React from 'react'
import styles from './styles.module.scss'
import { s7, balanceLimc, balanceUsdt } from '../../../../images/'

const DetailsImage = (imageFile) => <img src={imageFile} className={styles.image} />

const Title = (title) => <p className={styles.title}>{title}</p>

const Data = (title, text) => (
  <span className={styles.data}>
    <p className={styles.data__title}>{title}</p>
    <p className={styles.data__text}>{text}</p>
  </span>
)

const Switch = (img1, title1, img2, title2) => (
  <div className={styles.switch}>
    <div className={styles.switch__inner}>
      {DetailsImage(img1)}
      {Title(title1)}
    </div>
    <div className={styles.switch__inner}>
      {DetailsImage(img2)}
      {Title(title2)}
    </div>
  </div>
)

// .item__minus  - даст красный цвет шрифту, по умолчанию зеленый
// .item__switch - покажет перевод между счетами
export const UserHasTransactions = () => {
  return (
    <div className={styles.transactions}>
      <ul className={styles.list}>
        <li className={styles.item}>
          {DetailsImage(balanceLimc)}
          {Title('LIMC')}
          {Data('+120 LIMC', '−$1,200 c карты *2774')}
        </li>
        <li className={styles.item__minus}>
          {DetailsImage(s7)}
          {Title('S7 Airlines')}
          {Data('−$324 ', 'c карты *2774')}
        </li>
        <li className={styles.item__switch}>
          {Switch(balanceLimc, 'LIMC', balanceUsdt, 'USDT')}
          {Data('+1,200 USDT', '−120 LIMC')}
        </li>
      </ul>
    </div>
  )
}
