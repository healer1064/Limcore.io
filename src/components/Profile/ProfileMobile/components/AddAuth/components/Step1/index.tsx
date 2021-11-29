import React, { useEffect } from 'react'
import { useAppDispatch } from '@app/redux/hooks'
import { setData2FA, get2FAUrl } from '../../../../../../../app/redux/userSlice'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

import authIcon from '../../../../../../../assets/images/google-auth.png'
import storeIcon from '../../../../../../../assets/images/app-store.png'
import playIcon from '../../../../../../../assets/images/google-play.png'
import { useTranslation } from 'react-i18next'

interface StepProps {
  nextStep: any
}

export const Step1: React.FC<StepProps> = ({ nextStep }) => {
  const [t] = useTranslation()
  const dispatch = useAppDispatch()

  const stepNext = () => nextStep(2)

  useEffect(() => {
    dispatch(get2FAUrl())
      .then((res: any) => dispatch(setData2FA(res.payload)))
      .catch((error) => console.log(error))
  }, [])

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
            <div className={Styles.number}>
              <span>2</span>
            </div>
          </div> */}
          <div className={Styles.step}>
            <span className={Styles.line}>{}</span>
            <div className={Styles.number}>
              <span>2</span>
            </div>
          </div>
        </div>
        <div className={Styles.container}>
          <span className={Styles.caption}>{t('profile_2fa_download')}</span>
          <div className={Styles.block}>
            <img src={authIcon} alt='Иконка' />
            <div className={Styles.stors}>
              <a href='https://apps.apple.com/ru/app/google-authenticator/id388497605' target='_blank' rel='noreferrer'>
                <img src={storeIcon} alt='Иконка' />
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2'
                target='_blank'
                rel='noreferrer'
              >
                <img src={playIcon} alt='Иконка' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ButtonBig onClick={stepNext}>{t('profile_continue')}</ButtonBig>
    </>
  )
}
