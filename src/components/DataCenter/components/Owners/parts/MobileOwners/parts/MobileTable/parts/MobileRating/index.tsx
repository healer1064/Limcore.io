import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { ReactComponent as RatingGray } from '@icons/raitingGrey.svg'
import { ReactComponent as RatingPurple } from '@icons/raitingPurple.svg'
import { ReactComponent as RatingOrange } from '@icons/raitingOrange.svg'

export interface IMobileRating {
  rating: string
  className?: string
}

export const MobileRating: React.FC<IMobileRating> = ({ rating, className }) => {
  function ratingPicker(rating: string) {
    switch (rating) {
      case '1':
        return <RatingGray className={styles.rating_icon} />
      case '2':
        return <RatingOrange className={styles.rating_icon} />
      case '3':
        return <RatingPurple className={styles.rating_icon} />
    }
  }
  const style = clsx({
    [styles.rating_wrapper]: true,
    [className]: className,
  })
  return <div className={style}>{ratingPicker(rating)}</div>
}
