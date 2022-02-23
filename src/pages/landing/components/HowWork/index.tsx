import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import folder from '@animations/folders.json'
import folder2 from '@animations/folder2.json'
import map from '@animations/map.json'
import { Lottie } from '@crello/react-lottie'
import useWindowSize from '@helpers/useWindowSizeHook'
import uparrow from '../../../../assets/images/arrow.svg'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'
import { useInView } from 'react-intersection-observer'
import { TAnimStates } from '@lib/utils/types'

export const HowWork: React.FC = () => {
  const { width } = useWindowSize()

  // Прикол в том, что анимации разные по внутренним размерам и это всё нужно, чтобы они визуально были одинаковые
  type TAnimStyles = { width: string | number }
  const [animStyles, setAnimStyles] = useState<TAnimStyles>({ width: '' })
  const [secondAnimStyles, setSecondAnimStyles] = useState<TAnimStyles>({ width: '' })

  type TSecondAnimMargin = { marginBottom: string }
  const [secondAnimMargin, setSecondAnimMargin] = useState<TSecondAnimMargin>({ marginBottom: '200px' })
  // ===

  const [firstAnimState, setFirstAnimState] = useState<TAnimStates>('stopped')
  const [secondAnimState, setSecondAnimState] = useState<TAnimStates>('stopped')
  const [thirdAnimState, setThirdAnimState] = useState<TAnimStates>('stopped')

  const OBSERVER_OPTIONS = { rootMargin: '50px' }
  const [firstAnimRef, firstAnimInView] = useInView(OBSERVER_OPTIONS)
  const [secondAnimRef, secondAnimInView] = useInView(OBSERVER_OPTIONS)
  const [thirdAnimRef, thirdAnimInView] = useInView(OBSERVER_OPTIONS)

  const defaultOption = {
    loop: false,
    autoplay: true,
    animationData: folder,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const defaultOption2 = {
    loop: false,
    autoplay: true,
    animationData: folder2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const defaultOption3 = {
    loop: false,
    autoplay: true,
    animationData: map,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (firstAnimInView) {
      setFirstAnimState('playing')
    }

    if (secondAnimInView) {
      setSecondAnimState('playing')
    }

    if (thirdAnimInView) {
      setThirdAnimState('playing')
    }
  }, [firstAnimInView, secondAnimInView, thirdAnimInView])

  useEffect(() => {
    if (width) {
      width <= 768 ? setAnimStyles({ width: 'auto' }) : setAnimStyles({ width: Math.floor(width / 1.74) })
      width <= 768
        ? setSecondAnimStyles({ width: Math.floor(width / 0.75) })
        : setSecondAnimStyles({ width: Math.floor(width / 1.66) })

      width <= 768
        ? setSecondAnimMargin({ marginBottom: `${Math.floor(width) + 75}px` })
        : setSecondAnimMargin({ marginBottom: `200px` })
    }
  }, [width])

  return (
    <section className={styles.how}>
      <div className={styles.border} />
      <div className={styles.border__center} />
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает</h2>
        <ul className={styles.list}>
          <li className={styles.item_first}>
            <div className={styles.anim_first} style={animStyles} ref={firstAnimRef}>
              <Lottie config={defaultOption} playingState={firstAnimState} />
            </div>

            <div className={styles.item_left}>
              <span className={styles.item_title}>01</span>
              <h3 className={styles.item_subtitle}>Покупка LIMC</h3>
              <p className={styles.text}>
                Смарт-контракт все сделает за тебя,
                {width > 768 ? <br /> : null} просто свапни!
              </p>
              <div className={styles.walletAdress}>
                {width > 768 ? (
                  <span>0x4095309503950395039503...3485uo2225</span>
                ) : (
                  <span> 0x40953095039...3485uo2225</span>
                )}
                <button className={styles.copyBtn} />
              </div>
              <ButtonBig className={styles.button}>КУПИТЬ LIMC</ButtonBig>
            </div>
          </li>

          <li className={styles.item_second} style={secondAnimMargin}>
            <div className={styles.anim_second} style={secondAnimStyles} ref={secondAnimRef}>
              <Lottie config={defaultOption2} playingState={secondAnimState} />
            </div>

            <div className={styles.item_right}>
              <div className={styles.num_commission}>
                <span className={styles.num_2}>
                  <span className={styles.item_title}>
                    02
                    <div className={styles.line} />
                  </span>
                </span>

                <p className={styles.commission}>
                  Комиссия сервиса <br /> Limcore —15% от <br /> общей прибыли с майнинга
                </p>
              </div>
              <h3 className={styles.item_subtitle}>Майнинг</h3>
              <p className={styles.text}>
                Начисление прибыли с майнинга в режиме {width > 768 ? <br /> : null} реального времени.{' '}
                {width > 768 ? null : <br />} Все честно и прозрачно!
              </p>
              <div className={styles.statistics}>
                Убедись сам -
                <span className={styles.statistics_link}>
                  Статистика <img src={uparrow} alt='up' />
                </span>
              </div>
            </div>
          </li>

          <li className={styles.item_third}>
            <div className={styles.anim_third} style={animStyles} ref={thirdAnimRef}>
              <Lottie config={defaultOption3} playingState={thirdAnimState} />
            </div>

            <div className={styles.item_3_left}>
              <span className={styles.item_title}>03</span>
              <h3 className={styles.item_subtitle}>Вывод прибыли</h3>
              <span className={styles.pay}>
                <p className={styles.text}>
                  Оплачивать покупки или снимать наличные в любом банкомате мира можно с помощью виртуальной банковской
                  карты Limcore!
                </p>
                <p className={styles.text}>
                  Скоро ее можно будет активировать в Limcore Wallet! Мы работаем над этим...
                </p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
