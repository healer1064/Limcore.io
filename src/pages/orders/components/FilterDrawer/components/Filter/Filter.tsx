import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PriceRange } from './PriceRange'
import { Multiselect } from './Multiselect'
import { DatePicker } from './DatePicker'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { filter, setCheckedObject } from '../../../../redux/orderSlicer'

const useStyles = makeStyles({
  paper: {
    padding: '32px 32px 90px 32px',
    maxWidth: '376px',
    width: '100%',
    top: '68px',
    boxSizing: 'border-box',
    fontFamily: "'Raleway', sans-serif",
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 2px lightgray',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'lightgray',
      borderRadius: '10px',
      '&:hover': {
        background: '#bfbfbf',
      },
    },
  },
  heading: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'bold',
  },
  column: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '24px',
  },
  closeFilter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F2F3F7',
    padding: '10px 24px',
    lineHeight: '24px',
    fontSize: '16px',
    color: '#1D2023',
    cursor: 'pointer',
    marginLeft: '16px',
    fontWeight: 600,
    borderRadius: '8px',
  },
  clearAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFF',
    padding: '10px 24px',
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#EB4A13',
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '2px solid rgba(188, 195, 208, 0.5)',
    borderRadius: '8px',
  },
})

export const Filter: React.FC<any> = ({ openFilter }) => {
  const classes = useStyles()
  const orders = useAppSelector((state) => state.orders.orders)
  const dispatch = useAppDispatch()
  const [orderNumbers] = useState<string[]>(orders.map((item) => item.orderId))
  const [orderPrices] = useState<number[]>(orders.map((item) => item.price))

  const statuses = [
    'Отправлен',
    'Черновик',
    'Отменен',
    'Выставление счета',
    'Ожидание оплаты',
    'В обработке',
    'Выполнен',
  ]

  const handleClearAllFilters = () => {
    dispatch(filter([]))
    dispatch(setCheckedObject({}))
  }

  return (
    <div className={classes.column}>
      <div>
        <div className={classes.heading}>Фильтры</div>
        <Multiselect items={orderNumbers} label='Номер заказа' filterName='orderId' />
        <Multiselect items={statuses} label='Статус' filterName='status' />
        <DatePicker label='Период создания' filterName='creationDate' />
        <PriceRange items={orderPrices} label='Сумма' filterName='price' />
      </div>
      <div className={classes.buttonsContainer}>
        <div role='button' className={classes.clearAll} onClick={() => handleClearAllFilters()}>
          Очистить
        </div>
        <div role='button' className={classes.closeFilter} onClick={openFilter}>
          Скрыть
        </div>
      </div>
    </div>
  )
}
