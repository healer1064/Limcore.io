import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { setData, setMiddleName } from '../../../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Popup } from '@components/Popup'
import { Calendar } from '../Calendar'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { InputCheckbox } from '../../../../../../../ui-kit/InputCheckbox'
import { InputRadio } from '../../../../../../../ui-kit/InputRadio'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

import calendarIcon from '@icons/calendar-icon.svg'
import { useTranslation } from 'react-i18next'

interface Step1Props {
  nextStep: any
}

export const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const middleName = useAppSelector((state) => state.user.middleName)
  const [popup, setPopup] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <span className={Styles.caption}>{t('profile_title1')}</span>
        <form className={Styles.form}>
          <Label className={Styles.label} titleText={`${t('profile_firstName')}*`}>
            <InputText
              onChange={onChangeValue}
              name='first_name'
              value={data.first_name}
              placeholder={t('profile_firstNameEnter')}
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label} titleText={`${t('profile_lastName')}*`}>
            <InputText
              onChange={onChangeValue}
              name='last_name'
              value={data.last_name}
              placeholder={t('profile_lastNameEnter')}
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label} titleText={`${t('profile_paternityName')}*`}>
            <InputText
              onChange={onChangeValue}
              name='middle_name'
              value={data.middle_name}
              placeholder={t('profile_paternityEnter')}
              disabled={middleName}
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label}>
            <InputCheckbox
              onChange={onChangeMiddleName}
              value=''
              checked={middleName}
              titleCheckbox={t('profile_noPaternity')}
            />
          </Label>
          <Label className={Styles.label} titleText={`${t('profile_birth')}*`}>
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
          <Label className={Styles.label} titleText={`${t('profile_sex')}*`}>
            <div className={Styles.radios}>
              <Label>
                <InputRadio
                  onChange={onChangeGender}
                  value='male'
                  checked={data.gender === 'male'}
                  titleRadio={t('profile_male')}
                />
              </Label>
              <Label>
                <InputRadio
                  onChange={onChangeGender}
                  value='female'
                  checked={data.gender === 'female'}
                  titleRadio={t('profile_female')}
                />
              </Label>
            </div>
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 1)} disabled={!complete}>
            {t('profile_continue')}
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
