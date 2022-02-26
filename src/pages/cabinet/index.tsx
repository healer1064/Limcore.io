import React from 'react'

import styles from './styles.module.scss'
import { BalanceLIMC } from './components/BalanceLIMC'
import { ConverterLIMC } from './components/ConverterLIMC'
import useWindowSize from '@helpers/useWindowSizeHook'
import graphTemp from '@icons/GraphTemp.svg'
import { AccordionUI } from './components/Accordion'
import { ASide } from './components/ASide'
import { Rating } from './components/ASide/Rating'
import { NewCard } from './components/ASide/NewCard'
import { Mining } from './components/Mining'
import { RefLink } from './components/ASide/RefLink'

export const CabinetPage: React.FC = () => {
  const { width } = useWindowSize()

  const mobileCondition = width <= 768

  const graph = <img className={styles.cabinet__balanceGraph} src={graphTemp} />

  return (
    <div className={styles.cabinet}>
      <div className={styles.cabinet__container}>
        {width > 1100 && <ASide clientWidth={width} />}
        <div>
          <section className={styles.cabinet__balance}>
            <h2>Баланс</h2>
            <div>
              <div style={{ width: '100%' }}>
                <BalanceLIMC clientWidth={width} />
                <ConverterLIMC />
              </div>
              {width > 1100 && graph}
            </div>
          </section>
          {!mobileCondition && width <= 1100 && <ASide clientWidth={width} />}
          {mobileCondition && <Rating />}
          {width <= 1100 && <AccordionUI text='Показать график доходности'>{graph}</AccordionUI>}
          {mobileCondition && <NewCard clientWidth={width} />}
          <Mining clientWidth={width} />
          {mobileCondition && <RefLink />}
        </div>
      </div>
    </div>
  )
}
