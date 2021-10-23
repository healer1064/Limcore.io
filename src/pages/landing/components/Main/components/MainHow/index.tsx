import React from 'react'
import Styles from './styles.module.scss'

export const MainHow: React.FC = () => {
  return (
    <div className={Styles.how}>
      <div className={Styles.block}>
        <h2 className={Styles.caption}>Limcore</h2>
        <p className={Styles.text}>Современный дата-центр майнинга Chia и всех форков одновременно</p>
        <p className={Styles.text}>Это безопаснее и выгоднее большинства инвестиционных предложений на рынке</p>
      </div>
      <div className={Styles.container}>
        <span className={Styles.title}>Как это работает?</span>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <span>Покупая LIMC, вы приобретаете майнинговую мощность из нашего дата-центр</span>
          </li>
          <li className={Styles.item}>
            <span>
              Это самый простой и безопасный способ инвестирования в майнинг, поскольку токен LIMC в ближайшее время
              будет присутствовать на крупных биржах и обладает собственной ликвидностью
            </span>
          </li>
          <li className={Styles.item}>
            <span> Вы можете в любое время вывести активы полученные от майнинга или продать свои токены LIМС</span>
          </li>
          <li className={Styles.item}>
            <span>
              К 2024 году компания Limcore сконструирует собственную ленточную систему хранения данных, что позволит
              многократно увеличить доход с майнинга
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
