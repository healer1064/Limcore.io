import React from 'react'
import Styles from './styles.module.scss'

import { MediaMobile } from './MediaMobile'

import mediaImage from '../../../../assets/images/media.png'
import limcInterview from '../../../../assets/images/limcInterview.png'
import { useTranslation } from 'react-i18next'

export const Media: React.FC = () => {
  const [t] = useTranslation()

  return (
    <>
      <div className={`${Styles.media} ${Styles.media_desktop}`}>
        <div className={Styles.wrapper}>
          <h4 className={Styles.caption}>{t('mm_main')}</h4>
          <div className={Styles.container}>
            <div className={Styles.news}>
              <a
                className={Styles.image}
                href='https://blockchain-life.com/europe/ru/news/kak-dobyvaetsya-kriptovalyuta-v-rossii/'
                target='blank'
                rel='noopener noreferrer'
              >
                <img src={mediaImage} alt='Изображение' />
              </a>
              <div className={Styles.newsTextWrapper}>
                <span className={Styles.title}>{t('mm1_title')}</span>
                <p className={Styles.description}>{t('mm1_subtitle')}</p>
                <div className={Styles.row}>
                  <a
                    className={Styles.link}
                    href='https://blockchain-life.com/europe/ru/news/kak-dobyvaetsya-kriptovalyuta-v-rossii/'
                  >
                    Blockchain Life
                  </a>
                  <time className={Styles.date}>24.09.2021</time>
                </div>
              </div>
            </div>
            <div className={Styles.news}>
              <a
                className={Styles.image}
                href='https://coinpost.ru/p/interview-limcore'
                target='blank'
                rel='noopener noreferrer'
              >
                <img src={limcInterview} alt='Изображение' />
              </a>
              <div className={Styles.newsTextWrapper}>
                <span className={Styles.title}>{t('mm2_title')}</span>
                <p className={Styles.description}>{t('mm2_subtitle')}</p>
                <div className={Styles.row}>
                  <a
                    className={Styles.link}
                    href='https://coinpost.ru/p/interview-limcore'
                    target='blank'
                    rel='noopener noreferrer'
                  >
                    coinpost.ru
                  </a>
                  <time className={Styles.date}>01.11.2021</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.media} ${Styles.media_mobile}`}>
        <MediaMobile />
      </div>
    </>
  )
}
