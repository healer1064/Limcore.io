import React from 'react'

import styles from './styles.module.scss'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'
import { Profit } from './components/Profit'
import { StartMining } from './components/StartMining/index'
import { Table } from './components/Table'
import { coins } from './components/Table/mockData'
import { Button } from './components/Button'

interface MiningProps {
  clientWidth: number
}

export const Mining: React.FC<MiningProps> = ({ clientWidth }) => {
  return (
    <section className={styles.mining}>
      <div>
        <h2>Майнинг</h2>
        <div className={styles.mining__profit}>
          <Profit />
          <StartMining />
        </div>
        {clientWidth > 768 ? (
          <div className={styles.mining__buttons}>
            <Button type='info' text='Автоматическая продажа' />
            <Button type='none' text='Продать вручную' />
          </div>
        ) : (
          <div className={styles.mining__buttonToday}>
            Сегодня
            <img src={arrowWhiteRight} />
          </div>
        )}
      </div>
      <Table coins={coins} clientWidth={clientWidth} />
    </section>
  )
}
