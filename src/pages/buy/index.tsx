import React from 'react'
import Styles from './style.module.scss'

import { Form } from './components/Form'
import { TermsOfUse } from './components/TermsOfUse'
import { Container } from '@components/Container'

export const BuyPage = () => {
  return (
    <div className={Styles.buy}>
      <Container title='Покупка'>
        <Form
          title='Покупка LIMC'
          content='Вы покупаете 1 Limcore Token по цене 200$ с Lock-up периодом 6 месяцев'
          promo='Промокод применен'
        />
        <TermsOfUse />
      </Container>
    </div>
  )
}
