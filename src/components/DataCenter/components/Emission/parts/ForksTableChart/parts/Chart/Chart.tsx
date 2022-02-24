import { CategoryScale, Chart as ChartJS, Filler, LinearScale, LineElement, PointElement } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

export const Chart: React.FC<any> = ({ forksData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        data: forksData || [],
        borderColor: '#1FDFFF',
        backgroundColor: 'rgba(41, 62, 64, 0.2)',
        pointStyle: 'dash',
        pointBorderWidth: 0,
      },
    ],
  }

  return <Line data={data} options={options} />
}
