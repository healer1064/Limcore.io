import React from 'react'

import style from './styles.module.scss'
import { GameCaption } from './components/GameCaption'
import { Garden } from './components/Garden'
import { GameStart } from './components/GameStart'

export const GamificationOfMining: React.FC = () => {
  return (
    <section className={style.main}>
      <GameCaption />
      <div className={style.wrapper}>
        <Garden />
        <GameStart />
      </div>
    </section>
  )
}
