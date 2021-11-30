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
          <h3 className={Styles.title}>{t('limcoreDescription_howWorks')}</h3>
          <ul className={Styles.list}>
            <li className={Styles.item}>{t('limcoreDescription_howSubtitle1')}</li>
            <li className={Styles.item}>{t('limcoreDescription_howSubtitle2')}</li>
            <li className={Styles.item}>{t('limcoreDescription_howSubtitle3')}</li>
            <li className={Styles.item}>{t('limcoreDescription_howSubtitle4')}</li>
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
                <p>{t('limcoreDescription_howSubtitle1')}</p>
                <p>{t('limcoreDescription_howSubtitle2')}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={Styles.item}>
                <p>{t('limcoreDescription_howSubtitle3')}</p>
                <p>{t('limcoreDescription_howSubtitle4')}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={Styles.pagination} />
        </>
      )}
    </div>
  )
}
