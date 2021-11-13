import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

import useWindowSize from '@helpers/useWindowSizeHook'
import { useTranslation } from 'react-i18next'
import Styles from './styles.module.scss'

SwiperCore.use([Pagination])

export const MainHow: React.FC = () => {
  const { width } = useWindowSize()
  const [t] = useTranslation()

  return (
    <div className={Styles.how} id='limcore'>
      <div className={Styles.block}>
        <h2 className={Styles.caption}>Limcore</h2>
        <p className={Styles.text}>{t('limcoreDescription_modern')}</p>
        <p className={Styles.text}>{t('limcoreDescription_safe')}</p>
      </div>
      {width > 768 ? (
        <div className={Styles.container}>
          <span className={Styles.title}>{t('limcoreDescription_howWorks')}</span>
          <ul className={Styles.list}>
            <li className={Styles.item}>
              <span>{t('limcoreDescription_howSubtitle1')}</span>
            </li>
            <li className={Styles.item}>
              <span>{t('limcoreDescription_howSubtitle2')}</span>
            </li>
            <li className={Styles.item}>
              <span>{t('limcoreDescription_howSubtitle3')}</span>
            </li>
            <li className={Styles.item}>
              <span>{t('limcoreDescription_howSubtitle4')}</span>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <span className={Styles.title}>{t('limcoreDescription_howWorks')}</span>
          <Swiper
            pagination={{
              el: `.${Styles.pagination}`,
            }}
            slidesPerView={1}
            spaceBetween={10}
          >
            <SwiperSlide>
              <div className={Styles.item}>
                <span>{t('limcoreDescription_howSubtitle1')}</span>
                <span>{t('limcoreDescription_howSubtitle2')}</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={Styles.item}>
                <span>{t('limcoreDescription_howSubtitle3')}</span>
                <span>{t('limcoreDescription_howSubtitle4')}</span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={Styles.pagination} />
        </>
      )}
    </div>
  )
}
