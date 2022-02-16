import React from 'react'
import styles from './style.module.scss'
import { BottomModal } from '@components/Modal/BottomModal'
import { MobileAddress } from '../MobileAddress'
import { CircleDiagram } from '@components/DataCenter/components/Owners/parts/OwnersTable/parts/CircleDiagram'

export interface ITableModal {
  address: string
  days: string
  rating: string
  tokens: string
  active: boolean
  setActive: () => void
  info: any
}

export const TableModal: React.FC<ITableModal> = ({ address, days, rating, tokens, active, setActive, info }) => {
  return (
    <BottomModal style={{ zIndex: 5000 }} active={active} setActive={setActive}>
      <div className={styles.wrapper}>
        <MobileAddress address={address} days={days} rating={rating} />
        <div className={styles.tokens}>{tokens}</div>
      </div>
      <div>
        {info.map((el) => (
          <>
            <div className={styles.info_wrapper}>
              <div className={styles.line_wrapper}>
                <p className={styles.date}>{el.dates}</p>
                <p className={styles.size}>{el.size}</p>
              </div>
              <div className={styles.graphs}>
                <p className={styles.graphs__text}>
                  {el.graphs.current} из {el.graphs.limit}
                </p>
                <CircleDiagram className={styles.donut} current={el.graphs.current} limit={el.graphs.limit} />
              </div>
            </div>
          </>
        ))}
      </div>
    </BottomModal>
  )
}
