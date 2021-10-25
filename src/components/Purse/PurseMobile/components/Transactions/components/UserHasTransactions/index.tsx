import React from 'react'
import styles from './styles.module.scss'

const Item = (image, title, sum, cardInfo, isSwitch, image2, title2) => {
  const itemClass = sum.includes('+') ? styles.item : styles.item__minus
  return (
    <li className={itemClass} key={`${sum}_${Math.random()}`}>
      {isSwitch ? (
        <div className={styles.switch}>
          <div className={styles.switch__inner}>
            <img src={image} className={styles.image} />
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.switch__inner}>
            <img src={image2} className={styles.image} />
            <p className={styles.title}>{title2}</p>
          </div>
        </div>
      ) : (
        <>
          <img src={image} className={styles.image} />
          <p className={styles.title}>{title}</p>
        </>
      )}
      <span className={styles.data}>
        <p className={styles.data__title}>{sum}</p>
        {cardInfo && <p className={styles.data__text}>{cardInfo}</p>}
      </span>
    </li>
  )
}

export const UserHasTransactions = ({ data }) => {
  return (
    <div className={styles.transactions}>
      <ul className={styles.list}>
        {data.map((item) => Item(item.img, item.title, item.sum, item.cardInfo, item.isSwitch, item.img2, item.title2))}
      </ul>
    </div>
  )
}
