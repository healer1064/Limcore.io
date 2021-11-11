import React from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const ChangePhone = () => {
  return (
    <>
      <div className={Styles.block}>
        <span className={Styles.cap}>Изменить телефон</span>
        <span className={Styles.subcap}>Вы меняете номер телефона, к которому привязан аккаунт</span>
        <Label titleText='Телефон'>
          <InputText placeholder='Введите новый номер телефона' />
        </Label>
      </div>
      <ButtonBig>Получить код</ButtonBig>
    </>
  )
}
