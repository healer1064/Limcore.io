import React from 'react'
import styles from './styles.module.scss'
import folder from '@animations/folders.json'
import folder2 from '@animations/folder2.json'
import Lottie from 'react-lottie'
import useWindowSize from '@helpers/useWindowSizeHook'
import uparrow from '../../../../assets/images/arrow.svg'

export const HowWork: React.FC = () => {
  const { width } = useWindowSize()

  const defaultOption = {
    loop: true,
    renderer: 'svg',
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
              <button className={styles.buyBtn}>Купить LIMC</button>
            </div>
            <Lottie options={defaultOption} width={width > 786 ? 536 : 335} height={width > 786 ? 349 : 218} />
          </li>
          <li className={styles.item_2}>
            <div className={styles.order}>
              <Lottie options={defaultOption2} width={width > 786 ? 474 : 335} height={width > 786 ? 323 : 228} />
            </div>
            <div className={styles.item_right}>
              <div className={styles.t}>
                <span className={styles.num}>
                  02
                  <div className={styles.line} />
                </span>
                <p className={styles.commission}>
                  Комиссия сервиса <br /> Limcore —15% от <br /> общей прибыли с майнинга
                </p>
              </div>
              <h3 className={styles.h3}>Майнинг</h3>
              <p className={styles.p}>
                Начисление прибыли с майнинга в режиме <br /> реального времени. Все честно и прозрачно!
              </p>
              <div className={styles.statistics}>
                Убедись сам -
                <span className={styles.statistics_link}>
                  Статистика <img src={uparrow} alt='up' />
                </span>
              </div>
            </div>
          </li>
          <li className={styles.item_3}>
            <div className={styles.item_3_left}>
              <span className={styles.num}>03</span>
              <h3 className={styles.h3}>Вывод прибыли</h3>
              <span className={styles.pay}>
                <p className={styles.p}>
                  Оплачивать покупки или снимать наличныев любом банкомате мира можно с помощью виртуальной банковской
                  карты Limcore!
                </p>
                <p className={styles.p}>Скоро ее можно будет активировать в Limcore Wallet! Мы работаем над этим...</p>
              </span>
            </div>
            <div className={styles.item_3_img} />
          </li>
        </ul>
      </div>
    </section>
  )
}
