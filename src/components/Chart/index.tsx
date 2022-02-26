import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { addDays } from 'date-fns'
import { DatePicker } from '@components/DatePicker'
import { SelectOption } from '@components/Chart/components/SelectOption'
import { countDaysBetween } from '@lib/utils/countDaysBetween'

const Chart = () => {
  const [duration, setDuration] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [data, setData] = useState([])
  const [timeData, setTimeData] = useState([])
  const [calendarOpen, setCaledarOpen] = useState(false)
  const [tap, setTap] = useState(0)

  const isSameDay = (dateStart, dateEnd) => {
    const diffTime = Math.abs(dateEnd - dateStart)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return diffDays === 0
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const generateDayData = () => {
    const counts = countDaysBetween(duration[0].startDate, duration[0].endDate)
    const tempDayData = []
    for (let i = 1; i <= counts + 1; i++) {
      const randomPrice = randomIntFromInterval(30, 45)
      tempDayData.push([addDays(duration[0].startDate, i).getTime(), randomPrice])
    }
    setData(tempDayData)
  }

  const generateTimeData = () => {
    const tempTimeData = []
    for (let i = 1; i <= 24; i++) {
      const randomPrice = randomIntFromInterval(30, 45)
      tempTimeData.push({ x: `${i}:00`, y: randomPrice })
    }
    setTimeData(tempTimeData)
  }

  const isSame = isSameDay(duration[0].startDate, duration[0].endDate)

  const options11: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#1fdfff'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#1fdfff',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#1fdfff',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const options12: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#1fdfff'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#1fdfff',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#1fdfff',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const options21: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#FCFF00'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#FCFF00',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#FCFF00',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const options22: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#FCFF00'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#FCFF00',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#FCFF00',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const options31: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#00DA23'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#00DA23',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#00DA23',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const options32: ApexOptions = {
    chart: { zoom: { enabled: false }, toolbar: { show: false }, background: '#192A2C' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', lineCap: 'butt', colors: ['#00DA23'], width: 3, dashArray: 0 },
    grid: { borderColor: 'rgba(79, 132, 138, 0.2)', strokeDashArray: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        colorStops: [
          {
            offset: 0,
            color: '#00DA23',
            opacity: 0.2,
          },
          {
            offset: 100,
            color: '#00DA23',
            opacity: 0,
          },
        ],
      },
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'IBM Plex Sans',
          colors: '#4F848A',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          return '$' + value
        },
        style: {
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: 'Open Sans',
          colors: '#4F848A',
        },
      },
    },
    legend: { horizontalAlign: 'left' },
  }

  const series1 = [
    {
      name: 'Price',
      data,
    },
  ]

  const series2 = [
    {
      name: 'Price',
      data: timeData,
    },
  ]

  useEffect(() => {
    !isSameDay(duration[0].startDate, duration[0].endDate) ? generateDayData() : generateTimeData()
  }, [duration])

  return (
    <div>
      <div className={styles.wrapper}>
        <SelectOption onClick={setCaledarOpen} duration={duration} setDuration={setDuration} />
        <div className={styles.datePickerSection}>
          {calendarOpen && <DatePicker duration={duration} setDuration={setDuration} setCaledarOpen={setCaledarOpen} />}
        </div>
        <div className={styles.balance}>
          <span>Заработано:</span>
          &nbsp;
          <span>$140,784</span>
        </div>
        <div className={styles.apexWrapper + ' ' + (!isSame && tap === 0 && styles.visible)}>
          <ReactApexChart type='area' options={options11} series={series1} height={280} />
        </div>
        <div className={styles.apexWrapper + ' ' + (isSame && tap === 0 && styles.visible)}>
          <ReactApexChart type='area' options={options12} series={series2} height={280} />
        </div>
        <div className={styles.apexWrapper + ' ' + (!isSame && tap === 1 && styles.visible)}>
          <ReactApexChart type='area' options={options21} series={series1} height={280} />
        </div>
        <div className={styles.apexWrapper + ' ' + (isSame && tap === 1 && styles.visible)}>
          <ReactApexChart type='area' options={options22} series={series2} height={280} />
        </div>
        <div className={styles.apexWrapper + ' ' + (!isSame && tap === 2 && styles.visible)}>
          <ReactApexChart type='area' options={options31} series={series1} height={280} />
        </div>
        <div className={styles.apexWrapper + ' ' + (isSame && tap === 2 && styles.visible)}>
          <ReactApexChart type='area' options={options32} series={series2} height={280} />
        </div>
      </div>
      <div className={styles.tapGroup}>
        <div
          className={tap === 0 ? styles.totalIncome + ' ' + styles.active : styles.totalIncome}
          onClick={() => setTap(0)}
        >
          Общий доход
        </div>
        <div className={tap === 1 ? styles.limc + ' ' + styles.active : styles.limc} onClick={() => setTap(1)}>
          LIMC
        </div>
        <div className={tap === 2 ? styles.mining + ' ' + styles.active : styles.mining} onClick={() => setTap(2)}>
          Майнинг
        </div>
      </div>
    </div>
  )
}

export default Chart
