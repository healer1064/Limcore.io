import React from 'react'
import styles from './styles.module.scss'
import red from '@icons/redRaiting.svg'
import grey from '@icons/raitingGrey.svg'
import purple from '@icons/raitingPurple.svg'
import orange from '@icons/raitingOrange.svg'

interface ILimcRating {
  limcBalance: number | string
}

export const LimcRating = ({ limcBalance }: ILimcRating) => {
  return (
    <>
      {limcBalance < 501 && (
        <>
          <img src={grey} alt='Rating' className={styles.raitingIcon} />
          <span className={styles.raitingNumber}>{limcBalance} TB</span>
        </>
      )}
      {limcBalance > 500 && limcBalance < 1000 && (
        <>
          <img src={orange} alt='Rating' className={styles.raitingIcon} />
          <span className={styles.raitingNumber}>{limcBalance} TB</span>
        </>
      )}
      {limcBalance > 999 && limcBalance < 5000 && (
        <>
          <img src={orange} alt='Rating' className={styles.raitingIcon} />
          <span className={styles.raitingNumber}>{Math.floor(Number(limcBalance) / 1000)}K TB</span>
        </>
      )}
      {limcBalance > 4999 && limcBalance < 50000 && (
        <>
          <img src={purple} alt='Rating' className={styles.raitingIcon} />
          <span className={styles.raitingNumber}>{Math.floor(Number(limcBalance) / 1000)}K TB</span>
        </>
      )}
      {limcBalance > 49999 && (
        <>
          <img src={red} alt='Rating' className={styles.raitingIcon} />
          <span className={styles.raitingNumber}>{Math.floor(Number(limcBalance) / 1000)}K TB</span>
        </>
      )}
    </>
  )
}
