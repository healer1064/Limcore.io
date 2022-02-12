import React from 'react'
import Lottie from 'react-lottie'

import gardenData from '@animations/garden.json'
import style from './styles.module.scss'

export const Garden: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gardenData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={style.garden}>
      <Lottie options={defaultOptions} />
    </div>
  )
}
