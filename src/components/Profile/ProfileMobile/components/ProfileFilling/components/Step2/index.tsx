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
import { useTranslation } from 'react-i18next'

interface Step2Props {
  nextStep: any
}

export const Step2: React.FC<Step2Props> = ({ nextStep }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const [popup, setPopup] = useState(false)
  const maxLength = 200

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
          <div className={`${Styles.number} ${Styles.number_active}`}>1</div>
          <span className={`${Styles.line} ${Styles.line_active}`} />
        </div>
        <div className={Styles.step}>
          <div className={`${Styles.number} ${Styles.number_active}`}>2</div>
        </div>
        <div className={Styles.step}>
          <span className={Styles.line} />
          <div className={Styles.number}>3</div>
        </div>
      </div>
      <div className={Styles.container}>
        <h2 className={Styles.caption}>{t('profile_title2')}</h2>
        <form className={Styles.form}>
          <fieldset className={Styles.wrapper}>
            <Label titleText={t('profile_pasSer')}>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                // type='number'
                name='passport_series'
                value={data.passport_series}
                maxLength={maxLength}
              />
            </Label>
            <Label titleText={t('profile_pasNumber')}>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                // type='number'
                name='passport_number'
                value={data.passport_number}
                maxLength={maxLength}
              />
            </Label>
          </fieldset>
          <Label className={Styles.label} titleText={t('profile_authorityCode')}>
            <InputText
              onChange={onChangeValue}
              type='number'
              name='passport_division_code'
              value={data.passport_division_code}
              placeholder={t('enterCode')}
              maxLength={maxLength}
            />
          </Label>
          <Label className={Styles.label} titleText={t('profile_issueDate')}>
            <div className={Styles.block} onClick={openPopup}>
              <input
                className={Styles.date}
                onChange={() => {}}
                type='text'
                value={data.passport_was_issued}
                placeholder='2021-01-01'
              />
              <img src={calendarIcon} alt='Иконка' />
            </div>
          </Label>
          <Label titleText={t('profile_pasIssued')}>
            <InputText
              onChange={onChangeValue}
              name='passport_division_name'
              value={data.passport_division_name}
              placeholder={t('profile_pasAuthority')}
              maxLength={maxLength}
            />
          </Label>
          <ButtonBig onClick={(event) => nextStep(event, 2)}>{t('profile_continue')}</ButtonBig>
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
