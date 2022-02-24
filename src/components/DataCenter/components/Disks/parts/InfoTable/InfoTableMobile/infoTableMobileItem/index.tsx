import React, { FC } from 'react'
import styles from './styles.module.scss'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { DataCenterInfoBtnMobile } from '@icons/DataCenterInfoBtnMobile'
import EllipseDataCenter from '@icons/EllipseDataCenter'

export interface IInfoTableItem {
  hardDisk: string
  size: number
  quantity: number
  temperature: number
  index: number
}

export const InfoTableMobileItem: FC<IInfoTableItem> = ({ hardDisk, size, quantity, temperature, index }) => {
  const backgroundColor = index % 2 === 0 ? { background: '#1C3234' } : { background: '#192A2C' }

  return (
    <li className={styles.infoTableMobile__list__item} style={backgroundColor}>
      <div className={styles.infoTableMobile__list__hard__disk}>
        <p className={styles.infoTableMobile__list__hard__disk__name}>{hardDisk}</p>
        <div className={styles.infoTableMobile__list__quantity}>Количество плотов: {quantity}</div>
      </div>
      <div className={styles.infoTableMobile__list__size}>
        <div className={styles.infoTableMobile__list__size__content}>
          <p className={styles.infoTableMobile__list__size__title}>{size} TB</p>
          <div className={styles.infoTableMobile__list__temperature}>
            <div className={styles.infoTableMobile__list__temperature__content}>
              <EllipseDataCenter />
              <p className={styles.infoTableMobile__list__temperature__content__text}>{temperature}℃</p>
            </div>
          </div>
        </div>
        <LoadLine
          className={styles.infoTableMobile__list__size__line}
          classNameBar={styles.infoTableMobile__list__size__line__bar}
          width='40%'
        />
      </div>
      <button className={styles.infoTableMobile__list__btn}>
        <DataCenterInfoBtnMobile />
      </button>
    </li>
  )
}
