import React from 'react'
import Styles from './style.module.scss'

import { Header } from './components/Header'
import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'
import { Form } from './components/Form'
import { TermsOfUse } from './components/TermsOfUse'

export const BuyPage = () => {
  return (
    <div className={Styles.buy}>
      <Header />
      <div className={Styles.buy__title}>
        <Title />
        <CloseButton />
      </div>
      <Form
        title='Покупка LIMC'
        content='Вы покупаете 1 Limcore Token по цене 200$ с Lock-up периодом 6 месяцев'
        promo='Промокод применен'
      />
      <TermsOfUse />
    </div>
  )
}
