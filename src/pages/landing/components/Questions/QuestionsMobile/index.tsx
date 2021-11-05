import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { Answer1 } from '../components/Answer1'
import { Answer2 } from '../components/Answer2'
import { Answer3 } from '../components/Answer3'
import { Answer4 } from '../components/Answer4'

import { VectorIcon } from '@icons/VectorIcon'

export const QuestionsMobile: React.FC = () => {
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
      <div className={Styles.wrapper} id='questionsMobile'>
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
                    {item.id === 1 && <Answer1 />}
                    {item.id === 2 && <Answer2 />}
                    {item.id === 3 && <Answer3 list='mobile' />}
                    {item.id === 4 && <Answer4 />}
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}
