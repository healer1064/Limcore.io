import React from 'react'
import { useAppSelector } from '@app/redux/hooks'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'

export const AuthAuthorization: React.FC = () => {
  const stepAuthorization = useAppSelector((state) => state.auth.stepAuthorization)

  return (
    <>
      {stepAuthorization === 1 && <Step1 />}
      {stepAuthorization === 2 && <Step2 />}
    </>
  )
}
