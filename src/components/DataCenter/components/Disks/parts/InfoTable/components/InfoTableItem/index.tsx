import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { DataCenterInfoBtn } from '@icons/DataCenterInfoBtn'
import EllipseDataCenter from '@icons/EllipseDataCenter'
import { ItemPopup } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem/ItemPopup'

export interface IInfoTableItem {
  item: IItem
  index: number
}

export interface IItem {
  hardDisk: string
  size: number
  quantity: number
  temperature: number
  Vendor: string
  Product: string
  UserCapacity: string
  RotationRate: number
  FormFactor: number
}

export const InfoTableItem: FC<IInfoTableItem> = ({ item, index }) => {
  const { hardDisk, size, quantity, temperature } = item
  const backgroundColor = index % 2 === 0 ? { background: '#1C3234' } : { background: '#192A2C' }
  const [showItemPopup, setShowItemPopup] = useState(false)
  let timeout = null
  const showPopup = () => {
    clearInterval(timeout)
    setShowItemPopup(true)
  }

  const hidePopup = () => {
    timeout = setTimeout(() => setShowItemPopup(false), 100)
  }

  return (
    <li className={styles.infoTable__list__item} style={backgroundColor}>
      <ItemPopup isOpen={showItemPopup} onClose={hidePopup} item={item} />
      <div className={styles.infoTable__list__hard__disk}>
        <p className={styles.infoTable__list__hard__disk__name}>{hardDisk}</p>
        <button className={styles.infoTable__list__hard__disk__btn} onClick={showPopup}>
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
