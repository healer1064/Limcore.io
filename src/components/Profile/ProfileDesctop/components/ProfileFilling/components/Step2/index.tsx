import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData } from '../../../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Popup } from '@components/Popup'
import { Calendar } from '../Calendar'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

import calendarIcon from '@icons/calendar-icon.svg'

interface Step2Props {
  nextStep: any
}

export const Step2: React.FC<Step2Props> = ({ nextStep }) => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const [popup, setPopup] = useState(false)

  const openPopup = () => setPopup(true)
  const closePopup = () => setPopup(false)

  const onChangeValue = (event) => {
    const { name, value } = event.target
    dispatch(setData({ ...data, [name]: value }))
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
          <span className={Styles.line}>{}</span>
          <div className={Styles.number}>
            <span>3</span>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <span className={Styles.caption}>Укажите паспортные данные</span>
        <form className={Styles.form}>
          <div className={Styles.wrapper}>
            <Label titleText='Серия*'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                name='passport_series'
                value={data.passport_series}
              />
            </Label>
            <Label titleText='Номер*'>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                name='passport_number'
                value={data.passport_number}
              />
            </Label>
          </div>
          <Label className={Styles.label} titleText='Код подразделения*'>
            <InputText
              onChange={onChangeValue}
              name='passport_division_code'
              value={data.passport_division_code}
              placeholder='Введите код'
            />
          </Label>
          <Label className={Styles.label} titleText='Дата выдачи*'>
            <div className={Styles.block} onClick={openPopup}>
              <input
                className={Styles.date}
                onChange={() => {}}
                type='text'
                value={data.passport_was_issued}
                placeholder='01.01.21'
              />
              <img src={calendarIcon} alt='Иконка' />
            </div>
          </Label>
          <Label className={Styles.edit} titleText='Паспорт выдан*'>
            <InputText
              onChange={onChangeValue}
              name='passport_division_name'
              value={data.passport_division_name}
              placeholder='Введите учреждения'
            />
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 2)}>Продолжить</ButtonBig>
        </form>
      </div>
      {popup && (
        <Popup closePopup={closePopup}>
          <Calendar closePopup={closePopup} dataType='issue' />
        </Popup>
      )}
    </>
  )
}
