import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { Answer1 } from '../components/Answer1'
import { Answer2 } from '../components/Answer2'
import { Answer3 } from '../components/Answer3'
import { Answer4 } from '../components/Answer4'

import { VectorIcon } from '@icons/VectorIcon'
import { useTranslation } from 'react-i18next'

export const QuestionsMobile: React.FC = () => {
  const [t] = useTranslation()

  const array = [
    {
      id: 1,
      title: t('qa_card1_title'),
    },
    {
      id: 2,
      title: t('qa_card2_title'),
    },
    {
      id: 3,
      title: t('qa_card3_title'),
    },
    {
      id: 4,
      title: t('qa_card4_title'),
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
        <h4 className={Styles.caption}>{t('qa_title')}</h4>
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
                    <div className={Styles.icon}>
                      <VectorIcon />
                    </div>
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
