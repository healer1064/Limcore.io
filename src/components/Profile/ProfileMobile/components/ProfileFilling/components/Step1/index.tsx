import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData, setMiddleName } from '../../../../../../../app/redux/userSlice'
import { api } from '@app/api'
import Styles from './styles.module.scss'

import { Popup } from '@components/Popup'
import { Calendar } from '../Calendar'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { InputCheckbox } from '../../../../../../../ui-kit/InputCheckbox'
import { InputRadio } from '../../../../../../../ui-kit/InputRadio'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

import calendarIcon from '@icons/calendar-icon.svg'

interface Step1Props {
  nextStep: any
}

export const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const middleName = useAppSelector((state) => state.user.middleName)
  const [popup, setPopup] = useState(false)
  const [complete, setComplete] = useState(true)
  const maxLength = 200

  const openPopup = () => setPopup(true)
  const closePopup = () => setPopup(false)

  const onChangeValue = (event) => {
    const { name, value } = event.target
    dispatch(setData({ ...data, [name]: value }))
  }

  const onChangeMiddleName = (event) => {
    dispatch(setData({ ...data, middle_name: '' }))
    dispatch(setMiddleName(event.target.checked))
  }

  const onChangeGender = (event) => {
    const { value } = event.target
    dispatch(setData({ ...data, gender: value }))
  }

  // useEffect(() => {
  //   if (data.first_name) {
  //     setComplete(true)
  //   }
  // }, [data])

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
          <div className={Styles.number}>
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
        <span className={Styles.caption}>Укажите ФИО, дату рождения и пол</span>
        <form className={Styles.form}>
          <Label className={Styles.label} titleText='Имя*'>
            <InputText
              onChange={onChangeValue}
              name='first_name'
              value={data.first_name}
              placeholder='Введите ваше имя'
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label} titleText='Фамилия*'>
            <InputText
              onChange={onChangeValue}
              name='last_name'
              value={data.last_name}
              placeholder='Введите вашу фамилию'
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label} titleText='Отчество*'>
            <InputText
              onChange={onChangeValue}
              name='middle_name'
              value={data.middle_name}
              placeholder='Введите ваше отчество'
              disabled={middleName}
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label}>
            <InputCheckbox
              onChange={onChangeMiddleName}
              value=''
              checked={middleName}
              titleCheckbox='У меня нет отчества'
            />
          </Label>
          <Label className={Styles.label} titleText='Дата рождения*'>
            <div className={Styles.block} onClick={openPopup}>
              <input
                className={Styles.date}
                onChange={() => {}}
                type='text'
                value={data.birth_date}
                placeholder='2021-01-01'
              />
              <img src={calendarIcon} alt='Иконка' />
            </div>
          </Label>
          <Label className={Styles.edit} titleText='Пол*'>
            <div className={Styles.radios}>
              <Label>
                <InputRadio
                  onChange={onChangeGender}
                  value='male'
                  checked={data.gender === 'male'}
                  titleRadio='Мужской'
                />
              </Label>
              <Label>
                <InputRadio
                  onChange={onChangeGender}
                  value='female'
                  checked={data.gender === 'female'}
                  titleRadio='Женский'
                />
              </Label>
            </div>
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 1)} disabled={!complete}>
            Продолжить
          </ButtonBig>
        </form>
      </div>
      {popup && (
        <Popup closePopup={closePopup}>
          <Calendar closePopup={closePopup} dataType='birth' />
        </Popup>
      )}
    </>
  )
}
