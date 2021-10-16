import React from 'react'
import Styles from './styles.module.scss'

import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

interface StepProps {
  nextStep: any
}

export const Step2: React.FC<StepProps> = ({ nextStep }) => {
  return (
    <>
      <div className={Styles.component}>
        <div className={Styles.progress}>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>1</span>
            </div>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
          </div>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>2</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={Styles.line}>{}</span>
            <div className={Styles.number}>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className={Styles.container}>
          <span className={Styles.caption}>Введите код из СМС</span>
          <span className={Styles.info}>
            Мы отправили код на номер +7 (999) 098 65−34 <ButtonSmall className={Styles.edit}>Изменить</ButtonSmall>
          </span>
          <InputText className={Styles.input} placeholder='_ _ _ _' />
          <span className={Styles.timer}>Получить новый код можно через 00:41</span>
        </div>
      </div>
      <ButtonBig onClick={() => nextStep(3)}>Продолжить</ButtonBig>
    </>
  )
}
