import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Filler } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import DateGroup from '@components/DataCenter/components/Disks/parts/DateGroup'
import styles from './styles.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

export const DiskChart = ({ disk }) => {
  const { width } = useWindowSize()
  const desktop = width > 971
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback(value) {
            return `${value}K TB`
          },
        },
      },
    },
    borderJoinStyle: 'round',
    borderCapStyle: 'round',
  }

  const data = {
    borderJoinStyle: 'round',
    datasets: [
      {
        fill: 'start',
        label: 'TB',
        data: disk?.data || [],
        borderColor: '#1FDFFF',
        backgroundColor: 'rgba(41, 62, 64, 0.2)',
        pointStyle: 'dash',
        pointBorderWidth: 0,
      },
    ],
  }

  return (
    <div className={styles.diskchart__wrapper}>
      {desktop ? <DateGroup /> : ''}
      <Line data={data} options={options} />
    </div>
  )
}
