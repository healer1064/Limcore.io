import React, { ChangeEvent } from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../ui-kit/Label'
import { InputText } from '../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@app/redux/hooks'
import { getUser, updateProfileUser, setData } from '@app/redux/userSlice'
import { changeStep, changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { useTranslation } from 'react-i18next'

export const EditName: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useDispatch()

  const myData = useAppSelector((state) => state.user.data)
  const data = useAppSelector((state) => state.user.userData.profile)

  const existName = Boolean(data.chat_name)

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setData({ ...myData, chat_name: event.target.value }))
  }

  const onEditName = async (event: MouseEvent) => {
    event.preventDefault()

    const dataClone = JSON.parse(JSON.stringify(myData))
    delete dataClone.avatar

    const response = await dispatch(updateProfileUser(dataClone))

    if (response.error) {
      console.log('error updateProfileUser!!!')
    } else {
      const res = await dispatch(getUser())

      if (res.error) {
        console.log('error getUser!!!')
      } else {
        dispatch(changeViewContent('none'))
        dispatch(changeStep(0))
      }
    }

    document.querySelector('body').style.overflow = 'auto'
  }

  return (
    <div className={Styles.name}>
      {existName ? (
        <>
          <form className={Styles.form}>
            <div className={Styles.block}>
              <span className={Styles.caption}>{t('chat_change')}</span>
              <span className={Styles.subcaption}>{t('chat_show')}</span>
              <Label className={Styles.label} titleText={t('chat_name')}>
                <InputText placeholder={t('chat_newName')} onChange={onInputChange} />
              </Label>
            </div>
            <ButtonBig onClick={onEditName}>{t('change')}</ButtonBig>
          </form>
        </>
      ) : (
        <>
          <form className={Styles.form}>
            <div className={Styles.block}>
              <span className={Styles.caption}>{t('chat_show')}</span>
              <Label className={Styles.label} titleText={t('chat_name')}>
                <InputText placeholder={t('profile_firstNameEnter')} onChange={onInputChange} />
              </Label>
            </div>
            <ButtonBig onClick={onEditName}>{t('profile_add')}</ButtonBig>
          </form>
        </>
      )}
    </div>
  )
}
