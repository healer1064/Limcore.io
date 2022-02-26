import React, { useState } from 'react'
import styles from './styles.module.scss'
import calendarIconGray from '@icons/calendarGray.svg'
import calendarIconCyan from '@icons/calendarCyan.svg'
import arrowDownIcon from '@icons/arrowDown.svg'
import moment from 'moment'
import { addDays } from 'date-fns'

interface SelectOptionProps {
  onClick?: (e: any) => void
  duration?: Array<Type>
  setDuration?: (e: any) => void
}

interface Type {
  startDate: Date
  endDate: Date
  key: string
}

export const SelectOption = ({ onClick, duration, setDuration }: SelectOptionProps) => {
  const [selected, setSelected] = useState(0)
  const today = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]
  const yesterday = [
    {
      startDate: addDays(new Date(), -1),
      endDate: addDays(new Date(), -1),
      key: 'selection',
    },
  ]
  const selectToday = () => {
    setDuration(today)
    setSelected(0)
  }
  const selectYesterday = () => {
    setDuration(yesterday)
    setSelected(1)
  }
  const selectDuration = () => {
    onClick(true)
    setSelected(2)
  }
  return (
    <div className={styles.optionDiv}>
      <div className={selected === 0 ? styles.today + ' ' + styles.active : styles.today} onClick={() => selectToday()}>
        Сегодня
      </div>
      <div
        className={selected === 1 ? styles.yesterday + ' ' + styles.active : styles.yesterday}
        onClick={() => selectYesterday()}
      >
        Вчера
      </div>
      <div className={styles.openCalendar} onClick={() => selectDuration()}>
        {selected !== 2 ? (
          <>
            <img src={calendarIconGray} alt='calendarIcon' />
            <img src={arrowDownIcon} alt='arrowDownIcon' />
          </>
        ) : (
          <div className={styles.selectedDate}>
            <img src={calendarIconCyan} alt='calendarIcon' />
            &nbsp;
            {moment(duration[0].startDate).format('DD.MM.YYYY') +
              ` - ` +
              moment(duration[0].endDate).format('DD.MM.YYYY')}
            &nbsp;
            <img src={arrowDownIcon} alt='arrowDownIcon' />
          </div>
        )}
      </div>
    </div>
  )
}
