import React, { useState } from 'react'
import clsx from 'clsx'
import { ReactComponent as Calendar } from '@icons/calendar.svg'
import { ReactComponent as Arrow } from '@icons/calendarArrow.svg'
import styles from './styles.module.scss'

const DateGroup = () => {
  const [timeView, setTimeView] = useState('today')

  return (
    <div className={styles.container__btnsContainer}>
      <button
        className={clsx(styles.btnsContainer__btn, timeView === 'today' && styles.active)}
        onClick={() => setTimeView('today')}
      >
        Сегодня
      </button>
      <button
        className={clsx(styles.btnsContainer__btn, timeView === 'yesterday' && styles.active)}
        onClick={() => setTimeView('yesterday')}
      >
        Вчера
      </button>
      <button
        className={clsx(styles.btnsContainer__btn, timeView === 'calendar' && styles.active)}
        onClick={() => setTimeView('calendar')}
      >
        <span>
          <Calendar />
          <Arrow className={styles.arrow} />
        </span>
      </button>
    </div>
  )
}

export default DateGroup
