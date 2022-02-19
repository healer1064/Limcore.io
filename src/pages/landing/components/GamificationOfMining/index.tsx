import React from 'react'

import style from './styles.module.scss'
import { GameCaption } from './components/GameCaption'
import { Garden } from './components/Garden'
import { GameStart } from './components/GameStart'
import { Blockquote } from './components/GameStart/Blockquote'

interface GamificationOfMiningProps {
  clientWidth: number
}

export const GamificationOfMining: React.FC<GamificationOfMiningProps> = ({ clientWidth }) => {
  return (
    <section className={style.main}>
      <div className={style.border} />
      <GameCaption text='Геймификация майнинга' />
      <div className={style.wrapper}>
        {clientWidth <= 768 ? <Blockquote /> : ''}
        <Garden />
        <GameStart clientWidth={clientWidth} />
      </div>
    </section>
  )
}
