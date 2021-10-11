import React, { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import ru from 'date-fns/locale/ru'
import format from 'date-fns/format'
import buildLocalizeFn from 'date-fns/locale/_lib/buildLocalizeFn'
import { makeStyles } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { isInArray } from '@helpers/isInArray'
import { filter, setCheckedObject } from '../../../../redux/orderSlicer'

const dayValues = {
  abbreviated: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
}

ru.localize.day = buildLocalizeFn({
  values: dayValues,
})

const useStyles = makeStyles({
  datePickerWrapper: {
    position: 'relative',
    height: '44px',
    boxSizing: 'border-box',
    border: '2px solid rgba(188, 195, 208, 0.5)',
    borderRadius: '8px',
    display: 'flex',
    padding: '0 12px',
    alignItems: 'center',
  },
  datePickerInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  datePickerDate: {
    fontSize: '17px',
    lineHeight: '24px',
    width: '100%',
  },
  datePickerIcon: {
    padding: '0',
    cursor: 'pointer',
    flex: '1 0 auto',
  },
  placeholder: {
    color: '#bbc1c7',
    fontSize: '16px',
    lineHeight: '24px',
  },
  label: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#626C77',
    margin: '14px 0 4px 0',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '14px',
  },
  cancel: {
    display: 'flex',
    justifyContent: 'center',
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  datePickerRange: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.12), 0px 20px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1,
    position: 'absolute',
    top: '43px',
    right: 0,
    padding: '22px 12px 12px 12px',
    '& select': {
      border: 'none',
      outline: 'none',
      fontSize: '17px',
      lineHeight: '24px',
      color: '#1D2023',
      fontWeight: 600,
      textTransform: 'capitalize',
      cursor: 'pointer',
      appearance: 'none',
      width: 'min-content',
    },
    '& .rdrMonthPicker select': {
      marginRight: '8px',
    },
    '& .rdrPprevButton': {
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#fff',
      backgroundPosition: '50% 50%',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.20711 10.2929C7.59763 10.6834 7.59763 11.3166 7.20711 11.7071C6.81658 12.0976 6.18342 12.0976 5.79289 11.7071L0.792894 6.70711C0.402369 6.31658 0.402369 5.68342 0.792894 5.29289L5.79289 0.292893C6.18342 -0.0976315 6.81658 -0.0976315 7.20711 0.292893C7.59763 0.683417 7.59763 1.31658 7.20711 1.70711L2.91421 6L7.20711 10.2929Z' fill='black'/%3E%3C/svg%3E%0A")`,
    },
    '& .rdrNextButton': {
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#fff',
      backgroundPosition: '50% 50%',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.792893 10.2929C0.402369 10.6834 0.402369 11.3166 0.792893 11.7071C1.18342 12.0976 1.81658 12.0976 2.20711 11.7071L7.20711 6.70711C7.59763 6.31658 7.59763 5.68342 7.20711 5.29289L2.20711 0.292893C1.81658 -0.0976315 1.18342 -0.0976315 0.792893 0.292893C0.402368 0.683417 0.402368 1.31658 0.792893 1.70711L5.08579 6L0.792893 10.2929Z' fill='black'/%3E%3C/svg%3E")`,
    },
    '& .rdrDateDisplayWrapper': {
      display: 'none',
    },
    '& .rdrMonthAndYearWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    '& .rdrMonths': {
      display: 'flex',
    },
    '& .rdrWeekDays': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      '& .rdrWeekDay': {
        display: 'flex',
        fontSize: '14px',
        lineHeight: '20px',
        height: 32,
        fontFamily: "'Raleway', 'sans-serif'",
        color: '#1D2023',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    '& .rdrDays': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      overflow: 'hidden',
      '& .rdrDay': {
        width: 32,
        height: 32,
        borderRadius: '6px',
        background: 'transparent',
        fontSize: 17,
        boxSizing: 'border-box',
        margin: '4px 4px',
        position: 'relative',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontFamily: "'Raleway', sans-serif",
        '& .rdrStartEdge, .rdrEndEdge': {
          background: '#1D2023',
          width: '32px',
          height: '32px',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: '6px',
        },
        '& .rdrStartEdge ~ .rdrDayNumber': {
          color: '#fff !important',
        },
        '& .rdrEndEdge ~ .rdrDayNumber': {
          color: '#fff !important',
        },
        '& .rdrDayInPreview': {
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'block',
          width: 60,
          overflow: 'hidden',
          position: 'absolute',
          height: 32,
          background: '#F2F3F7 !important',
          zIndex: '-1',
          borderRadius: '6px',
        },
        '& .rdrInRange': {
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'block',
          width: '60px',
          overflow: 'hidden',
          height: 32,
          zIndex: '-1',
          background: '#F2F3F7',
          position: 'absolute',
          borderRadius: '6px',
        },
        '& .rdrDayNumber': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: '#1D2023',
          transform: 'translate(-50%, -50%)',
        },
        '&:hover': {
          background: '#1D2023',
        },
        '&:hover .rdrDayNumber': {
          color: '#fff',
        },
      },
      '& .rdrDayPassive': {
        pointerEvents: 'none',
        '& .rdrDayNumber': {
          color: '#969FA8 !important',
        },
      },
    },
  },
})

interface Props {
  label: string
  filterName: string
}

export const DatePicker: React.FC<Props> = ({ label, filterName }) => {
  const classes = useStyles()
  const calendarRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [dateIsChoosen, setDateIsChoosen] = useState<boolean>(false)
  const [value, setValue] = useState<string[]>([])
  const [state, setState] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }])
  const [displayDate, setDisplayDate] = useState({ startDate: '', endDate: '' })
  const filterState = useAppSelector((state) => state.orders.chekedObject)
  const filterArray = useAppSelector((state) => state.orders.filtered)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (Object.keys(filterState).length === 0) {
      setState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }])
      setValue([])
      setDisplayDate({ startDate: '', endDate: '' })
      setDateIsChoosen(false)
    } else {
      if (filterName in filterState) {
        setState([
          {
            startDate: new Date(filterState[filterName][0]),
            endDate: new Date(filterState[filterName][1]),
            key: 'selection',
          },
        ])
        setDateIsChoosen(true)
        setDisplayDate({
          startDate: filterState[filterName][0],
          endDate: filterState[filterName][1],
        })
        setValue([filterState[filterName][0], filterState[filterName][1]])
      } else {
        setState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }])
      }
    }
  }, [filterState])

  useEffect(() => {
    setDisplayDate({
      startDate: format(state[0].startDate, 'd.LL.yyyy'),
      endDate: format(state[0].endDate, 'd.LL.yyyy'),
    })
  }, [value])

  const handleOnChange = (ranges: { selection: any }) => {
    const { selection } = ranges
    setState([selection])
    setDateIsChoosen(true)
    setValue([selection.startDate.toISOString(), selection.endDate.toISOString()])
    dispatch(
      setCheckedObject({
        ...filterState,
        [filterName]: [selection.startDate.toISOString(), selection.endDate.toISOString()],
      }),
    )
  }

  const handleTogglePicker = () => {
    setIsOpen(true)
  }

  const handleClearDate = () => {
    const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
    const filterStateCopy = JSON.parse(JSON.stringify(filterState))
    delete filterStateCopy[filterName]
    setValue([])
    dispatch(filter(filterArrayCopy))
    dispatch(setCheckedObject(filterStateCopy))
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (calendarRef.current && e.target instanceof Node && calendarRef.current.contains(e.target)) {
      return
    }

    if (filterName in filterState) {
      if (isInArray(filterName, filterArray)) {
        const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
        dispatch(filter([...filterArrayCopy, { id: filterName, value: filterState[filterName] }]))
      } else {
        dispatch(filter([...filterArray, { id: filterName, value: filterState[filterName] }]))
      }
    }
    setIsOpen(false)
  }
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, filterState])

  return (
    <div>
      <div className={classes.label}>{label}</div>
      <div className={classes.datePickerWrapper}>
        <div className={classes.datePickerInput}>
          <div className={classes.datePickerDate}>
            {dateIsChoosen ? (
              <div className={classes.date}>
                <div>{`${displayDate.startDate} - ${displayDate.endDate}`}</div>
                <div className={classes.cancel} onClick={handleClearDate}>
                  <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M13.2987 0.708736C13.1119 0.521483 12.8583 0.41625 12.5938 0.41625C12.3292 0.41625 12.0756 0.521483 11.8888 0.708736L6.99875 5.58874L2.10875 0.698736C1.92192 0.511483 1.66827 0.40625 1.40375 0.40625C1.13923 0.40625 0.885581 0.511483 0.69875 0.698736C0.30875 1.08874 0.30875 1.71874 0.69875 2.10874L5.58875 6.99874L0.69875 11.8887C0.30875 12.2787 0.30875 12.9087 0.69875 13.2987C1.08875 13.6887 1.71875 13.6887 2.10875 13.2987L6.99875 8.40874L11.8888 13.2987C12.2788 13.6887 12.9087 13.6887 13.2987 13.2987C13.6888 12.9087 13.6888 12.2787 13.2987 11.8887L8.40875 6.99874L13.2987 2.10874C13.6788 1.72874 13.6788 1.08874 13.2987 0.708736Z'
                      fill='#969FA8'
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className={classes.placeholder}>Выберите период</div>
            )}
          </div>
          <svg
            className={classes.datePickerIcon}
            onClick={handleTogglePicker}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.3333 1.77778H14.2222C15.2041 1.77778 16 2.57372 16 3.55556V14.2222C16 15.2041 15.2041 16 14.2222 16H1.77778C0.795938 16 0 15.2041 0 14.2222V3.55556C0 2.57372 0.795938 1.77778 1.77778 1.77778H2.66667V0.888889C2.66667 0.397969 3.06464 0 3.55556 0C4.04648 0 4.44444 0.397969 4.44444 0.888889V1.77778H11.5556V0.888889C11.5556 0.397969 11.9535 0 12.4444 0C12.9354 0 13.3333 0.397969 13.3333 0.888889V1.77778ZM1.77776 3.55556V14.2222H14.2222V3.55556H1.77776ZM3.99997 6.2222H4.88886C5.13432 6.2222 5.3333 6.42119 5.3333 6.66665V7.55554C5.3333 7.801 5.13432 7.99998 4.88886 7.99998H3.99997C3.75451 7.99998 3.55552 7.801 3.55552 7.55554V6.66665C3.55552 6.42119 3.75451 6.2222 3.99997 6.2222ZM3.99997 9.7778H4.88886C5.13432 9.7778 5.3333 9.97678 5.3333 10.2222V11.1111C5.3333 11.3566 5.13432 11.5556 4.88886 11.5556H3.99997C3.75451 11.5556 3.55552 11.3566 3.55552 11.1111V10.2222C3.55552 9.97678 3.75451 9.7778 3.99997 9.7778ZM7.55563 6.2222H8.44452C8.68998 6.2222 8.88897 6.42119 8.88897 6.66665V7.55554C8.88897 7.801 8.68998 7.99998 8.44452 7.99998H7.55563C7.31017 7.99998 7.11119 7.801 7.11119 7.55554V6.66665C7.11119 6.42119 7.31017 6.2222 7.55563 6.2222ZM7.55563 9.7778H8.44452C8.68998 9.7778 8.88897 9.97678 8.88897 10.2222V11.1111C8.88897 11.3566 8.68998 11.5556 8.44452 11.5556H7.55563C7.31017 11.5556 7.11119 11.3566 7.11119 11.1111V10.2222C7.11119 9.97678 7.31017 9.7778 7.55563 9.7778ZM11.1112 9.7778H12C12.2455 9.7778 12.4445 9.97678 12.4445 10.2222V11.1111C12.4445 11.3566 12.2455 11.5556 12 11.5556H11.1112C10.8657 11.5556 10.6667 11.3566 10.6667 11.1111V10.2222C10.6667 9.97678 10.8657 9.7778 11.1112 9.7778ZM11.1112 6.2222H12C12.2455 6.2222 12.4445 6.42119 12.4445 6.66665V7.55554C12.4445 7.801 12.2455 7.99998 12 7.99998H11.1112C10.8657 7.99998 10.6667 7.801 10.6667 7.55554V6.66665C10.6667 6.42119 10.8657 6.2222 11.1112 6.2222Z'
              fill='#969FA8'
            />
          </svg>
        </div>
        {isOpen && (
          <div className={classes.datePickerRange} ref={calendarRef}>
            <DateRange onChange={handleOnChange} moveRangeOnFirstSelection={false} ranges={state} locale={ru} />
          </div>
        )}
      </div>
    </div>
  )
}
