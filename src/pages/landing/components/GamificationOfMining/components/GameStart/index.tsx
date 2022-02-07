import React from 'react'

import style from './styles.module.scss'
import blockquoteRect from '@icons/BlockquoteRect.png'

export const GameStart: React.FC = () => {
  return (
    <section className={style.gameStart}>
      <div className={style.gameStart__twoModsWrapper}>
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
        <div className={style.gameStart__blockquote}>
          <blockquote style={{ background: `url("${blockquoteRect}") 0 0/100% 100%` }}>
            <p>В мирном режиме вы выступаете в роли фермера, биолога и купца.</p>
            <p>
              В агрессивном режиме добавляется режим войны, где вы можете защищать свои участки и нападать на соседние,
              забирая или теряя при этом ресурсы
            </p>
          </blockquote>
          <p>Запуск Q4 2023</p>
        </div>
      </div>
    </section>
  )
}
