import React from 'react'
import Styles from './style.module.scss'

import { ButtonBig } from '../../ui-kit/ButtonBig'
import { InputRadio } from '../../ui-kit/InputRadio'
import { InputText } from '../../ui-kit/InputText'
import { Label } from '../../ui-kit/Label'
import { Header } from './components/Header'
import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

export const BuyPage = () => {
  return (
    <div className={Styles.buy_container}>
      <Header />
      <div className={Styles.buy_title}>
        <Title />
        <CloseButton />
      </div>
      {/* <ButtonBig /> */}
      {/* <InputRadio titleRadio='Test' /> */}
      {/* <InputText placeholder='TestTest' /> */}
      {/* <Label>Test</Label> */}
    </div>
  )
}
