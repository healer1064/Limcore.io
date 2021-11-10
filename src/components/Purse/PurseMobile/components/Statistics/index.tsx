import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Table } from './Table'
import { BottomModal } from '../BottomModal'
import InfoIcon from '../../images/Info/Info'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { useAppSelector } from '@app/redux/hooks'

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
  const balanceLimc = useAppSelector((state) => state.wallet.sum_limc_balance)
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
        <button type='button' className={styles.tooltip}>
          <InfoIcon onClick={handleTooltipClick} />
        </button>
      </div>

      <BottomModal
        active={isTooltipVisible}
        setActive={handleTooltipClick}
        title='Почему нужно ждать?'
        subtitle='Майнинг начинается спустя 80 дней с момента завершения раунда. Раунд может закончиться раньше указанного срока'
      />

      <div className={styles.progressbar}>
        <span className={styles.progressbar__track} />
      </div>
      <div className={styles.details}>
        <span className={styles.details__days}>осталось 80 дней из 80</span>
        <span className={styles.details__memory}>0 TB / {balanceLimc} TB</span>
      </div>

      <Accordion>
        <AccordionSummary expandIcon={<AccordeonIcon />}>
          <button type='button' className={styles.more} onClick={handleDisappearClick}>
            Показать больше
          </button>
        </AccordionSummary>
        <AccordionDetails>{/* <Table /> */}</AccordionDetails>
      </Accordion>
    </div>
  )
}
