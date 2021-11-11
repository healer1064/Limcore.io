import React, { useState } from 'react'
import { useAppSelector } from '@app/redux/hooks'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'

export const EditName: React.FC = () => {
  const [existName] = useState(false)
  const userData = useAppSelector((state) => state.user.userData)

  return (
    <div className={Styles.name}>
      {existName ? (
        <>
          <form className={Styles.form}>
            <div className={Styles.block}>
              <span className={Styles.caption}>Изменить имя</span>
              <span className={Styles.subcaption}>Это имя будут видеть пользователи в чатах</span>
              <Label className={Styles.label} titleText='Имя'>
                <InputText placeholder='Введите новое имя' />
              </Label>
            </div>
            <ButtonBig>Изменить</ButtonBig>
          </form>
        </>
      ) : (
        <>
          <form className={Styles.form}>
            <div className={Styles.block}>
              <span className={Styles.caption}>Это имя будут видеть пользователи в чатах</span>
              <Label className={Styles.label} titleText='Имя'>
                <InputText placeholder='Введите имя' />
              </Label>
            </div>
            <ButtonBig>Добавить</ButtonBig>
          </form>
        </>
      )}
    </div>
  )
}
