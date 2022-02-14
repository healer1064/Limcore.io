import React from 'react'

import yourPCFrame from '@icons/yourPCFrame.png'
import style from './styles.module.scss'

interface YourPCProps {
  clientWidth: number
}

export const YourPC: React.FC<YourPCProps> = ({ clientWidth }) => {
  return (
    <div
      className={style.yourPC}
      style={{ background: clientWidth <= 768 ? `url("${yourPCFrame}") 0 0/100% 100%` : 'transparent' }}
    >
      <p>Твой ПК имеет свободное дисковое пространство? Не тормози! Зарабатывай на этом!</p>
    </div>
  )
}
