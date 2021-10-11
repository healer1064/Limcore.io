import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getSalesPlan } from './redux/salesPlanSlicer'
import Styles from './style.module.scss'
import { api } from '@app/api'
import { useLocalStorage } from '@lib/hooks/useLocalStorage'

export const HomePage = () => {
  const dispatch = useAppDispatch()

  // Пример получения данных их Store Redux
  const agreementName = useAppSelector((state) => state.profile.activeAgreement?.name)
  const accountNumber = useAppSelector((state) => state.profile.activeAgreement?.accountNumber)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [processId, setProcessId] = useLocalStorage('processId', null)

  // Пример использщования reducer для запроса данных черех АПИ и Redux
  const getPageData = useCallback(() => {
    if (agreementName) {
      dispatch(getSalesPlan(agreementName))
    }
  }, [dispatch, agreementName])

  useEffect(() => {
    getPageData()
  }, [getPageData])

  // TODO - убрать отключение линтера ниже, когда (если) функция будет испольщоваться
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createNewPostObject = () => {
    // Пример использования API модуля для создания POST запроса
    api
      .post<any>('object/new', {
        accountNumber,
      })
      .then((response) => {
        setProcessId(response?.data?.id)
      })
  }

  return (
    <div className={Styles.main_container}>
      <div className={Styles.center}>Main page of Project</div>
    </div>
  )
}
