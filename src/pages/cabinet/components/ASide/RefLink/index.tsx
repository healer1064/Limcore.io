import React, { useState } from 'react'

import styles from './styles.module.scss'
import arrowsBlueArround from '@icons/arrowsBlueArround.svg'
import copySquareIcon from '@icons/copySquareIcon.svg'
import arrowYellowRight from '@icons/arrowYellowRight.svg'

export const RefLink = () => {
  const [link] = useState<string>('limcore.io/sl/3gzrWbcdxP')

  return (
    <div className={styles.refLink}>
      <div className={styles.refLinkProfit}>
        <img src={arrowsBlueArround} />
        Реферальный доход
      </div>
      <div className={styles.refLinkText}>
        Вы будете получать 3.75% майнинга от всех приведённых пользователей которые купили LIMC по ссылке
      </div>
      <div className={styles.refLinkLink}>
        <a href='#'>{link}</a>
        <img src={copySquareIcon} />
      </div>
      <div className={styles.refLinkStat}>
        Реферальная статистика
        <img src={arrowYellowRight} />
      </div>
    </div>
  )
}
