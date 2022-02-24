import React from 'react'
import styles from './style.module.scss'
import { MobileRating } from '../MobileRating'

export interface IMobileAddress {
  address: string
  rating: string
  days: string
}

export const MobileAddress: React.FC<IMobileAddress> = ({ address, rating, days }) => {
  function adressFormatter(address: string) {
    if (address.length > 26) {
      return address.substr(0, 11) + '...' + address.substr(address.length - 6, address.length)
    }
    return address
  }
  return (
    <div className={styles.container}>
      <MobileRating className={styles.icon} rating={rating} />
      <div className={styles.wrapper}>
        {adressFormatter(address)}
        <p className={styles.address}>До старта: {days} дней</p>
      </div>
    </div>
  )
}