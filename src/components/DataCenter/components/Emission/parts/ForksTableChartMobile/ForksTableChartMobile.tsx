import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { ForksModal } from './parts/ForksModal/ForksModal'
import { Chart } from './parts/Chart/Chart'
import { ReactComponent as Calendar } from '../../../../../../assets/icons/calendar.svg'
import { ReactComponent as Arrow } from '../../../../../../assets/icons/calendarArrow.svg'

const mockData = [
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

const mockChartData = [
  { y: 14, x: '00:00' },
  { y: 10, x: '04:00' },
  { y: 23.5, x: '08:00' },
  { y: 14, x: '12:00' },
  { y: 43.2, x: '16:00' },
  { y: 56.7, x: '20:00' },
  { y: 56.7, x: '23:59' },
]

export const ForksTableChartMobile: React.FC = () => {
  const [timeView, setTimeView] = useState(false)
  const [view, setView] = useState('chart')
  const [forksData, setForksData] = useState([])
  const [forksChartData, setForksChartData] = useState([])

  useEffect(() => {
    setForksChartData(mockChartData)
    setForksData(mockData)
  }, [mockChartData, forksData])

  return (
    <>
      <div className={styles.container__btnsContainer}>
        <button
          className={clsx(styles.btnsContainer__btn, timeView && styles.active)}
          onClick={() => setTimeView((prev) => !prev)}
        >
          <span>
            <Calendar />
            <Arrow className={styles.arrow} />
          </span>
        </button>
      </div>
      <div className={styles.container}>
        <span className={styles.border} />
        <div className={styles.tableChartContainer}>
          <Chart forksData={forksChartData} />
          <ForksModal forksData={forksData} active={view === 'forks'} setActive={setView} />
          <div className={styles.table__btnsContainer}>
            <button
              className={clsx(styles.table__btn, view === 'chart' && styles.active)}
              onClick={() => setView('chart')}
            >
              График <span />
            </button>
            <button
              className={clsx(styles.table__btn, view === 'forks' && styles.active)}
              onClick={() => setView('forks')}
            >
              Форки <span />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
