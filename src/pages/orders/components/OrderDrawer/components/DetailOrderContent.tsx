import React from 'react'
import styles from './style.module.scss'
import noImage from '@images/noImage.png'
import { useAppSelector } from '@app/redux/hooks'
import { formatPrice } from '@helpers/formatPrice'

export const DetailOrderContent: React.FC = () => {
  const data = useAppSelector((state) => state.detailOrderInfo)
  const items = useAppSelector((state) => state.detailOrderInfo.items)
  const totalPrice = useAppSelector((state) => state.detailOrderInfo.amount)
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0)

  return data ? (
    <div className={styles.sidebarContent}>
      <div className={styles.orderDetails}>
        <p className={styles.sectionName}>Содержание заказа</p>
        <div className={styles.detailSection}>
          <div className={styles.orderContent}>
            <div className={styles.orderHead}>
              <div className={styles.orderName}>Наименование</div>
              <div />
              <div className={styles.orderPrice}>Количество</div>
              <div className={styles.orderSumm}>Сумма</div>
            </div>
            {items.length !== 0 ? (
              items.map((item, index) => (
                <div className={styles.orderRow} key={index}>
                  <div className={styles.orderElementImage}>
                    <img src={noImage} alt='no-image' />
                  </div>
                  <div className={styles.orderElementName}>
                    <div className={styles.name}>{item?.name}</div>
                    <div className={styles.article}>Арт.: {item?.code}</div>
                  </div>
                  <div className={styles.orderElementPrice}>
                    <div className={styles.priceContainer}>
                      <span className={styles.count}>{item?.quantity}</span>
                      <span className={styles.price}>{formatPrice(item?.price)} ₽/шт.</span>
                    </div>
                  </div>
                  <div className={styles.orderElementSumm}>{formatPrice(item?.quantity * item?.price)} ₽</div>
                </div>
              ))
            ) : (
              <div className={styles.noItems}>Нет данных для отображения</div>
            )}

            <div className={styles.orderSummary}>
              <div className={styles.summaryLabel}>
                Итого<span className={styles.summaryCount}>({totalCount})</span>
              </div>
              <div className={styles.summary}>{formatPrice(totalPrice)} ₽</div>
            </div>
          </div>
        </div>
        <div className={styles.detailSection}>
          <p className={styles.label}>Условия оплаты</p>
          <p className={styles.sectionValue}>Выставление счета</p>
        </div>
        <div className={styles.detailSection}>
          <p className={styles.label}>Условия доставки</p>
          <p className={styles.sectionValue}>Склад</p>
        </div>
        <div className={styles.detailSection}>
          <p className={styles.label}>Комментарий</p>
          <p className={styles.sectionValue}>Нет комментария</p>
        </div>
      </div>
    </div>
  ) : null
}
