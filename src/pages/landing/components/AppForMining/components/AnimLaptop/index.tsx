import React, { useEffect, useState } from 'react'
import { Lottie } from '@crello/react-lottie'

import LaptopAnimationData from '@animations/laptop.json'
import style from './styles.module.scss'
import { useInView } from 'react-intersection-observer'
import { TAnimStates } from '@lib/utils/types'

export const AnimLaptop: React.FC = () => {
  const [animState, setAnimState] = useState<TAnimStates>('stopped')
  const { ref, inView } = useInView({ rootMargin: '50px' })

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: LaptopAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (inView) {
      setAnimState('playing')
    }
  }, [inView])

  return (
    <div className={style.animLaptop} ref={ref}>
      <Lottie config={defaultOptions} playingState={animState} />
    </div>
  )
}
