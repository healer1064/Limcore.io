import React, { useState } from 'react'
import styles from './styles.module.scss'
import { InputText } from '../../../../../../../ui-kit/InputText/index'
import leftIcon from '@icons/arrow-left.svg'
import rightIcon from '@icons/arrow-right.svg'
import { getMonth } from 'date-fns/fp'

export const Calendar: React.FC = () => {
  const [month, setMonth] = useState('Октябрь')
  const [year, setYear] = useState(2020)

  const date = new Date()
  // const months = [
  //   'Январь',
  //   'Февраль',
  //   'Март',
  //   'Апрель',
  //   'Май',
  //   'Июнь',
  //   'Август',
  //   'Сентябрь',
  //   'Октябрь',
  //   'Ноябрь',
  //   'Декабрь',
  // ]
  const months = [
    { id: 1, name: 'Январь' },
    { id: 2, name: 'Февраль' },
    { id: 3, name: 'Март' },
    { id: 4, name: 'Апрель' },
    { id: 5, name: 'Май' },
    { id: 6, name: 'Июнь' },
    { id: 7, name: 'Июль' },
    { id: 8, name: 'Август' },
    { id: 9, name: 'Сентябрь' },
    { id: 10, name: 'Октябрь' },
    { id: 11, name: 'Ноябрь' },
    { id: 12, name: 'Декабрь' },
  ]

  const backwardMonth = () => {
    const monthNumber = getMonth(date) - 1
    console.log(monthNumber)
    const month = months[monthNumber].name
    console.log(month)
    setMonth(month)
  }
  const forwardMonth = () => {
    console.log('forwardMonth')
  }

  const backwardYear = () => {
    console.log('backwardYear')
  }
  const forwardYear = () => {
    console.log('forwardYear')
  }
  return (
    <>
      <div className={styles.inputs}>
        <InputText placeholder='__ . __ . ____' className={styles.input} />
        <span className={styles.between} />
        <InputText placeholder='__ . __ . ____' className={styles.input} />
      </div>

      <div className={styles.selects}>
        <div className={styles.select}>
          <img src={leftIcon} alt='Иконка' onClick={backwardMonth} />
          <span className={styles.title}>{month}</span>
          <img src={rightIcon} alt='Иконка' onClick={forwardMonth} />
        </div>

        <div className={styles.select}>
          <img src={leftIcon} alt='Иконка' onClick={backwardYear} />
          <span className={styles.title}>{year}</span>
          <img src={rightIcon} alt='Иконка' onClick={forwardYear} />
        </div>
      </div>
    </>
  )
}
