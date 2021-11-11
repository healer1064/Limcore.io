import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeViewContent, changeStep } from '../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

interface ContainerProps {
  title: string
  onClick?: () => void
  onClose?: () => void
  onClickBack?: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Container: React.FC<ContainerProps> = ({ title, onClick, onClose, onClickBack, children }) => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const previousStep = () => dispatch(changeStep(step - 1))

  const closeContainer = () => {
    dispatch(changeViewContent('none'))
    dispatch(changeStep(0))
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        {step === 0 ? (
          <button className={`${Styles.back} ${Styles.back_hide}`}>{}</button>
        ) : (
          <button className={Styles.back} onClick={!onClickBack ? previousStep : onClickBack}>
            {}
          </button>
        )}
        <span className={Styles.caption}>{title}</span>
        <button className={Styles.close} onClick={!onClose ? closeContainer : onClose}>
          {}
        </button>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  )
}
