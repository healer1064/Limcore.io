import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep } from '../../../../../pages/cabinet/redux/cabinetSlice'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'

export const ProfileFilling: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)

  const nextStep = (event, step) => {
    event.preventDefault()
    dispatch(changeStep(step))
  }

  return (
    <>
      {step === 0 && <Step1 nextStep={nextStep} />}
      {step === 1 && <Step2 nextStep={nextStep} />}
      {step === 2 && <Step3 />}
    </>
  )
}
