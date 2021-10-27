import React from 'react'
import Styles from './styles.module.scss'

import chiaIcon from '@icons/chia.svg'
import centerImage from '../../../../../../assets/images/center.png'

export const MainCaption: React.FC = () => {
  return (
    <div className={Styles.caption}>
      <div className={Styles.block}>
        <h1 className={Styles.title}>
          Облачный майнинг всех форков <img src={chiaIcon} alt='chia' />
        </h1>
        <h3 className={Styles.subtitle}>Самый быстрый и выгодный способ инвестирования в криптовалюту</h3>
      </div>
      <iframe
        className={Styles.photo}
        width='502'
        height='287'
        src='https://www.youtube.com/embed/aK9obYQi-FI'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      {/* <img className={Styles.photo} src={centerImage} alt='Иконка' /> */}
    </div>
  )
}
