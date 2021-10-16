import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'

export const ProfileFilling: React.FC = () => {
  const [step, setStep] = useState(1)

  const nextStep = (event, step) => {
    event.preventDefault()
    setStep(step)
  }

  return (
    <>
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} />}
      {step === 3 && <Step3 />}
    </>
  )
}
