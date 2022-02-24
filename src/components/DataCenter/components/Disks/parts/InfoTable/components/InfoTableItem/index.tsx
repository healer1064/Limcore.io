import React, { FC } from 'react'
import styles from './styles.module.scss'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { DataCenterInfoBtn } from '@icons/DataCenterInfoBtn'
import EllipseDataCenter from '@icons/EllipseDataCenter'

export interface IInfoTableItem {
  hardDisk: string
  size: number
  quantity: number
  temperature: number
  index: number
}

export const InfoTableItem: FC<IInfoTableItem> = ({ hardDisk, size, quantity, temperature, index }) => {
  const backgroundColor = index % 2 === 0 ? { background: '#1C3234' } : { background: '#192A2C' }

  return (
    <li className={styles.infoTable__list__item} style={backgroundColor}>
      <div className={styles.infoTable__list__hard__disk}>
        <p className={styles.infoTable__list__hard__disk__name}>{hardDisk}</p>
        <button className={styles.infoTable__list__hard__disk__btn}>
          <DataCenterInfoBtn />
        </button>
      </div>
      <div className={styles.infoTable__list__size}>
        <p className={styles.infoTable__list__size__title}>{size} TB</p>
        <LoadLine
          className={styles.infoTable__list__size__line}
          classNameBar={styles.infoTable__list__size__line__bar}
          width='40%'
        />
      </div>
      <div className={styles.infoTable__list__quantity}>{quantity}</div>
      <div className={styles.infoTable__list__temperature}>
        <div className={styles.infoTable__list__temperature__content}>
          <EllipseDataCenter />
          <p className={styles.infoTable__list__temperature__content__text}>{temperature}℃</p>
        </div>
      </div>
    </li>
  )
}
