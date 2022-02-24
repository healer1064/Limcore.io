import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Table } from './parts/Table/Table'
import { Chart } from './parts/Chart/Chart'
import { ReactComponent as Calendar } from '../../../../../../assets/icons/calendar.svg'
import { ReactComponent as Arrow } from '../../../../../../assets/icons/calendarArrow.svg'

const mockToday = [
  { id: 1, name: 'Chia', emission: 162.54 },
  { id: 2, name: 'HDDcoin', emission: 0.0196 },
  { id: 3, name: 'Flax', emission: 0.2823 },
  { id: 4, name: 'N-Chain', emission: 0.0196 },
  { id: 5, name: 'N-Chain', emission: 12.54 },
  { id: 6, name: 'GreenDoge', emission: 162 },
  { id: 7, name: 'Silicoin', emission: 162 },
  { id: 8, name: 'Silicoin', emission: 162 },
  { id: 9, name: 'Flax', emission: 162 },
  { id: 10, name: 'N-Chain', emission: 162 },
  { id: 11, name: 'N-Chain', emission: 162 },
]

const mockYesterday = [
  { id: 1, name: 'Chia', emission: 16.54 },
  { id: 2, name: 'HDDcoin', emission: 54.0196 },
  { id: 3, name: 'Flax', emission: 14.2823 },
  { id: 4, name: 'N-Chain', emission: 156.0196 },
  { id: 5, name: 'N-Chain', emission: 32.54 },
  { id: 6, name: 'GreenDoge', emission: 67 },
  { id: 7, name: 'Silicoin', emission: 98 },
  { id: 8, name: 'Silicoin', emission: 65 },
  { id: 9, name: 'Flax', emission: 25 },
  { id: 10, name: 'N-Chain', emission: 234 },
  { id: 11, name: 'N-Chain', emission: 246 },
]

const mockChartDataToday = [
  { y: 14, x: '00:00' },
  { y: 10, x: '04:00' },
  { y: 23.5, x: '08:00' },
  { y: 14, x: '12:00' },
  { y: 43.2, x: '16:00' },
  { y: 56.7, x: '20:00' },
  { y: 56.7, x: '23:59' },
]

const mockChartDataYesterday = [
  { y: 16, x: '00:00' },
  { y: 11, x: '04:00' },
  { y: 28.5, x: '08:00' },
  { y: 11, x: '12:00' },
  { y: 41, x: '16:00' },
  { y: 59.7, x: '20:00' },
  { y: 52.7, x: '23:59' },
]

export const ForksTableChart: React.FC = () => {
  const [timeView, setTimeView] = useState('today')
  const [view, setView] = useState('table')
  const [forksData, setForksData] = useState([])
  const [forksChartData, setForksChartData] = useState([])

  useEffect(() => {
    switch (timeView) {
      case 'today':
        setForksData(mockToday)
        setForksChartData(mockChartDataToday)
        break
      case 'yesterday':
        setForksData(mockYesterday)
        setForksChartData(mockChartDataYesterday)
        break

      default:
        break
    }
  }, [timeView])

  return (
    <div className={styles.container}>
      <span className={styles.border} />
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
      <div className={styles.tableChartContainer}>
        {view === 'table' && <Table forksData={forksData} />}
        {view === 'chart' && <Chart forksData={forksChartData} />}
        <div className={styles.table__btnsContainer}>
          <button
            className={clsx(styles.table__btn, view === 'chart' && styles.active)}
            onClick={() => setView('chart')}
          >
            График <span />
          </button>
          <button
            className={clsx(styles.table__btn, view === 'table' && styles.active)}
            onClick={() => setView('table')}
          >
            Форки <span />
          </button>
        </div>
      </div>
    </div>
  )
}
