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
      {/* <video src=''>{}</video> */}
      <img src={centerImage} alt='Иконка' />
    </div>
  )
}
