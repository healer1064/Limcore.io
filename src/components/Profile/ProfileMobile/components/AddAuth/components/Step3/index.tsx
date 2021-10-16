import React from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
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
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className={Styles.container}>
          <span className={Styles.caption}>Введите код из приложения</span>
          <button className={Styles.link}>Перейти в приложение</button>
          <Label titleText='Введите код, сгенерированный приложением'>
            <InputText className={Styles.input} placeholder='_ _ _ _' />
          </Label>
        </div>
      </div>
      <ButtonBig>Завершить</ButtonBig>
    </>
  )
}
