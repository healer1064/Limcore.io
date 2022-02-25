import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { DataCenterInfoBtnMobile } from '@icons/DataCenterInfoBtnMobile'
import EllipseDataCenter from '@icons/EllipseDataCenter'
import { IItem } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem'
import { ItemPopup } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem/ItemPopup'

export interface IInfoTableItem {
  item: IItem
  index: number
}

export const InfoTableMobileItem: FC<IInfoTableItem> = ({ item, index }) => {
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
    <li className={styles.infoTableMobile__list__item} style={backgroundColor}>
      <ItemPopup isOpen={showItemPopup} onClose={hidePopup} item={item} />
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
      <button className={styles.infoTableMobile__list__btn} onClick={showPopup}>
        <DataCenterInfoBtnMobile />
      </button>
    </li>
  )
}
