import React from 'react'
import Styles from './styles.module.scss'
import Lottie from 'react-lottie'
import rocketAnim from '@animations/rocket.json'

export const MainCaption: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>LIMCORE — ракета в сфере облачного майнинга!</h1>
      <Lottie options={defaultOptions} height={400} width={400} />{' '}
    </div>
  )
}
