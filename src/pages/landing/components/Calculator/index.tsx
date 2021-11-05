import React from 'react'
import Styles from './styles.module.scss'

import { CalculatorCaption } from './components/CalculatorCaption'
import { CalculatorSlider } from './components/CalculatorSlider'

export const Calculator: React.FC = () => {
  return (
    <section id='calc' className={Styles.calculator}>
      <div className={Styles.wrapper}>
        <CalculatorCaption />
        <CalculatorSlider />
      </div>
    </section>
  )
}
