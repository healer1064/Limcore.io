import React from 'react'
import Styles from './styles.module.scss'

import { MediaMobile } from './MediaMobile'

import mediaImage from '../../../../assets/images/media.png'
import limcInterview from '../../../../assets/images/limcInterview.png'

export const Media: React.FC = () => {
  return (
    <>
      <div className={`${Styles.media} ${Styles.media_desktop}`}>
        <div className={Styles.wrapper}>
          <h4 className={Styles.caption}>СМИ о нас</h4>
          <div className={Styles.container}>
            <div className={Styles.news}>
              <div className={Styles.image}>
                <img src={mediaImage} alt='Изображение' />
              </div>
              <span className={Styles.title}>Как добывается криптовалюта в России?</span>
              <p className={Styles.description}>
                Пресс-центр Blockchain Life и CEO Limcore Дмитрий Шумаев обсудили частный майнинг, возможности токена
                LIMC и любовь к стране
              </p>
              <div className={Styles.row}>
                <a className={Styles.link} href='/'>
                  Blockchain Life
                </a>
                <span className={Styles.date}>24.09.2021</span>
              </div>
            </div>
            <div className={Styles.news}>
              <div className={Styles.image}>
                <img className={Styles.limcInterviewPic} src={limcInterview} alt='Изображение' />
              </div>
              <span className={Styles.title}>
                CEO Limcore: инвестиции в майнинг от Limcore — альтернатива банковским депозитам
              </span>
              <p className={Styles.description}>
                Limcore: чем примечателен проект и какие преимущества могут получить ранние инвесторы
              </p>
              <div className={Styles.row}>
                <a
                  className={Styles.link}
                  href='https://coinpost.ru/p/interview-limcore'
                  target='blank'
                  rel='noopener noreferrer'
                >
                  coinpost.ru
                </a>
                <span className={Styles.date}>01.11.2021</span>
              </div>
            </div>
            {/* <div className={Styles.empty}>Совсем скоро здесь появятся еще новости о Limcore</div> */}
          </div>
        </div>
      </div>
      <div className={`${Styles.media} ${Styles.media_mobile}`}>
        <MediaMobile />
      </div>
    </>
  )
}
