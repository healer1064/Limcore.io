import React, { useState } from 'react'
import Styles from './styles.module.scss'
import { Lottie } from '@crello/react-lottie'
import rocketAnim from '@animations/rocket.json'
import popup from '@icons/popupIcon.svg'
import classNames from 'classnames'
import { BuyLimcButton } from '@components/BuyLimcModal'

export const MainCaption: React.FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false)

  const openPopup = () => setIsPopupOpened(true)
  const closePopup = () => setIsPopupOpened(false)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: rocketAnim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.border} />
      <h1 className={Styles.title}>LIMCORE — ракета в сфере облачного майнинга!</h1>

      <div className={Styles.animation}>
        <Lottie config={defaultOptions} height='630px' width='630px' />
      </div>

      <div className={Styles.wrapper}>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <h4 className={Styles.item__title}>1 LIMC $300 HitBTC</h4>
            <p className={Styles.item__subtitle}>Токен по курсу бирж</p>
            <p className={Styles.item__subtitle}>Старт майнинга с момента покупки!</p>
          </li>
          <li className={Styles.item} onMouseEnter={openPopup} onMouseLeave={closePopup} style={{ cursor: 'pointer' }}>
            <h4 className={Styles.item__title}>1 LIMC $250</h4>
            <p className={Styles.item__subtitle}>Токен −15% от курса бирж</p>
            <div className={Styles.item__subtitle}>
              С условиями
              <img src={popup} alt='Popup' className={Styles.item__popup} />
              <div className={classNames(Styles.popup, isPopupOpened && Styles.visible)}>
                <div className={Styles.popup__inner}>
                  <p className={classNames(Styles.info__subtitle, Styles.popup__subtitle)}>
                    Покупая LIMC, вы приобретаете майнинговую мощность нашего дата-центра
                  </p>
                  <p className={classNames(Styles.info__subtitle, Styles.popup__subtitle)}>Навсегда!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className={Styles.inner}>
          <BuyLimcButton className={Styles.button} />
          <div className={Styles.info}>
            <div className={Styles.info__inner}>
              <p className={Styles.info__subtitle}>
                Покупая LIMC, вы приобретаете майнинговую мощность нашего дата-центра
              </p>
              <p className={Styles.info__subtitle}>Навсегда!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
