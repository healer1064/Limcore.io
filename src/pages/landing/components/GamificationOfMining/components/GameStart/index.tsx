import React from 'react'

import style from './styles.module.scss'
import { Blockquote } from './Blockquote'

interface GameStartProps {
  clientWidth: number
}

export const GameStart: React.FC<GameStartProps> = ({ clientWidth }) => {
  return (
    <section className={style.gameStart}>
      <h2>Запуск игры</h2>
      <div className={style.gameStart__twoMods}>
        <div>
          <h3>2 режима</h3>
          <ul>
            <li>мирный</li>
            <li>агрессивный</li>
          </ul>
        </div>
        <div>
          <h3>1 земля = 1 LIMC</h3>
          <p>Пользователь может купить земельный участок для выращивания или создания токенов</p>
          <p>1 сотка земли = 1 LIMC = 1 TB</p>
        </div>
      </div>
      {clientWidth > 768 ? <Blockquote /> : ''}
    </section>
  )
}
