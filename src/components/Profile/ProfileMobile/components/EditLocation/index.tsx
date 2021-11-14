import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep, changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { setData, getUser, updateProfileUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { InputRadio } from '../../../../../ui-kit/InputRadio'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'

export const EditLocation: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)
  const userData = useAppSelector((state) => state.user.userData)
  const data = useAppSelector((state) => state.user.data)
  const [radioValue, setRadioValue] = useState('registration')
  const maxLength = 200

  const nextStep = (step) => dispatch(changeStep(step))

  const onChange = (event) => setRadioValue(event.target.value)

  const onChangeValue = (event) => {
    const { name, value } = event.target
    dispatch(setData({ ...data, [name]: value }))
  }

  const addHomeAddress = async (event) => {
    event.preventDefault()

    const addData = {
      home_apartment_number: data.home_apartment_number,
      home_building_number: data.home_building_number,
      home_city: data.home_city,
      home_house_number: data.home_house_number,
      home_street: data.home_street,
      house_number: data.house_number,
    }

    const response = await dispatch(updateProfileUser(addData))

    if (response.error) {
      console.log('error updateProfileUser')
    } else {
      dispatch(getUser())

      dispatch(changeViewContent('none'))
      dispatch(changeStep(0))
    }
  }

  return (
    <div className={Styles.location}>
      {step === 0 && (
        <>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span className={Styles.title}>Адрес регистрации</span>
            </div>
            <span className={Styles.subtitle}>
              г {userData.profile?.city}, ул {userData.profile?.street}, дом {userData.profile?.house_number}
            </span>
            <Label className={Styles.label}>
              <InputRadio
                onChange={onChange}
                value='registration'
                checked={radioValue === 'registration'}
                titleRadio='Письма по этому адресу'
              />
            </Label>
          </div>
          <div className={Styles.block}>
            <div className={Styles.wrapper}>
              <span className={Styles.title}>Домашний адрес</span>
              {userData.profile?.home_city ? (
                <ButtonSmall onClick={() => nextStep(1)}>Изменить</ButtonSmall>
              ) : (
                <ButtonSmall onClick={() => nextStep(1)}>Добавить</ButtonSmall>
              )}
            </div>
            {userData.profile?.home_city && (
              <span className={Styles.subtitle}>
                г {userData.profile?.home_city}, ул {userData.profile?.home_street}, дом{' '}
                {userData.profile?.home_house_number}
              </span>
            )}
            <Label className={Styles.label}>
              <InputRadio
                onChange={onChange}
                value='home'
                checked={radioValue === 'home'}
                titleRadio='Письма по этому адресу'
              />
            </Label>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <span className={Styles.caption}>Укажите адрес</span>
          <span className={Styles.subcaption}>Введите ваш домашний адрес</span>
          <form className={Styles.form}>
            <div className={Styles.container}>
              <Label className={Styles.edit} titleText='Город*'>
                <InputText
                  onChange={onChangeValue}
                  name='home_city'
                  value={data.home_city}
                  placeholder='Введите город'
                  maxLength={maxLength}
                />
              </Label>
              <Label className={Styles.edit} titleText='Улица*'>
                <InputText
                  onChange={onChangeValue}
                  name='home_street'
                  value={data.home_street}
                  placeholder='Введите название улицы'
                  maxLength={maxLength}
                />
              </Label>
              <div className={Styles.inputs}>
                <Label titleText='Дом*'>
                  <InputText
                    className={Styles.input}
                    onChange={onChangeValue}
                    type='number'
                    name='home_house_number'
                    value={data.home_house_number}
                    maxLength={maxLength}
                  />
                </Label>
                <Label titleText='Корпус'>
                  <InputText
                    className={Styles.input}
                    onChange={onChangeValue}
                    type='number'
                    name='home_building_number'
                    value={data.home_building_number}
                    maxLength={maxLength}
                  />
                </Label>
                <Label titleText='Квартира'>
                  <InputText
                    className={Styles.input}
                    onChange={onChangeValue}
                    type='number'
                    name='home_apartment_number'
                    value={data.home_apartment_number}
                    maxLength={maxLength}
                  />
                </Label>
              </div>
            </div>
            <ButtonBig onClick={addHomeAddress}>Добавить</ButtonBig>
          </form>
        </>
      )}
    </div>
  )
}
