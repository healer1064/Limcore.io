import React from 'react'
import Lottie from 'react-lottie'

import LaptopAnimationData from '@animations/laptop.json'
import style from './styles.module.scss'

export const AnimLaptop: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LaptopAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={style.animLaptop}>
      <Lottie options={defaultOptions} />
    </div>
  )
}
