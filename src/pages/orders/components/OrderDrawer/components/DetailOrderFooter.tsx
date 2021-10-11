import React from 'react'
import { Button } from '@components/Button'
import styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { downloadBill } from '../../../../orders/redux/orderSlicer'

export const DetailOrderFooter: React.FC = () => {
  const orderStatus = useAppSelector((state) => state.detailOrderInfo.status)
  const orderId = useAppSelector((state) => state.detailOrderInfo.id)
  const dispatch = useAppDispatch()

  const handleDownloadBill = () => {
    dispatch(downloadBill(orderId))
  }

  return (
    <div className={styles.buttonContainer}>
      {orderStatus === 'Выставление счета' && (
        <Button type='secondary-red' fullWidth={false} onClick={handleDownloadBill}>
          Скачать счет
        </Button>
      )}
      <Button type='secondary-blue' fullWidth={false}>
        Заказать ещё
      </Button>
    </div>
  )
}
