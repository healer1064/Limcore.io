import React from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import { Step1 } from '../EditEmail/components/Step1'
import { Step2 } from '../EditEmail/components/Step2'

export const EditEmail: React.FC = () => {
  const step = useAppSelector((state) => state.cabinet.step)

  return (
    <div className={Styles.email}>
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
    </div>
  )
}
