import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'

import { QuestionsMobile } from './QuestionsMobile'

import { VectorIcon } from '@icons/VectorIcon'

export const Questions: React.FC = () => {
  const array = [
    { id: 1, title: 'С чего начать?', content: '' },
    { id: 2, title: 'Как купить LIMC?', content: '' },
    { id: 3, title: 'Как зарегистрироваться на limcore.io?', content: '' },
    { id: 4, title: 'С чего начать?', content: '' },
    { id: 5, title: 'Как купить LIMC?', content: '' },
    { id: 6, title: 'Как зарегистрироваться на limcore.io?', content: '' },
    { id: 7, title: 'С чего начать?', content: '' },
  ]

  const [activeItem, setActiveItem] = useState({ id: null, title: '', content: '' })

  useEffect(() => {
    setActiveItem(array[0])
  }, [])

  return (
    <>
      <div className={`${Styles.questions} ${Styles.questions_desktop}`}>
        <div className={Styles.wrapper}>
          <h4 className={Styles.caption}>Вопросы и ответы</h4>
          <div className={Styles.container}>
            <ul className={Styles.question}>
              {array &&
                array.map((item) => (
                  <li
                    key={item.id}
                    className={activeItem.id === item.id ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
                    onClick={() => setActiveItem(item)}
                  >
                    <span>{item.title}</span>
                    <VectorIcon />
                  </li>
                ))}
            </ul>
            <div className={Styles.info}>
              <h5 className={Styles.title}>{activeItem.title}</h5>
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
          </div>
        </div>
      </div>
      <div className={`${Styles.questions} ${Styles.questions_mobile}`}>
        <QuestionsMobile />
      </div>
    </>
  )
}
