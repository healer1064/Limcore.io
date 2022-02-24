import React from 'react'

import styles from './styles.module.scss'
import { data } from './mockData'
import limcYellow from '@icons/limcYellow.svg'
import loaderEmitate from '@icons/loaderEmitateIcon.svg'

export const ModalTable: React.FC = () => {
  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <p>Дата покупки</p>
        <p>Сумма</p>
        <p>До старта</p>
      </div>
      {data.map((el, idx) => {
        const background = idx % 2 === 0 ? 'rgba(28, 50, 52, 1)' : 'rgba(25, 42, 44, 1)'
        return (
          <div className={styles.titem} style={{ background }} key={el.id}>
            <p>{el.date}</p>
            <p>
              {el.sum}
              <img className={styles.limcYellow} src={limcYellow} />
            </p>
            <p>
              {el.beforeStart.passed}/{el.beforeStart.all}
              <img className={styles.loading} src={loaderEmitate} />
            </p>
          </div>
        )
      })}
    </div>
  )
}
