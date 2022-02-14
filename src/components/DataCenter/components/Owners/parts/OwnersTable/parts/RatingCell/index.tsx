import React from 'react'
import styles from './style.module.scss'
import { StyledCell } from '../StyledCell/index'
import { ReactComponent as RatingGray } from '@icons/raitingGrey.svg'
import { ReactComponent as RatingPurple } from '@icons/raitingPurple.svg'
import { ReactComponent as RatingOrange } from '@icons/raitingOrange.svg'

export interface IRatingCell {
  rating: string
  open: boolean
  className?: string
}

export const RatingCell: React.FC<IRatingCell> = ({ rating, open, className }) => {
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
  return (
    <StyledCell open={open} className={className} align='center'>
      <div className={styles.rating_wrapper}>{ratingPicker(rating)}</div>
    </StyledCell>
  )
}
