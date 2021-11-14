import React from 'react'
import Styles from './styles.module.scss'
import chiaIcon from '@icons/chia.svg'
import { useTranslation } from 'react-i18next'

export const MainCaption: React.FC = () => {
  const [t] = useTranslation()
  return (
    <div className={Styles.caption}>
      <div className={Styles.block}>
        <h1 className={Styles.title}>
          {t('landing_title')} <img src={chiaIcon} className={Styles.chia} alt='chia' />
        </h1>
        <h3 className={Styles.subtitle}>{t('landing_subtitle')}</h3>
      </div>
      <div className={Styles.wrap}>
        <iframe
          className={Styles.photo}
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/aK9obYQi-FI'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      {/* <img className={Styles.photo} src={centerImage} alt='Иконка' /> */}
    </div>
  )
}
