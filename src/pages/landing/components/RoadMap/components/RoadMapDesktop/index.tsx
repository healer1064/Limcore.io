import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const RoadMapDesktop: React.FC = () => {
  return (
    <div className={styles.roadmap}>
      <div className={styles.container}>
        <h2 className={styles.title}>Дорожная карта</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <h6 className={styles.item__title}>Q3 2021</h6>
            <ul className={styles.item__list}>
              <li className={styles.item__text}>Сборка тестовой стойки для майнинга</li>
              <li className={styles.item__text}>Запуск личного кабинета v0.1</li>
              <li className={styles.item__text}>Создание Limcore Token</li>
            </ul>

            <div className={styles.item__circle} />
          </li>

          <li className={styles.item}>
            <h6 className={styles.item__title}>Q4 2021</h6>
            <ul className={styles.item__list}>
              <li className={styles.item__text}>Запуск личного кабинета</li>
              <li className={styles.item__text}>Blockchain Life. Diamond Sponsor</li>
            </ul>

            <div className={styles.item__circle} />
          </li>

          <li className={styles.item}>
            <h6 className={styles.item__title}>Q1 2022</h6>
            <ul className={classNames(styles.item__list, styles.item__list_active)}>
              <li className={classNames(styles.item__text, styles.item__text_active)}>
                Запуск фарминга для первых пользователей
              </li>
              <li className={classNames(styles.item__text, styles.item__text_active)}>Листинг LIMC на бирже HitBTC</li>
            </ul>

            <div className={classNames(styles.item__circle, styles.item__circle_active)} />
          </li>

          <li className={styles.item}>
            <h6 className={styles.item__title}>Q2 2022</h6>
            <ul className={classNames(styles.item__list, styles.item__list_disabled)}>
              <li className={classNames(styles.item__text, styles.item__text_disabled)}>Подключение банковских карт</li>
              <li className={classNames(styles.item__text, styles.item__text_disabled)}>Своя биржа форков</li>
              <li className={classNames(styles.item__text, styles.item__text_disabled)}>
                Дополнительные листинги на биржах
              </li>
            </ul>

            <div className={classNames(styles.item__circle, styles.item__circle__disabled)} />
          </li>

          <li className={styles.item}>
            <h6 className={styles.item__title}>Q4 2022</h6>
            <ul className={classNames(styles.item__list, styles.item__list_disabled)}>
              <li className={classNames(styles.item__text, styles.item__text_disabled)}>
                Приложение для майнингаChia и форков на ПК
              </li>
              <h6 className={classNames(styles.item__title, styles.item__title_middle)}>Q4 2023</h6>
              <li className={classNames(styles.item__text, styles.item__text_disabled)}>
                Cвоя игра для фарминга Chia и форков на земельном участке
              </li>
            </ul>

            <div className={classNames(styles.item__circle, styles.item__circle__disabled)} />
          </li>
        </ul>
      </div>
    </div>
  )
}
