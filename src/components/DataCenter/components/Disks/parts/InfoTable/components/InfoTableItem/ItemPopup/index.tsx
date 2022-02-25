import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'
import ItemPopupCloseBtn from '@icons/ItemPopupCloseBtn'
import { IItem } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem'
import useWindowSize from '@helpers/useWindowSizeHook'
import { BottomModal } from '@components/Modal/BottomModal'

export interface IItemPopup {
  isOpen: boolean
  onClose: () => void
  item: IItem
}

export const ItemPopup: React.FC<IItemPopup> = ({ isOpen, onClose, item }) => {
  const { Vendor, Product, UserCapacity, RotationRate, FormFactor, temperature } = item
  const { width } = useWindowSize()
  const desktop = width > 971

  return desktop ? (
    <div
      className={cn(styles.itemPopup__wrapper, {
        [styles.hidden]: !isOpen,
      })}
    >
      <button className={styles.itemPopup__close__btn} onClick={onClose}>
        <ItemPopupCloseBtn />
      </button>
      <div className={styles.itemPopup__titles}>
        <div className={styles.itemPopup__title}>Vendor:</div>
        <div className={styles.itemPopup__title}>Product:</div>
        <div className={styles.itemPopup__title}>User Capacity:</div>
        <div className={styles.itemPopup__title}>Rotation Rate:</div>
        <div className={styles.itemPopup__title}>Form Factor:</div>
        <div className={styles.itemPopup__title}>Temperature:</div>
      </div>
      <div className={styles.itemPopup__content}>
        <div className={styles.itemPopup__text}>{Vendor}</div>
        <div className={styles.itemPopup__text}>{Product}</div>
        <div className={styles.itemPopup__text}>{UserCapacity}</div>
        <div className={styles.itemPopup__text}>{RotationRate} rmp</div>
        <div className={styles.itemPopup__text}>{FormFactor} inches</div>
        <div className={styles.itemPopup__text}>{temperature}℃</div>
      </div>
    </div>
  ) : (
    <BottomModal active={isOpen} setActive={onClose}>
      <div className={styles.itemPopup__container}>
        <div className={styles.itemPopup__titles}>
          <div className={styles.itemPopup__title}>
            Vendor:
            <div style={{ marginLeft: 64 }} className={styles.itemPopup__text}>
              {Vendor}
            </div>
          </div>
          <div className={styles.itemPopup__title}>
            Product:
            <div style={{ marginLeft: 60 }} className={styles.itemPopup__text}>
              {Product}
            </div>
          </div>
          <div className={styles.itemPopup__title}>
            User Capacity:
            <div style={{ marginLeft: 24 }} className={styles.itemPopup__text}>
              {UserCapacity}
            </div>
          </div>
          <div className={styles.itemPopup__title}>
            Rotation Rate:
            <div style={{ marginLeft: 25 }} className={styles.itemPopup__text}>
              {RotationRate} rmp
            </div>
          </div>
          <div className={styles.itemPopup__title}>
            Form Factor:
            <div style={{ marginLeft: 34 }} className={styles.itemPopup__text}>
              {FormFactor} inches
            </div>
          </div>
          <div className={styles.itemPopup__title}>
            Temperature:
            <div style={{ marginLeft: 30 }} className={styles.itemPopup__text}>
              {temperature}℃
            </div>
          </div>
        </div>
      </div>
    </BottomModal>
  )
}
