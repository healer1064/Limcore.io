import React from 'react'
import styles from './styles.module.scss'
import folder from '@animations/folders.json'
import folder2 from '@animations/folder2.json'
import Lottie from 'react-lottie'
import noise from '../../../../assets/images/noise_how.svg'
import useWindowSize from '@helpers/useWindowSizeHook'
import uparrow from '../../../../assets/images/arrow.svg'

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
  return (
    <section className={styles.howWork}>
      <img src={noise} alt='noise' className={styles.noise} />
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает</h2>
        <ul className={styles.howWork__block}>
          <li className={styles.item_1}>
            <div className={styles.item_left}>
              <span className={styles.num}>01</span>
              <h3 className={styles.h3}>Покупка LIMC</h3>
              <p className={styles.p}>
                Смарт-контракт все сделает за тебя,
                <br /> просто свапни!
              </p>
              <div className={styles.walletAdress}>
                {width > 768 ? (
                  <span>0x4095309503950395039503...3485uo2225</span>
                ) : (
                  <span> 0x40953095039...3485uo2225</span>
                )}
                <button className={styles.copyBtn} />
              </div>
              <button className={styles.buyBtn}>КУПИТЬ LIMC</button>
            </div>
            {width > 768 ? (
              <Lottie options={defaultOption} width={536} height={349} />
            ) : (
              <Lottie options={defaultOption} width={335} height={218} />
            )}
          </li>
          <li className={styles.item_2}>
            {width > 768 ? (
              <Lottie options={defaultOption2} width={536} height={349} />
            ) : (
              <div className={styles.order}>
                <Lottie options={defaultOption2} width={335} height={228} />{' '}
              </div>
            )}
            <div className={styles.item_right}>
              <span className={styles.num}>
                02
                <div className={styles.line} />
              </span>
              <p className={styles.commission}>Комиссия сервиса Limcore —15% от общей прибыли с майнинга</p>
              <h3 className={styles.h3}>Майнинг</h3>
              <p className={styles.p_2}>
                Начисление прибыли с майнинга в режиме реального времени. Все честно и прозрачно!
              </p>
              <div>
                <span className={styles.stat}>
                  Убедись сам -{' '}
                  <span className={styles.statistics}>
                    {' '}
                    Статистика <img src={uparrow} alt='up' />
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li className={styles.item_3}>
            <div className={styles.left_3}>
              <span className={styles.num}>03</span>
              <h3 className={styles.h3}>Вывод прибыли</h3>
              <span className={styles.pay}>
                <p>
                  Оплачивать покупки или снимать наличныев любом банкомате мира можно с помощью виртуальной банковской
                  карты Limcore!
                </p>
                <p>Скоро ее можно будет активировать в Limcore Wallet! Мы работаем над этим...</p>
              </span>
            </div>
            <div className={styles.item_3_img} />
          </li>
        </ul>
      </div>
    </section>
  )
}
