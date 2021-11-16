import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import useWindowSize from '../../../../../../../helpers/useWindowSizeHook'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { confirm2FA, getUser } from '../../../../../../../app/redux/userSlice'
import { changeViewContent, changeStep } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { useTranslation } from 'react-i18next'

export const Step3: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const data2FA = useAppSelector((state) => state.user.data2FA)
  const [code, setCode] = useState('')

  const desktop = width >= 769

  const handlerChange = (event) => setCode(event.target.value)

  const completeAdd2FA = async () => {
    if (code) {
      const response = await dispatch(confirm2FA(code))

      if (response.error) {
        console.log('error confirm2FA')
      } else {
        const res = await dispatch(getUser())

        if (res.error) {
          console.log('error getUser')
        } else {
          dispatch(changeViewContent('none'))
          dispatch(changeStep(0))
        }
      }
    }
  }

  return (
    <>
      <div className={Styles.component}>
        <div className={Styles.progress}>
          <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>1</span>
            </div>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
          </div>
          {/* <div className={Styles.step}>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>2</span>
            </div>
          </div> */}
          <div className={Styles.step}>
            <span className={`${Styles.line} ${Styles.line_active}`}>{}</span>
            <div className={`${Styles.number} ${Styles.number_active}`}>
              <span>2</span>
            </div>
          </div>
        </div>
        <div className={Styles.container}>
          <span className={Styles.caption}>{t('profile_2fa_enterCode')}</span>
          <Label className={Styles.label} titleText={t('profile_2fa_enterCodeInGoogle')}>
            <span>{data2FA.key}</span>
          </Label>
          {desktop && (
            <div className={Styles.qrcode}>
              <QRCode value={data2FA.qr_url} />
            </div>
          )}
          {/* {!desktop && <button className={Styles.link}>Перейти в приложение</button>} */}
          <Label titleText={t('profile_2fa_enterCodeFromApp')}>
            <InputText
              className={Styles.input}
              onChange={handlerChange}
              value={code}
              placeholder='_ _ _ _ _ _'
              maxLength={6}
            />
          </Label>
        </div>
      </div>
      <ButtonBig onClick={completeAdd2FA}>{t('profile_complete')}</ButtonBig>
    </>
  )
}
