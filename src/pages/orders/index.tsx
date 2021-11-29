import React, { useCallback, useEffect, useState } from 'react'
import Styles from './style.module.scss'
import { OrderTable } from './components/OrdersTable'
import { OrdersSorting } from './components/OrdersSorting'
import { OrderModal } from './components/OrderModal'
import { OrderDrawer } from './components/OrderDrawer'
import { OrdersHeader } from './components/OrdersHeader'
import { FilterDrawer } from './components/FilterDrawer'

import { getOrders, sort, changePageSize, pageChange } from './redux/orderSlicer'
// eslint-disable-next-line import/named
import { clearItems } from './redux/detailOrderSlicer'
import { TableComponent } from '@components/TableComponent'
import { PaginationComponent } from '@components/Pagination'
import { RowTable } from '@components/TableComponent/components/Row'
import { DrawerPanel } from '@components/Drawer'
import { TransitionsModal } from '@components/TransitionsModal'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { Spinner } from '@components/Spinner'
import { api } from '@app/api'
import { useLocalStorage } from '@lib/hooks/useLocalStorage'
import { useHistory } from 'react-router-dom'

// Пример использования компонента таблицы, для посроения таблиц по колонкам
const RenderOrderTableRow = (setOrderOpened, data) => {
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <RowTable setOrderOpened={setOrderOpened} key={item.id}>
              <OrderTable setOrderOpened={setOrderOpened} row={item} />
            </RowTable>
          )
        })}
    </div>
  )
}

export const OrdersPage = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const userId: string | null = useAppSelector((state) => state.user?.userId)
  const defaultPage = useAppSelector((state) => state.orders.pagination.number)
  const pageSize = useAppSelector((state) => state.orders.pagination.size)
  const totalPages = useAppSelector((state) => state.orders.pagination.totalPages)
  const totalElements = useAppSelector((state) => state.orders.pagination.totalElements)
  const status = useAppSelector((state) => state.orders.status)
  const orders = useAppSelector((state) => state.orders.orders)
  const filteredArray = useAppSelector((state) => state.orders.filtered)
  const sortArray = useAppSelector((state) => state.orders.sortArray)
  const accountNumber = useAppSelector((state) => state.profile.activeAgreement?.accountNumber)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [processId, setProcessId] = useLocalStorage('processId', null)

  const [isOpenFilters, setDrawerOpened] = useState(false)
  const [isOpenOrder, setOrderOpened] = useState(false)
  const [isOpenModal, setModalOpened] = useState(false)
  const [rowCount, setRowCount] = useState([
    { id: 0, value: 10, active: false },
    { id: 1, value: 20, active: false },
    { id: 2, value: 50, active: false },
  ])

  const getUserOrders = useCallback(() => {
    if (userId) {
      const value = {
        userId,
        data: {
          number: defaultPage,
          size: pageSize,
          filtered: [...filteredArray, { id: 'accountNumber', value: [accountNumber] }],
          sorted: sortArray,
        },
      }
      dispatch(getOrders(value))
    }
  }, [dispatch, userId, pageSize, defaultPage, sortArray, filteredArray])

  const setRowCountOnPage = (value) => {
    dispatch(changePageSize(value))
  }

  useEffect(() => {
    getUserOrders()
  }, [userId, rowCount, defaultPage, sortArray, filteredArray])

  useEffect(() => {
    if (pageSize) {
      const newArr = rowCount.map((item) => {
        if (item.value === pageSize) {
          item.active = true
          return item
        } else {
          item.active = false
          return item
        }
      })
      setRowCount(newArr)
    }
  }, [pageSize])

  const sortOrders = (name: string) => {
    dispatch(sort(name))
  }

  const handlePageChange = (e, page) => {
    dispatch(pageChange(Number(page) - 1))
  }

  const handleCloseDetailOrder = () => {
    setOrderOpened(false)
    dispatch(clearItems())
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createNewOrder = () => {
    api
      .post<any>('order/new', {
        accountNumber,
        ppoUserId: userId,
      })
      .then((response) => {
        setProcessId(response?.data?.id)
      })
      .then(() => history.push('/catalog'))
  }

  return (
    <div className={Styles.main_container}>
      <div className={Styles.table_container}>
        {/* Пример испольщования боковой панели */}
        <DrawerPanel
          anchor='right'
          open={isOpenFilters}
          onClose={() => setDrawerOpened((isOpen) => !isOpen)}
          width={376}
        >
          <FilterDrawer isOpenFilter={() => setDrawerOpened(false)} />
        </DrawerPanel>
        <DrawerPanel
          anchor='right'
          open={isOpenOrder}
          onClose={() => {
            setOrderOpened((isOpen) => !isOpen)
            if (isOpenOrder) {
              dispatch(clearItems())
            }
          }}
          width={676}
        >
          <OrderDrawer onClose={handleCloseDetailOrder} />
        </DrawerPanel>
        <TransitionsModal isOpenModal={isOpenModal} setModalOpened={setModalOpened}>
          <OrderModal />
        </TransitionsModal>
        <div className={Styles.orders_content}>
          <OrdersHeader openFilter={() => setDrawerOpened(true)} openModal={() => setModalOpened(true)} />
          <OrdersSorting sortOrders={sortOrders} />
          {status === 'loading' || !status ? (
            <div className={Styles.spinner_container}>
              <Spinner />
            </div>
          ) : (
            <div className={Styles.table_container}>
              <TableComponent className={`${Styles.table_height}`}>
                {RenderOrderTableRow(setOrderOpened, orders)}
              </TableComponent>
            </div>
          )}
          <PaginationComponent
            onChange={handlePageChange}
            setRowCountOnPage={setRowCountOnPage}
            rowCount={rowCount}
            totalElements={totalElements}
            totalPages={totalPages}
            defaultPage={defaultPage}
          />
        </div>
      </div>
    </div>
  )
}
