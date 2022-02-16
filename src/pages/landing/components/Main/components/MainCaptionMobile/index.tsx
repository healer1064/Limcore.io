import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'
import rocketAnim from '@animations/rocket.json'
import popup from '@icons/popupIcon.svg'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'
import { BottomModal } from '@components/Modal/BottomModal'
import { Player } from '@lottiefiles/react-lottie-player'
import classNames from 'classnames'

type TModals = '' | 'first' | 'second'

export const MainCaptionMobile: React.FC = () => {
  const [lottiePseudeRef, setLottiePseudeRef] = useState<any>({ lottie: null })

  const [modals, setModals] = useState<TModals>('')
  const openModal = (which: TModals) => setModals(which)
  const closeAnyModal = () => setModals('')

  const [showList, setShowList] = useState(false)
  const onEvent = (event: string) => {
    switch (event) {
      case 'complete':
        lottiePseudeRef.lottie.playSegments([380, 530], true)
        break
      case 'load':
        lottiePseudeRef.lottie.play()
        break
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowList(true)
    }, 3000)
  }, [])

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>LIMCORE — ракета в сфере облачного майнинга!</h1>

      <div className={Styles.animation}>
        <Player
          onEvent={onEvent}
          lottieRef={(instance) => setLottiePseudeRef({ lottie: instance })}
          src={rocketAnim}
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      <div className={classNames(Styles.wrapper, showList && Styles.visible)}>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <h4 className={Styles.item__title}>1 LIMC $300 HitBTC</h4>
            <div className={Styles.item__subtitle}>
              Старт майнинга сразу
              <img src={popup} alt='Popup' className={Styles.item__popup} onClick={() => openModal('first')} />
              <BottomModal active={modals === 'first'} setActive={closeAnyModal} title='1 LIMC $300 HitBTC'>
                <div className={Styles.popup}>
                  <ul className={Styles.popup__list}>
                    <li className={Styles.popup__item}>
                      <p className={Styles.popup__subtitle}>Токен по курсу бирж</p>
                    </li>
                    <li className={Styles.popup__item}>
                      <p className={Styles.popup__subtitle}>Старт майнинга с момента покупки</p>
                    </li>
                  </ul>
                </div>
              </BottomModal>
            </div>
          </li>

          <li className={Styles.item}>
            <h4 className={Styles.item__title}>1 LIMC $250</h4>
            <div className={Styles.item__subtitle}>
              С условиями
              <img src={popup} alt='Popup' className={Styles.item__popup} onClick={() => openModal('second')} />
              <BottomModal active={modals === 'second'} setActive={closeAnyModal} title='1 LIMC $250'>
                <div className={Styles.popup}>
                  <ul className={Styles.popup__list}>
                    <li className={Styles.popup__item}>
                      <p className={Styles.popup__subtitle}>Токен -15% от курса бирж</p>
                    </li>
                    <li className={Styles.popup__item}>
                      <p className={Styles.popup__subtitle}>Lock-up период 3 месяца</p>
                    </li>
                    <li className={Styles.popup__item}>
                      <p className={Styles.popup__subtitle}>
                        Старт майнинга в течение 60 календарных дней c даты покупки
                      </p>
                    </li>
                  </ul>
                </div>
              </BottomModal>
            </div>
          </li>
        </ul>

        <ButtonBig className={Styles.button}>КУПИТЬ LIMC</ButtonBig>
      </div>
    </div>
  )
}
