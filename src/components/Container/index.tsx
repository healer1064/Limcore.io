import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent, changeStep } from '../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

interface ContainerProps {
  title: string
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const closeContainer = () => {
    dispatch(changeViewContent('none'))
    dispatch(changeStep(0))
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <button className={step === 0 ? `${Styles.back} ${Styles.back_hide}` : `${Styles.back}`}>{}</button>
        <span className={Styles.caption}>{title}</span>
        <button className={Styles.close} onClick={closeContainer}>
          {}
        </button>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  )
}
