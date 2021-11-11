import React from 'react'
import Styles from './styles.module.scss'

import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'

import authIcon from '../../../../../../../assets/images/google-auth.png'
import storeIcon from '../../../../../../../assets/images/app-store.png'
import playIcon from '../../../../../../../assets/images/google-play.png'

interface StepProps {
  nextStep: any
}

export const Step1: React.FC<StepProps> = ({ nextStep }) => {
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
          <span className={Styles.caption}>Скачайте мобильное приложение</span>
          <div className={Styles.block}>
            <img src={authIcon} alt='Иконка' />
            <div className={Styles.stors}>
              <img src={storeIcon} alt='Иконка' />
              <img src={playIcon} alt='Иконка' />
            </div>
          </div>
        </div>
      </div>
      <ButtonBig onClick={() => nextStep(2)}>Продолжить</ButtonBig>
    </>
  )
}
