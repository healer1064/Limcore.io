import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'

export const EditPhone: React.FC = () => {
  const [step, setStep] = useState(0)

  return (
    <div className={Styles.phone}>
      {step === 0 && (
        <>
          <div className={Styles.block}>
            <span className={Styles.caption}>Изменить телефон</span>
            <span className={Styles.subcaption}>Вы меняете номер телефона, к которому привязан аккаунт</span>
            <Label className={Styles.label} titleText='Телефон'>
              <InputText className={Styles.input} placeholder='Введите новый номер телефона' />
            </Label>
          </div>
          <ButtonBig onClick={() => setStep(1)}>Получить код</ButtonBig>
        </>
      )}
      {step === 1 && (
        <>
          <div className={Styles.block}>
            <span className={Styles.caption}>Изменить телефон</span>
            <span className={Styles.subcaption}>Вы меняете номер телефона, к которому привязан аккаунт</span>
            <span className={Styles.info}>
              Мы отправили код на номер +7 (999) 098 65−34 <ButtonSmall className={Styles.edit}>Изменить</ButtonSmall>
            </span>
            <InputText className={Styles.code} placeholder='_ _ _ _' />
            <span className={Styles.timer}>Получить новый код можно через 00:41</span>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
          </div>
          <ButtonBig>Готово</ButtonBig>
        </>
      )}
    </div>
  )
}
