import React from 'react'

import style from './styles.module.scss'
import blockquoteRect from '@icons/BlockquoteRect.png'

export const Blockquote: React.FC = () => {
  return (
    <div className={style.gameStart__blockquote}>
      <blockquote style={{ background: `url("${blockquoteRect}") 0 0/100% 100%` }}>
        <p>В мирном режиме вы выступаете в роли фермера, биолога и купца.</p>
        <p>
          В агрессивном режиме добавляется режим войны, где вы можете защищать свои участки и нападать на соседние,
          забирая или теряя при этом ресурсы
        </p>
      </blockquote>
      <p className={style.launch}>Запуск Q4 2023</p>
    </div>
  )
}