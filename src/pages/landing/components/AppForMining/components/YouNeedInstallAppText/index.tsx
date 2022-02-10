import React from 'react'

import youNeedInstallAppFrame from '@icons/youNeedInstallFrame.png'
import style from './styles.module.scss'

interface YouNeedInstallAppTextProps {
  clientWidth: number
}

export const YouNeedInstallAppText: React.FC<YouNeedInstallAppTextProps> = ({ clientWidth }) => {
  return (
    <div className={style.youNeedInstallApp}>
      <div
        className={style.youNeedInstallApp__wrapper}
        style={{ background: clientWidth <= 768 ? 'transparent' : `url("${youNeedInstallAppFrame}") 0 0/100% 100%` }}
      >
        <p>
          Тебе нужно скачать приложение Limcore.exe и запустить его! Система автоматически подключится к нашему пулу
          майнинга и начнет начислять тебе доход!
        </p>
      </div>
      <p style={{ margin: '0 0 0 50px' }}>Запуск Q4 2022</p>
    </div>
  )
}
