import React, { useEffect, useState } from 'react'
import { SearchInput } from '@components/SearchInput'
// import basket from '../../../../assets/icons/basket.png'
import Styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { useDebounce } from 'use-debounce/lib'
import { filter } from '../../redux/orderSlicer'
import { isInArray } from '@helpers/isInArray'

const title = 'Заказы'

export const OrdersHeader = (props) => {
  const [value, setValue] = useState('')
  const [searchValue] = useDebounce(value, 800)
  const filterState = useAppSelector((state) => state.orders.chekedObject)
  const filterArray = useAppSelector((state) => state.orders.filtered)
  const dispatch = useAppDispatch()

  const handleResetInputValue = () => setValue('')

  useEffect(() => {
    if (searchValue.length !== 0) {
      if (isInArray('search', filterArray)) {
        const filterArrayCopy = filterArray.filter((item: any) => item.id !== 'search')
        dispatch(filter([...filterArrayCopy, { id: 'search', value: [searchValue] }]))
      } else {
        dispatch(filter([...filterArray, { id: 'search', value: [searchValue] }]))
      }
    } else {
      const filterArrayCopy = filterArray.filter((item: any) => item.id !== 'search')
      dispatch(filter(filterArrayCopy))
    }
  }, [searchValue])

  return (
    <div className={Styles.header}>
      {title}
      <div className={Styles.buttons__container}>
        <SearchInput text={value} onChange={(e) => setValue(e)} onReset={handleResetInputValue} />
        <button className={Styles.filter_button} type='button' onClick={props.openFilter}>
          {Object.keys(filterState).length !== 0 && (
            <div className={Styles.filters_count}>{Object.keys(filterState).length}</div>
          )}
          <span>Фильтры</span>
        </button>
        {/* <button className={Styles.basket_btn} type='button' onClick={props.openModal}> */}
        {/*  <img className={Styles.basket_icon} src={basket} alt='basket' /> */}
        {/* </button> */}
      </div>
    </div>
  )
}
