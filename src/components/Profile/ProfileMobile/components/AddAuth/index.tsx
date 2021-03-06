import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep } from '../../../../../pages/cabinet/redux/cabinetSlice'
import { cancel2FA, getUser } from '../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step3 } from './components/Step3'
import { Popup } from '../../../../Popup'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ToggleButton } from '../../../../../ui-kit/ToggleButton'
import { useTranslation } from 'react-i18next'

export const AddAuth: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)
  const userData = useAppSelector((state) => state.user.userData)
  const [offAuth, setOffAuth] = useState(false)
  const [checkedToggle, setCheckedToggle] = useState(null)

  const nextStep = (step) => dispatch(changeStep(step))

  const closePopup = () => setOffAuth(false)
  const openPopup = () => setOffAuth(true)

  const changeOffAuth = (event) => {
    if (!event.target.checked) {
      openPopup()
    }
  }

  const off2FA = async () => {
    const response = await dispatch(cancel2FA())

    if (response.error) {
      console.log('error cancel2FA')
    } else {
      dispatch(getUser())
      closePopup()
    }
  }

  useEffect(() => {
    setCheckedToggle(userData.is_connected_2fa)
  }, [userData])

  return (
    <div className={Styles.auth}>
      <>
        {step === 0 && (
          <>
            {userData?.is_connected_2fa ? (
              <>
                <div className={Styles.block}>
                  <span className={Styles.caption}>{t('profile_2fa_on')}</span>
                  <span className={Styles.subcaption}>{t('profile_2fa_subtitle')}</span>
                  <div className={Styles.wrapper}>
                    <div className={Styles.container}>
                      <span className={Styles.title}>{t('profile_2fa_linked')}</span>
                      <span className={Styles.subtitle}>{userData.phone}</span>
                    </div>
                    <ToggleButton onChange={changeOffAuth} checked={checkedToggle} />
                  </div>
                  {/* <div className={`${Styles.block} ${Styles.block_edit}`}>
                    <ButtonSmall onClick={changePhone}>???????????????? ?????????? ????????????????</ButtonSmall>
                    <p className={Styles.text}>
                      ???????? ???? ???????????????? ?????????? ???????????????? ?????? ?????????????????????????? ????????????????????????????,???? ?????????? ?????????? ??????????????????????????
                      ???????????????? ?????????????? ???????????? ????????????????????
                    </p>
                  </div> */}
                </div>
              </>
            ) : (
              <>
                <div className={Styles.block}>
                  <span className={Styles.caption}>{t('profile_2fa_add')}</span>
                  <span className={Styles.subcaption}>{t('profile_2fa_subtitle')}</span>
                </div>
                <ButtonBig onClick={() => nextStep(1)}>{t('profile_connect')}</ButtonBig>
              </>
            )}
          </>
        )}
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step3 />}
        {/* {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} />}
        {step === 3 && <Step3 />} */}
      </>
      {offAuth && (
        <Popup closePopup={closePopup}>
          <span className={Styles.designation}>{t('profile_2fa_doWantToOff')}</span>
          <div className={Styles.buttons}>
            <ButtonBig onClick={off2FA}>{t('profile_2fa_wantToOff')}</ButtonBig>
            <ButtonBig className={Styles.button} onClick={closePopup}>
              {t('profile_2fa_cancel')}
            </ButtonBig>
          </div>
        </Popup>
      )}
    </div>
  )
}
