import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { updateUser, setData } from '../../../../../../../app/redux/userSlice'
import { changeViewContent, completeProfile, changeStep } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)

  const onChangeValue = (event) => {
    const { name, value } = event.target
    dispatch(setData({ ...data, [name]: value }))
  }

  const completeFilling = (event) => {
    event.preventDefault()

    dispatch(updateUser(data))
    dispatch(completeProfile())
    dispatch(changeViewContent('none'))
    dispatch(changeStep(0))
  }

  return (
    <>
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
        <span className={Styles.caption}>Укажите место жительства</span>
        <span className={Styles.subcaption}>Введите адрес прописки</span>
        <form className={Styles.form}>
          <Label className={Styles.label} titleText='Город*'>
            <InputText onChange={onChangeValue} name='city' value={data.city} placeholder='Введите город' />
          </Label>
          <Label className={Styles.label} titleText='Улица*'>
            <InputText
              onChange={onChangeValue}
              name='street'
              value={data.street}
              placeholder='Введите название улицы'
            />
          </Label>
          <div className={Styles.wrapper}>
            <Label titleText='Дом*'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                name='house_number'
                value={data.house_number}
              />
            </Label>
            <Label titleText='Корпус'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                name='building_number'
                value={data.building_number}
              />
            </Label>
            <Label titleText='Квартира*'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                name='apartment_number'
                value={data.apartment_number}
              />
            </Label>
          </div>
          <ButtonBig onClick={completeFilling}>Завершить</ButtonBig>
        </form>
      </div>
    </>
  )
}
