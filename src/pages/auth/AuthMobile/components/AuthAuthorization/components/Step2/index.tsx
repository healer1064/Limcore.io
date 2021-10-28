import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setStepAuthorization, setCodePhoneOrEmail } from '../../../../../redux/authSlice'
import Styles from './styles.module.scss'

import { InputCode } from '../../../../../../../ui-kit/InputCode'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../../../ui-kit/ButtonSmall'

export const Step2: React.FC = () => {
  const dispatch = useAppDispatch()
  const typeAuthorization = useAppSelector((state) => state.authNew.typeAuthorization)
  const phoneOrEmail = useAppSelector((state) => state.authNew.phoneOrEmail)
  const codePhoneOrEmail = useAppSelector((state) => state.authNew.codePhoneOrEmail)
  const [validValue, setValidValue] = useState(true)

  const onChange = (event) => dispatch(setCodePhoneOrEmail(event.target.value))

  const prevStep = () => dispatch(setStepAuthorization(1))

  const completeAuthorization = () => {}

  return (
    <>
      {typeAuthorization === 'phone' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>Введите код из СМС</h3>
              <span className={Styles.notification}>
                Мы отправили код на номер {phoneOrEmail} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                <span className={Styles.time}>Получить новый код можно через 00:41</span>
                {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              Войти
            </ButtonBig>
          </div>
        </>
      )}
      {typeAuthorization === 'email' && (
        <>
          <div className={Styles.content}>
            <div className={Styles.block}>
              <h3 className={Styles.title}>Введите код</h3>
              <span className={Styles.notification}>
                Мы отправили код на адрес {phoneOrEmail} <ButtonSmall onClick={prevStep}>Изменить</ButtonSmall>
              </span>
              <InputCode onChange={onChange} value={codePhoneOrEmail} validValue={validValue} />
              <div className={Styles.wrap}>
                <span className={Styles.time}>Получить новый код можно через 00:41</span>
                {/* <ButtonSmall>Отправить новый код</ButtonSmall> */}
              </div>
            </div>
          </div>
          <div className={Styles.buttons}>
            <ButtonBig onClick={completeAuthorization} disabled={!codePhoneOrEmail}>
              Войти
            </ButtonBig>
          </div>
        </>
      )}
    </>
  )
}
