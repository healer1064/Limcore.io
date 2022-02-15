import React from 'react'
import styles from './styles.module.scss'
import folder from '@animations/folders.json'
import folder2 from '@animations/folder2.json'
import Lottie from 'react-lottie'
import useWindowSize from '@helpers/useWindowSizeHook'
import uparrow from '../../../../assets/images/arrow.svg'
import imgCArd from '../../../../assets/images/card_03.svg'

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
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает</h2>
        <ul className={styles.howWork__block}>
          <li className={styles.item_1}>
            <div className={styles.item_left}>
              <span className={styles.num}>01</span>
              <h3 className={styles.h3}>Покупка LIMC</h3>
              <p className={styles.p}>
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
              <button className={styles.buyBtn}>Купить LIMC</button>
            </div>
            <div className={styles.folder_1}>
              <Lottie options={defaultOption} />
            </div>
          </li>

          <li className={styles.item_2}>
            <div className={styles.folder_2}>
              <Lottie options={defaultOption2} />
            </div>
            <div className={styles.item_right}>
              <div className={styles.num_commission}>
                <span className={styles.num_2}>
                  <span className={styles.num}>
                    02
                    <div className={styles.line} />
                  </span>
                </span>

                <p className={styles.commission}>
                  Комиссия сервиса <br /> Limcore —15% от <br /> общей прибыли с майнинга
                </p>
              </div>
              <h3 className={styles.h3}>Майнинг</h3>
              <p className={styles.p}>
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

          <li className={styles.item_3}>
            <div className={styles.item_3_left}>
              <span className={styles.num}>03</span>
              <h3 className={styles.h3}>Вывод прибыли</h3>
              <span className={styles.pay}>
                <p className={styles.p}>
                  Оплачивать покупки или снимать наличные в любом банкомате мира
                  {width > 768 ? null : <br />}можно с помощью виртуальной банковской карты Limcore!
                </p>
                <p className={styles.p}>
                  Скоро ее можно будет активировать в Limcore Wallet! {width > 768 ? null : <br />} Мы работаем над
                  этим...
                </p>
              </span>
            </div>
            {/* <div className={styles.item_3_img} /> */}
            <img className={styles.pay_img} src={imgCArd} />
          </li>
        </ul>
      </div>
    </section>
  )
}
