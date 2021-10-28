import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { Step4 } from './components/Step4'

export const AuthRegistration: React.FC = () => {
  const stepRegistration = useAppSelector((state) => state.authNew.stepRegistration)

  return (
    <>
      {stepRegistration === 1 && <Step1 />}
      {stepRegistration === 2 && <Step2 />}
      {stepRegistration === 3 && <Step3 />}
      {stepRegistration === 4 && <Step4 />}
    </>
  )
}
