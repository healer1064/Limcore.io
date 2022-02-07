import React, { useEffect, useState } from 'react'

import style from './styles.module.scss'
import { GameCaption } from './components/GameCaption'
import { Garden } from './components/Garden'
import { GameStart } from './components/GameStart'
import { Blockquote } from './components/GameStart/Blockquote'

export const GamificationOfMining: React.FC = () => {
  const { innerWidth: width } = window

  const [clientWidth, setClientWidth] = useState<number>(width)

  useEffect(() => {
    const resizeHandler = () => setClientWidth(window.innerWidth)
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <section className={style.main}>
      <GameCaption />
      <div className={style.wrapper}>
        {clientWidth <= 768 ? <Blockquote /> : ''}
        <Garden />
        <GameStart clientWidth={clientWidth} />
      </div>
    </section>
  )
}
