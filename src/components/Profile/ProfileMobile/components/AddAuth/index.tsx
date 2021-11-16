import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { changeStep, changeViewContent } from '../../../../../pages/cabinet/redux/cabinetSlice'
import Styles from './styles.module.scss'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { Popup } from '../../../../Popup'

import { ButtonBig } from '../../../../../ui-kit/ButtonBig'
import { ButtonSmall } from '../../../../../ui-kit/ButtonSmall'
import { ToggleButton } from '../../../../../ui-kit/ToggleButton'
import { useTranslation } from 'react-i18next'

export const AddAuth: React.FC = () => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.cabinet.step)
  const userData = useAppSelector((state) => state.user.userData)
  const [offAuth, setOffAuth] = useState(false)
  const [checkedToggle, setCheckedToggle] = useState(true)

  const nextStep = (step) => dispatch(changeStep(step))

  const changeOffAuth = (event) => {
    if (!event.target.checked) {
      setOffAuth(true)
    } else {
      setCheckedToggle(event.target.checked)
    }
  }

  const off2fa = () => {
    setOffAuth(false)
    setCheckedToggle(false)
  }

  const changePhone = () => {
    dispatch(changeViewContent('changePhone'))
    nextStep(1)
  }

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
                    <ToggleButton onChange={changeOffAuth} checked={checkedToggle} disabled={!!true} />
                  </div>
                  {/* <div className={`${Styles.block} ${Styles.block_edit}`}>
                    <ButtonSmall onClick={changePhone}>Изменить номер телефона</ButtonSmall>
                    <p className={Styles.text}>
                      Если вы измените номер телефона для двухфакторной аутентификации,он будет также автоматически
                      измененв разделе личной информации
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
        <Popup closePopup={() => setOffAuth(false)}>
          <span className={Styles.designation}>Выключить двухфакторную аутентификацию?</span>
          <div className={Styles.buttons}>
            <ButtonBig onClick={off2fa}>Выключить</ButtonBig>
            <ButtonBig className={Styles.button} onClick={() => setOffAuth(false)}>
              Отмена
            </ButtonBig>
          </div>
        </Popup>
      )}
    </div>
  )
}
