import React from 'react'
import Styles from './styles.module.scss'

import mediaImage from '../../../../assets/images/media.png'

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
            <div className={Styles.empty}>Совсем скоро здесь появятся еще новости о Limcore</div>
          </div>
        </div>
      </div>
      <div className={`${Styles.media} ${Styles.media_mobile}`}>ds</div>
    </>
  )
}
