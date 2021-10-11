import React, { useState, useEffect } from 'react'
import ordersStyle from '../OrdersTable/style.module.scss'
import Style from './style.module.scss'
import { ArrowDown } from './components/ArrowDown'
import { ArrowUp } from './components/ArrowUp'
import { Cell } from '@components/TableComponent/components/Cell'
import { sort } from '../../redux/orderSlicer'
import { useAppDispatch } from '@app/redux/hooks'

export interface OrderSortingProps {
  sortOrders: (value: string) => void
}

export const OrdersSorting: React.FC<OrderSortingProps> = () => {
  const dispatch = useAppDispatch()
  const [sortArray, setSortArray] = useState([
    { id: 'orderId', value: 'DESC' },
    { id: 'status', value: 'DESC' },
    { id: 'count', value: 'DESC' },
    { id: 'creationDate', value: 'DESC' },
    { id: 'price', value: 'DESC' },
  ])
  const [arrayForApi, setApiArray] = useState(null)

  const sortOrders = (name: string) => {
    const newArr = [...sortArray].map((item) => {
      let newValue = { id: name, value: item.value }
      if (item.id === name) {
        newValue = { id: name, value: item.value === 'ASC' ? 'DESC' : 'ASC' }
        item = newValue
        setApiArray([item])
        return item
      } else {
        newValue = { id: item.id, value: 'DESC' }
        item = newValue
        return item
      }
    })
    setSortArray(newArr)
  }

  useEffect(() => {
    if (arrayForApi) {
      dispatch(sort(arrayForApi))
    }
  }, [arrayForApi])

  const findSortItem = (id) => {
    return sortArray.find((item) => item.id === id)?.value
  }

  return (
    <div className={Style.sorting_container}>
      <Cell className={`${Style.sorting_first_column} ${ordersStyle.orders_cell}`}>
        <Cell onClick={() => sortOrders('orderId')} className={`${Style.first_cell} ${Style.sorting_cell}`}>
          <span className={Style.text}>Номер</span>
          {findSortItem('orderId') === 'ASC' ? <ArrowUp /> : <ArrowDown />}
        </Cell>
        <Cell onClick={() => sortOrders('status')} className={`${Style.sorting_cell}`}>
          <span className={Style.text}>Статус</span>
          {findSortItem('status') === 'ASC' ? <ArrowUp /> : <ArrowDown />}
        </Cell>
      </Cell>
      {/* <Cell */}
      {/*  onClick={() => sortOrders('count')} */}
      {/*  className={`${ordersStyle.orders_cell} ${Style.count_sorting} ${Style.sorting_cell}`} */}
      {/* > */}
      {/*  <span className={Style.text}>Количество позиций</span> */}
      {/*  {findSortItem('count') === 'ASC' ? <ArrowUp /> : <ArrowDown />} */}
      {/* </Cell> */}
      <Cell className={`${ordersStyle.orders_cell} ${Style.price_cell}`}>
        <Cell onClick={() => sortOrders('creationDate')} className={`${Style.date_sorting} ${Style.sorting_cell}`}>
          <span className={Style.text}>Дата создания заказа</span>
          {findSortItem('creationDate') === 'ASC' ? <ArrowUp /> : <ArrowDown />}
        </Cell>
        <Cell onClick={() => sortOrders('price')} className={`${Style.price_sorting} ${Style.sorting_cell}`}>
          <span className={Style.text}>Сумма заказа</span>
          {findSortItem('price') === 'ASC' ? <ArrowUp /> : <ArrowDown />}
        </Cell>
      </Cell>
    </div>
  )
}
