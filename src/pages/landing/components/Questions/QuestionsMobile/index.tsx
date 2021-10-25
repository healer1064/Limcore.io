import React from 'react'
import Styles from './styles.module.scss'

import { VectorIcon } from '@icons/VectorIcon'

export const QuestionsMobile: React.FC = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <h4 className={Styles.caption}>Вопросы и ответы</h4>
        <ul className={Styles.question}>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>С чего начать?</span>
              <VectorIcon />
            </div>
          </li>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>Как купить LIMC?</span>
              <VectorIcon />
            </div>
          </li>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>Как зарегистрироваться на limcore.io?</span>
              <VectorIcon />
            </div>
          </li>
          <li className={`${Styles.item} ${Styles.item_active}`}>
            <div className={Styles.row}>
              <span>С чего начать?</span>
              <VectorIcon />
            </div>
            <div className={Styles.block}>
              <p className={Styles.text}>
                Иногда после верификации компания принимает решение о дополнительной проверке биографии клиента. Ее цель
                – оценка риска.
              </p>
              <span className={Styles.description}>Как устроена стандартная процедура KYC?</span>
              <p className={Styles.text}>
                Для получения полного доступа и увеличенного лимита ввода и вывода средств пользователям необходимо
                завершить верификацию.
              </p>
              <ul className={Styles.list}>
                <li>
                  <p className={Styles.text}>
                    Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от клиентов
                    пройти обязательную верификацию для получения постоянного доступа к услугам
                  </p>
                </li>
                <li>
                  <p className={Styles.text}>
                    Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от клиентов
                    пройти обязательную верификацию для получения постоянного доступа к услугам
                  </p>
                </li>
                <li>
                  <p className={Styles.text}>
                    Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от клиентов
                    пройти обязательную верификацию для получения постоянного доступа к услугам
                  </p>
                </li>
              </ul>
              <p className={Styles.text}>
                Процедуры верификации могут отличаться в зависимости от характера бизнеса, однако преследуют они одни и
                те же цели. Основные этапы процедуры – сбор и проверка данных. Сюда также относится комплексная проверка
                и постоянный мониторинг пользователей.
              </p>
            </div>
          </li>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>Как купить LIMC?</span>
              <VectorIcon />
            </div>
          </li>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>Как зарегистрироваться на limcore.io?</span>
              <VectorIcon />
            </div>
          </li>
          <li className={Styles.item}>
            <div className={Styles.row}>
              <span>С чего начать?</span>
              <VectorIcon />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
