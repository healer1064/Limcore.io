import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import leftIcon from '@icons/arrow-left.svg'
import rightIcon from '@icons/arrow-right.svg'

import { getMonth, prevMonth, nextMonth } from '../../../../../../../helpers/getMonth'

interface CalendarProps {
  closePopup?: any
  dataType: string
}

export const Calendar: React.FC<CalendarProps> = ({ closePopup, dataType }) => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)

  const date = new Date()

  const startYears = 1940
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

  // const [monthObject, setMonthObject] = useState({ id: null, name: '' })

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

  const backwardMonth = () => {
    const currentYear = month === 1 ? year - 1 : year
    const monthPrev = prevMonth({ year: currentYear, month })

    setYear(currentYear)
    setTitle(`${monthPrev[0].name} ${currentYear}`)
    setDays(monthPrev[0].days)
    setMonth(monthPrev[0].number)
  }

  const forwardMonth = () => {
    const currentYear = month === 12 ? year + 1 : year
    const monthNext = nextMonth({ year: currentYear, month })

    setYear(currentYear)
    setTitle(`${monthNext[0].name} ${currentYear}`)
    setDays(monthNext[0].days)
    setMonth(monthNext[0].number)
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
    setMonth(month[0].number)
    setView('days')
  }

  const selectDay = (dayString) => {
    const day = Number(dayString)

    setDay(day)

    const stringDay = day >= 10 ? day : `0${day}`
    const stringMonth = month >= 10 ? month : `0${month}`

    const dateString = `${year}-${stringMonth}-${stringDay}`

    const newDate = String(dateString)

    if (dataType === 'birth') {
      dispatch(setData({ ...data, birth_date: newDate }))
    } else {
      dispatch(setData({ ...data, passport_was_issued: newDate }))
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
            <button onClick={backwardYears}>
              <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' />
            </button>
            <span className={Styles.title}>{title}</span>
            <button onClick={forwardYears}>
              <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' />
            </button>
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
            <button onClick={() => backwardYear(year - 1)}>
              <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' />
            </button>
            <span className={Styles.title}>{title}</span>
            <button onClick={() => forwardYear(year + 1)}>
              <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' />
            </button>
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
            <button onClick={() => backwardMonth()}>
              <img className={Styles.leftIcon} src={leftIcon} alt='Иконка' />
            </button>
            <span className={Styles.title}>{title}</span>
            <button onClick={() => forwardMonth()}>
              <img className={Styles.rightIcon} src={rightIcon} alt='Иконка' />
            </button>
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
