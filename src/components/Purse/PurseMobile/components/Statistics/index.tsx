import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Table } from './Table'
import { BottomModal } from '../BottomModal'
import { info } from '../../images/index'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

interface IStatisticsProps {
  onClick?: () => void
}

const AccordeonIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      style={{ transform: 'rotate(90deg)' }}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.14258 17.1427L14.8569 11.4284L9.14258 5.71416'
        stroke='#4A70F8'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Statistics = ({ onClick }: IStatisticsProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleTooltipClick = () => {
    setIsTooltipVisible((prev) => !prev)
  }

  const handleDisappearClick = () => {
    console.log('handleDisappearClick')
    onClick()
  }

  return (
    <div className={styles.statistics}>
      <div className={styles.header}>
        <h3 className={styles.title}>До старта майнинга</h3>
        <button type='button' className={styles.tooltip} onClick={handleTooltipClick}>
          <img src={info} />
        </button>
      </div>

      <BottomModal
        active={isTooltipVisible}
        setActive={handleTooltipClick}
        title='Почему нужно ждать?'
        subtitle='Этап плоттинга начинается с создания параллельных участков. Дополнительные параметры используются для оптимального использования возможностей процессора и ОЗУ'
      />

      <div className={styles.progressbar}>
        <span className={styles.progressbar__track} />
      </div>
      <div className={styles.details}>
        <span className={styles.details__days}>осталось 4 дня из 60</span>
        <span className={styles.details__memory}>120 TB / 2,000 TB</span>
      </div>

      <Accordion>
        <AccordionSummary expandIcon={<AccordeonIcon />}>
          <button type='button' className={styles.more} onClick={handleDisappearClick}>
            Показать больше
          </button>
        </AccordionSummary>
        <AccordionDetails>
          <Table />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
