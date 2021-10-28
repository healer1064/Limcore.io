import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { VectorIcon } from '@icons/VectorIcon'

export const QuestionsMobile: React.FC = () => {
  const array = [
    { id: 1, title: 'С чего начать?', content: '' },
    { id: 2, title: 'Как купить LIMC?', content: '' },
    { id: 3, title: 'Как зарегистрироваться на limcore.io?', content: '' },
    { id: 4, title: 'С чего начать?', content: '' },
    { id: 5, title: 'Как купить LIMC?', content: '' },
    { id: 6, title: 'Как зарегистрироваться на limcore.io?', content: '' },
    { id: 7, title: 'С чего начать?', content: '' },
  ]

  const [activeId, setActiveId] = useState(null)

  const setActiveItem = (id) => {
    if (id === activeId) {
      setActiveId(null)
    } else {
      setActiveId(id)
    }
  }

  return (
    <>
      <div className={Styles.wrapper}>
        <h4 className={Styles.caption}>Вопросы и ответы</h4>
        <ul className={Styles.question}>
          {array &&
            array.map((item) => {
              return (
                <li
                  key={item.id}
                  className={activeId === item.id ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
                >
                  <div className={Styles.row} onClick={() => setActiveItem(item.id)}>
                    <span>{item.title}</span>
                    <VectorIcon />
                  </div>
                  <div className={Styles.block}>
                    <p className={Styles.text}>
                      Иногда после верификации компания принимает решение о дополнительной проверке биографии клиента.
                      Ее цель – оценка риска.
                    </p>
                    <span className={Styles.description}>Как устроена стандартная процедура KYC?</span>
                    <p className={Styles.text}>
                      Для получения полного доступа и увеличенного лимита ввода и вывода средств пользователям
                      необходимо завершить верификацию.
                    </p>
                    <ul className={Styles.list}>
                      <li>
                        <p className={Styles.text}>
                          Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от
                          клиентов пройти обязательную верификацию для получения постоянного доступа к услугам
                        </p>
                      </li>
                      <li>
                        <p className={Styles.text}>
                          Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от
                          клиентов пройти обязательную верификацию для получения постоянного доступа к услугам
                        </p>
                      </li>
                      <li>
                        <p className={Styles.text}>
                          Подобно другим финансовым институтам, ведущие криптовалютные биржи во всем мире требуют от
                          клиентов пройти обязательную верификацию для получения постоянного доступа к услугам
                        </p>
                      </li>
                    </ul>
                    <p className={Styles.text}>
                      Процедуры верификации могут отличаться в зависимости от характера бизнеса, однако преследуют они
                      одни и те же цели. Основные этапы процедуры – сбор и проверка данных. Сюда также относится
                      комплексная проверка и постоянный мониторинг пользователей.
                    </p>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}
