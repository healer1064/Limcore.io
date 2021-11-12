import React from 'react'
import Styles from './styles.module.scss'
import chiaIcon from '@icons/chia.svg'
import { useAppSelector } from '@app/redux/hooks'

export const MainCaption: React.FC = () => {
  const translation = useAppSelector((state) => state.cabinet.translation)

  return (
    <div className={Styles.caption}>
      <div className={Styles.block}>
        <h1 className={Styles.title}>
          Облачный майнинг всех форков <img src={chiaIcon} alt='chia' />
          {/* {translation.mainCaption.title} <img src={chiaIcon} alt='chia' /> */}
        </h1>
        <h3 className={Styles.subtitle}>Самый быстрый и выгодный способ инвестирования в криптовалюту</h3>
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
