import React from 'react'
import { Status } from '@components/TableComponent/components/Status'
import styles from './style.module.scss'
import cancel from '@icons/cancel.svg'
import { useAppSelector } from '@app/redux/hooks'
import { formatDate } from '@helpers/formatDate'

interface DetailOrderHeaderProps {
  closeDetailOrder: () => void
}

export const DetailOrderHeader: React.FC<DetailOrderHeaderProps> = ({ closeDetailOrder }) => {
  const detailInfo = useAppSelector((state) => state.detailOrderInfo)

  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.orderStatus}>
        <Status statusText={detailInfo?.status} />
        <img className={styles.closeIcon} src={cancel} alt='close' onClick={closeDetailOrder} />
      </div>
      <div className={styles.orderNumber}>Заказ № {detailInfo?.name}</div>
      <div className={styles.sectionDate}>от {formatDate(detailInfo?.ddate)}</div>
      <div className={styles.sectionInfo}>
        <div className={styles.sectionInfoVariables}>
          <p className={styles.variable}>Номер договора:</p>
          <p className={styles.variable}>Номер ЛС:</p>
          <p className={styles.variable}>Партнер:</p>
          <p className={styles.variable}>Канал продаж:</p>
          <p className={styles.variable}>Регион:</p>
        </div>
        <div className={styles.sectionInfoValues}>
          <p className={styles.variable}>{detailInfo?.agreement.name}</p>
          <p className={styles.variable}>{detailInfo?.accountNumber.number}</p>
          <p className={styles.variable}>{detailInfo?.agreement.partner.name}</p>
          <p className={styles.variable}>{detailInfo?.agreement.salesChannel}</p>
          <p className={styles.variable}>{detailInfo?.agreement.regions[0].name}</p>
        </div>
      </div>
    </div>
  )
}
