import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepRegistration, setCodeEmail } from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

export const Step4: React.FC = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.authNew.email)
  const codeEmail = useAppSelector((state) => state.authNew.codeEmail)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => dispatch(setCodeEmail(event.target.value))

  const prevStep = () => dispatch(setStepRegistration(3))

  const completeRegistration = () => {}

  return (
    <>
      <div className={Styles.content}>
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
          <div className={Styles.step}>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={Styles.block}>
          <h3 className={Styles.title}>Введите код</h3>
          <span className={Styles.notification}>
            Мы отправили код на адрес {email} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codeEmail} validValue={validValue} />
          <div className={Styles.wrap}>
            <span className={Styles.time}>Получить новый код можно через 00:41</span>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={completeRegistration} disabled={!codeEmail}>
          Зарегистрироваться
        </ButtonBig>
      </div>
    </>
  )
}
