import React from 'react'

import styles from './styles.module.scss'
import { BalanceLIMC } from './components/BalanceLIMC'
import { ConverterLIMC } from './components/ConverterLIMC'
import useWindowSize from '@helpers/useWindowSizeHook'
import graphTemp from '@icons/GraphTemp.svg'
import { AccordionUI } from './components/Accordion'

export const CabinetPage: React.FC = () => {
  const { width } = useWindowSize()

  const graph = <img className={styles.cabinet__balanceGraph} src={graphTemp} />

  return (
    <div className={styles.cabinet}>
      <div className={styles.cabinet__container}>
        <div>
          <section className={styles.cabinet__balance}>
            <h2>Баланс</h2>
            <div>
              <div style={{ width: '100%' }}>
                <BalanceLIMC clientWidth={width} />
                <ConverterLIMC />
              </div>
              {width <= 940 ? '' : graph}
            </div>
          </section>
          {width <= 940 ? <AccordionUI text='Показать график доходности'>{graph}</AccordionUI> : ''}
        </div>
      </div>
    </div>
  )
}
