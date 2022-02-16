import React from 'react'
import styles from './styles.module.scss'
import folder from '@animations/folders.json'
import folder2 from '@animations/folder2.json'
import map from '@animations/map.json'
import Lottie from 'react-lottie'
import useWindowSize from '@helpers/useWindowSizeHook'
import uparrow from '../../../../assets/images/arrow.svg'
import { ButtonBig } from '../../../../ui-kit/ButtonBig'

export const HowWork: React.FC = () => {
  const { width } = useWindowSize()

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: folder,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const defaultOption2 = {
    loop: true,
    autoplay: true,
    animationData: folder2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const defaultOption3 = {
    loop: true,
    autoplay: true,
    animationData: map,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const animStyles = width <= 768 ? { width: 'auto' } : { width: Math.floor(width / 1.74) }
  const secondAnimStyles = width <= 768 ? { width: 'auto' } : { width: Math.floor(width / 1.66) }

  return (
    <section className={styles.how}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает</h2>

        <ul className={styles.list}>
          <li className={styles.item_first}>
            <div className={styles.anim_first} style={animStyles}>
              <Lottie options={defaultOption} />
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

          <li className={styles.item_second}>
            <div className={styles.anim_second} style={secondAnimStyles}>
              <Lottie options={defaultOption2} />
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
            <div className={styles.anim_third} style={animStyles}>
              <Lottie options={defaultOption3} />
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
