import React, { useState } from 'react'

import styles from './styles.module.scss'
import infoIcon from '@icons/infoButton.svg'
import TBRatingIcon from '@icons/TBRatingIcon.svg'

export const Rating: React.FC = () => {
  const [busyTB] = useState<number>(987)
  const [precentage] = useState<number>(0.2)

  return (
    <div className={styles.ASide__rating}>
      <div className={styles.ASide__ratingFlex} style={{ margin: '0 0 17px 0' }}>
        <div>
          Мой рейтинг
          <img src={infoIcon} />
        </div>
        <div>
          <img src={TBRatingIcon} />
          {busyTB} TB
        </div>
      </div>
      <div className={styles.ASide__ratingFlex}>
        <div>
          % влияния
          <img src={infoIcon} />
        </div>
        <div>{precentage}%</div>
      </div>
    </div>
  )
}
