import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepRegistration, setCodePhone } from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

export const Step2: React.FC = () => {
  const dispatch = useAppDispatch()
  const phone = useAppSelector((state) => state.authNew.phone)
  const codePhone = useAppSelector((state) => state.authNew.codePhone)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => dispatch(setCodePhone(event.target.value))

  const prevStep = () => dispatch(setStepRegistration(1))

  const nextStep = () => {
    dispatch(setStepRegistration(3))
  }

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
            <div className={Styles.number}>
              <span>3</span>
            </div>
          </div>
          <div className={Styles.step}>
            <span className={Styles.line}>{}</span>
            <div className={Styles.number}>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={Styles.block}>
          <h3 className={Styles.title}>Введите код из СМС</h3>
          <span className={Styles.notification}>
            Мы отправили код на номер {phone} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
          </span>
          <InputCode onChange={onChange} value={codePhone} validValue={validValue} />
          <div className={Styles.wrap}>
            <span className={Styles.time}>Получить новый код можно через 00:41</span>
            {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
          </div>
        </div>
      </div>
      <div className={Styles.buttons}>
        <ButtonBig onClick={nextStep} disabled={!codePhone}>
          Далее
        </ButtonBig>
      </div>
    </>
  )
}
