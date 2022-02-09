import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Filler } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { ChartNavigation } from './ChartNavigation'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

export const DiskChart = ({ disk }) => {
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
    <>
      <ChartNavigation />
      <Line data={data} options={options} />
    </>
  )
}
