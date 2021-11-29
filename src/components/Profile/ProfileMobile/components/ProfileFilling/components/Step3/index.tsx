import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { getUser, updateUser, setData } from '../../../../../../../app/redux/userSlice'
import { changeViewContent, changeStep } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { useTranslation } from 'react-i18next'

export const Step3: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.user.data)
  const error = useAppSelector((state) => state.user.error)
  const bodyEl = useRef(document.querySelector('body'))
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
      const res = await dispatch(getUser())

      if (res.error) {
        console.log('error getUser!!!')
      } else {
        dispatch(changeViewContent('none'))
        dispatch(changeStep(0))
      }
    }

    bodyEl.current.style.overflow = 'auto'
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
        <span className={Styles.caption}>{t('profile_title3')}</span>
        {/* <span className={Styles.subcaption}>Введите адрес прописки</span> */}
        <form className={Styles.form}>
          <Label className={Styles.label} titleText={t('profile_city')}>
            <InputText onChange={onChangeValue} name='city' value={data.city} placeholder={t('profile_cityEnter')} />
          </Label>
          <Label className={Styles.label} titleText={t('profile_street')}>
            <InputText
              onChange={onChangeValue}
              name='street'
              value={data.street}
              placeholder={t('profile_streetEnter')}
              maxLength={maxLength}
            />
          </Label>
          <div className={Styles.wrapper}>
            <Label titleText={t('profile_house')}>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                type='number'
                name='house_number'
                value={data.house_number}
                maxLength={maxLength}
              />
            </Label>
            <Label titleText={t('profile_building')}>
              <InputText
                className={Styles.input}
                onChange={onChangeValue}
                type='number'
                name='building_number'
                value={data.building_number}
                maxLength={maxLength}
              />
            </Label>
            <Label titleText={t('profile_apartment')}>
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
          <ButtonBig onClick={completeFilling}>{t('profile_complete')}</ButtonBig>
          {error && (
            <div className={Styles.error}>
              <span>{t('err_smthWentWrong')}</span>
            </div>
          )}
        </form>
      </div>
    </>
  )
}
