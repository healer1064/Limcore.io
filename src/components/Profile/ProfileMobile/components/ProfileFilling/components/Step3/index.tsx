import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getUser, updateUser, setData } from '../../../../../../../app/redux/userSlice'
import { changeViewContent, changeStep } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

export const Step3: React.FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const maxLength = 200

  const onChangeValue = (event) => {
    const { name, value } = event.target
    dispatch(setData({ ...data, [name]: value }))
  }

  const completeFilling = async (event) => {
    event.preventDefault()

    const response = await dispatch(updateUser(data))

    if (response.error) {
      console.log('error updateUser!!!')
    } else {
      dispatch(getUser())

      dispatch(changeViewContent('none'))
      dispatch(changeStep(0))
    }
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
              maxLength={maxLength}
            />
          </Label>
          <div className={Styles.wrapper}>
            <Label titleText='Дом*'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                type='number'
                name='house_number'
                value={data.house_number}
                maxLength={maxLength}
              />
            </Label>
            <Label titleText='Корпус'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                type='number'
                name='building_number'
                value={data.building_number}
                maxLength={maxLength}
              />
            </Label>
            <Label titleText='Квартира'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                type='number'
                name='apartment_number'
                value={data.apartment_number}
                maxLength={maxLength}
              />
            </Label>
          </div>
          <ButtonBig onClick={completeFilling}>Завершить</ButtonBig>
        </form>
      </div>
    </>
  )
}
