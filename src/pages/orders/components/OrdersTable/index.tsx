import React from 'react'
// import { MtsCheckbox } from '@mts-ds/components-react'

import { formatPrice } from '@helpers/formatPrice'

import { Status } from '@components/TableComponent/components/Status'
import { Cell } from '@components/TableComponent/components/Cell'
import { TableText } from '@components/TableComponent/components/TableText'
// import { CheckboxSizes } from '@app/types'

import style from './style.module.scss'
import moment from 'moment'
import { useAppDispatch } from '@app/redux/hooks'
import { getDetailOrderInfo } from '../../redux/detailOrderSlicer'

export const OrderTable = (props) => {
  const { row } = props
  const dispatch = useAppDispatch()

  const handleOpenDetailInfo = (id) => {
    props.setOrderOpened(true)
    dispatch(getDetailOrderInfo(id))
  }
  return (
    <div role='presentation' className={style.row_container} onClick={() => handleOpenDetailInfo(row.id)}>
      <Cell className={`${style.first_column} ${style.orders_cell}`}>
        <Cell className={`${style.order_number}`} onClick={(e) => e.stopPropagation()}>
          {/* <MtsCheckbox size={CheckboxSizes.s} id={row?.orderId} /> */}
          <div>
            <TableText value={row?.orderId} />
          </div>
        </Cell>
        <div className={style.status_tag}>
          <Status statusText={row?.status} />
        </div>
      </Cell>
      {/* <Cell className={`${style.orders_cell}`}> */}
      {/*  <TableText className={`${style.order_count}`} value={row?.countInOrder} /> */}
      {/* </Cell> */}
      <Cell className={`${style.orders_cell}`}>
        <TableText className={`${style.order_date}`} value={moment(row?.creationDate).format('HH:mm DD.MM.YYYY')} />
        <TableText className={`${style.order_price}`} value={`${formatPrice(row?.price)} ₽`} />
      </Cell>
    </div>
  )
}
