import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'

import { Answer1 } from './components/Answer1'
import { Answer2 } from './components/Answer2'
import { Answer3 } from './components/Answer3'
import { Answer4 } from './components/Answer4'
import { QuestionsMobile } from './QuestionsMobile'

import { VectorIcon } from '@icons/VectorIcon'

export const Questions: React.FC = () => {
  const array = [
    {
      id: 1,
      title: 'Чем отличается фарминг от майнинга?',
    },
    {
      id: 2,
      title: 'Как распределяется вознаграждение с майнинга среди холдеров LIMC?',
    },
    {
      id: 3,
      title: 'Какие преимущества платформы Limcore?',
    },
    {
      id: 4,
      title: 'Почему именно Chia?',
    },
  ]

  const [activeItem, setActiveItem] = useState({ id: null, title: '' })

  useEffect(() => {
    setActiveItem(array[0])
  }, [])

  return (
    <>
      <div id='questions' className={`${Styles.questions} ${Styles.questions_desktop}`}>
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
                    <span>
                      {item.title} <VectorIcon />
                    </span>
                  </li>
                ))}
            </ul>
            <div className={Styles.info}>
              <h5 className={Styles.title}>{activeItem.title}</h5>
              {activeItem.id === 1 && <Answer1 />}
              {activeItem.id === 2 && <Answer2 />}
              {activeItem.id === 3 && <Answer3 />}
              {activeItem.id === 4 && <Answer4 />}
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
