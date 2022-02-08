import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Filler } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

export const data = {
  type: 'line',
  labels: ['00:00', '02:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
  borderJoinStyle: 'round',
  datasets: [
    {
      fill: 'start',
      label: 'Dataset 2',
      data: [140, 100, 235, 140, 432, 567, 567],
      borderColor: '#1FDFFF',
      backgroundColor: 'rgba(41, 62, 64, 0.2)',
      spanGaps: true,
    },
  ],
}

export const DiskChart = () => {
  return (
    <>
      <div>NAV</div>
      {/* <Doughnut data={data} /> */}
      {/* <Chart chartData={data} /> */}
      <Line data={data} />
    </>
  )
}
