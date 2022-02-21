import React from 'react'
import styles from './styles.module.scss'
import { Blockquote } from './Blockquote'

interface GameStartProps {
  clientWidth: number
}

export const GameStart: React.FC<GameStartProps> = ({ clientWidth }) => {
  return (
    <section className={styles.gameStart}>
      <h2>Запуск игры</h2>
      <div className={styles.gameStart__twoMods}>
        <div>
          <h3>2 режима</h3>
          <ul className={styles.list}>
            <li className={styles.item}>мирный</li>
            <li className={styles.item}>агрессивный</li>
          </ul>
        </div>
        <div>
          <h3>1 земля = 1 LIMC</h3>
          <p className={styles.text}>
            Пользователь может купить земельный участок для выращивания или создания токенов
          </p>
          <p className={styles.text}>1 сотка земли = 1 LIMC = 1 TB</p>
        </div>
      </div>
      {clientWidth > 768 ? <Blockquote /> : ''}
    </section>
  )
}
