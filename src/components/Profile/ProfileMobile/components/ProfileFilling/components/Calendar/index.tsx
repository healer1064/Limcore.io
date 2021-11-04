import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import leftIcon from '@icons/arrow-left.svg'
import rightIcon from '@icons/arrow-right.svg'

import { getMonth } from '../../../../../../../helpers/getMonth'

interface CalendarProps {
  closePopup?: any
  dataType: string
}

export const Calendar: React.FC<CalendarProps> = ({ closePopup, dataType }) => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)

  const date = new Date()

  const startYears = 1980
  const endYears = date.getFullYear()

  const months = [
    { id: 1, name: 'Янв' },
    { id: 2, name: 'Фев' },
    { id: 3, name: 'Мар' },
    { id: 4, name: 'Апр' },
    { id: 5, name: 'Май' },
    { id: 6, name: 'Июн' },
    { id: 7, name: 'Июл' },
    { id: 8, name: 'Авг' },
    { id: 9, name: 'Сен' },
    { id: 10, name: 'Окт' },
    { id: 11, name: 'Ноя' },
    { id: 12, name: 'Дек' },
  ]

  const [view, setView] = useState('years')
  const [count, setCount] = useState(0)

  const [years, setYears] = useState([])
  const [days, setDays] = useState([])

  const [title, setTitle] = useState('')

  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [day, setDay] = useState(null)

  const backwardYears = () => {
    if (years[0] === startYears) {
      return
    }

    setCount((prev) => prev - 12)
  }

  const forwardYears = () => {
    if (years[years.length - 1] === endYears) {
      return
    }

    setCount((prev) => prev + 12)
  }

  const backwardYear = (year) => {
    if (year < startYears) {
      return
    }

    setTitle(year)
    setYear(year)
  }

  const forwardYear = (year) => {
    if (year > endYears) {
      return
    }

    setTitle(year)
    setYear(year)
  }

  const selectYear = (year) => {
    setTitle(year)
    setYear(year)
    setView('months')
  }

  const selectMonth = (monthObj) => {
    const month = getMonth({ year, month: monthObj.id })

    setTitle(`${month[0].name} ${year}`)
    setDays(month[0].days)
    setMonth(monthObj.id)
    setView('days')
  }

  const selectDay = (dayString) => {
    const day = Number(dayString)

    setDay(day)

    const stringMonth = month > 10 ? month : `0${month}`
    const dateString = `${day}.${stringMonth}.${year}`

    if (dataType === 'birth') {
      dispatch(setData({ ...data, birth_date: dateString }))
    } else {
      dispatch(setData({ ...data, passport_was_issued: dateString }))
    }

    closePopup()
  }

  useEffect(() => {
    const array = []

    for (let i = startYears; i <= endYears; i++) {
      array.push(i)
    }

    const sliceArray = array.slice(count, count + 12)

    setYears(sliceArray)
    setTitle(`${sliceArray[0]} - ${sliceArray[sliceArray.length - 1]}`)
  }, [count])

  return (
    <>
      {view === 'years' && (
        <>
          <div className={Styles.select}>
            <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' onClick={backwardYears} />
            <span className={Styles.title}>{title}</span>
            <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' onClick={forwardYears} />
          </div>
          <div className={Styles.grid}>
            {years &&
              years.map((year) => (
                <span key={year} className={Styles.item} onClick={() => selectYear(year)}>
                  {year}
                </span>
              ))}
          </div>
        </>
      )}
      {view === 'months' && (
        <>
          <div className={Styles.select}>
            <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' onClick={() => backwardYear(year - 1)} />
            <span className={Styles.title}>{title}</span>
            <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' onClick={() => forwardYear(year + 1)} />
          </div>
          <div className={Styles.grid}>
            {months &&
              months.map((month) => (
                <span key={month.id} className={Styles.item} onClick={() => selectMonth(month)}>
                  {month.name}
                </span>
              ))}
          </div>
        </>
      )}
      {view === 'days' && (
        <>
          <div className={Styles.select}>
            <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' />
            <span className={Styles.title}>{title}</span>
            <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' />
          </div>
          <div className={Styles.container}>
            <div className={Styles.head}>
              <span className={Styles.daytime}>Пн</span>
              <span className={Styles.daytime}>Вт</span>
              <span className={Styles.daytime}>Ср</span>
              <span className={Styles.daytime}>Чт</span>
              <span className={Styles.daytime}>Пт</span>
              <span className={Styles.daytime}>Сб</span>
              <span className={Styles.daytime}>Вс</span>
            </div>
            <div className={Styles.body}>
              {days &&
                days.map((obj, index) => (
                  <>
                    {obj.month !== month ? (
                      <span key={index} className={`${Styles.day} ${Styles.day_disable}`}>
                        {obj.day}
                      </span>
                    ) : (
                      <span key={index} className={Styles.day} onClick={() => selectDay(obj.day)}>
                        {obj.day}
                      </span>
                    )}
                  </>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
