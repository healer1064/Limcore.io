import React, { useEffect } from 'react'

import Styles from './style.module.scss'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { useLocalStorage } from '@lib/hooks/useLocalStorage'
import { parseItem } from './redux/catalogSlicer'
import { Spinner } from '@components/Spinner'
import { useAppSelector } from '@app/redux/hooks'

const orderCatalogBreadCrumbs = [
  { link: '/orders', label: 'Заказы' },
  { link: '/catalog', label: 'Каталог оборудования' },
]

export const OrderCatalog = () => {
  // Пример использования Hook для извлечения/помещения данных в localeStorage по ключу
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [processId, setProcessId] = useLocalStorage('processId', null)
  const status = useAppSelector((state) => state.catalogList.isLoading)

  useEffect(() => {
    // Пример использования action из Redux для обработки и логики надо какими-то значениями в сторе
    parseItem(null)
  })

  // Пример испольщования хлебных крошек и пример использования Лоадера из Redux state
  return (
    <div className={Styles.catalog}>
      <div className={Styles.catalog__content}>
        <div className={Styles.catalog__item_content}>
          <Breadcrumbs breadCrumbs={orderCatalogBreadCrumbs} />
          {status === 'loading' || !status ? (
            <div className={Styles.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            <span>здесть контент</span>
          )}
        </div>
      </div>
    </div>
  )
}
