import React, { useEffect, useState } from 'react'
import DateRangePicker from 'react-date-range/dist/components/DateRangePicker'
import * as rdrLocales from 'react-date-range/dist/locale'
import 'react-date-range/dist/styles.css'
import './datepicker.scss'
import moment from 'moment'
import closeGray from '@icons/closeGray.svg'

interface DatePickerProps {
  duration?: Array<Type>
  setDuration?: (e: any) => void
  setCaledarOpen?: (e: any) => void
}

interface Type {
  startDate: Date
  endDate: Date
  key: string
}

export const DatePicker = ({ duration, setDuration, setCaledarOpen }: DatePickerProps) => {
  const [state, setState] = useState(duration)
  const [state2, setState2] = useState([
    {
      startDate: moment(duration[0].startDate, 'DD.MM.YYYY').format('DD.MM.YYYY').toString(),
      endDate: moment(duration[0].endDate, 'DD.MM.YYYY').format('DD.MM.YYYY').toString(),
      key: 'selection',
    },
  ])

  useEffect(() => {
    console.log('state->state2')
    stateToState2()
  }, [state])

  const stateToState2 = () => {
    const temp = [
      {
        startDate: moment(state[0].startDate, 'DD.MM.YYYY').format('DD.MM.YYYY').toString(),
        endDate: moment(state[0].endDate, 'DD.MM.YYYY').format('DD.MM.YYYY').toString(),
        key: 'selection',
      },
    ]
    setState2(temp)
  }

  const closeCalendar = () => {
    setCaledarOpen(false)
  }

  const confirmDate = () => {
    setDuration(state)
    closeCalendar()
  }

  const onBlurHandler = (e, isStart) => {
    console.log('onBlur')
    const temp = [...state]
    if (isStart) {
      if (!moment(e.target.value, 'DD.MM.YYYY', true).isValid()) {
        stateToState2()
      } else {
        temp[0].startDate = moment(e.target.value, 'DD.MM.YYYY').toDate()
        setState(temp)
      }
    } else {
      if (!moment(e.target.value, 'DD.MM.YYYY', true).isValid()) {
        stateToState2()
      } else {
        temp[0].endDate = moment(e.target.value, 'DD.MM.YYYY').toDate()
        setState(temp)
      }
    }
  }
  const onChangeHandler = (e, isStart) => {
    console.log('onChange')
    const temp = [...state2]
    if (isStart) {
      temp[0].startDate = e.target.value
    } else {
      temp[0].endDate = e.target.value
    }
    setState2(temp)
  }

  return (
    <div className='datePickerWrapper'>
      <DateRangePicker
        locale={rdrLocales.ru}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        months={3}
        ranges={state}
        showDateDisplay={false}
        direction='horizontal'
        calendarFocus='current'
      />
      <div className='selectedDateWrapper'>
        <input
          className='dateSpan'
          type='text'
          required
          onChange={(e) => {
            onChangeHandler(e, true)
          }}
          onBlur={(e) => {
            onBlurHandler(e, true)
          }}
          // value={moment(state2[0].startDate).format('DD.MM.YYYY')}
          value={state2[0].startDate}
        />

        <span className='dashSpan' />
        <input
          className='dateSpan'
          onChange={(e) => {
            onChangeHandler(e, false)
          }}
          onBlur={(e) => {
            onBlurHandler(e, false)
          }}
          value={state2[0].endDate}
        />
        <span className='confirmBtn' onClick={() => confirmDate()}>
          Применить
        </span>
      </div>
      <img src={closeGray} alt='close icon' className='closeCalendar' onClick={() => closeCalendar()} />
    </div>
  )
}
