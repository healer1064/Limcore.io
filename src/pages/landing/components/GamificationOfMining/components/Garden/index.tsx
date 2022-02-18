import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'

import gardenData from '@animations/garden.json'
import style from './styles.module.scss'
import { useInView } from 'react-intersection-observer'

export const Garden: React.FC = () => {
  const [isAnimStopped, setIsAnimStopped] = useState(true)
  const { ref, inView } = useInView({ rootMargin: '50px' })

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: gardenData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (inView) {
      setIsAnimStopped(false)
    }
  }, [inView])

  return (
    <div className={style.garden} ref={ref}>
      <Lottie options={defaultOptions} isStopped={isAnimStopped} />
    </div>
  )
}
