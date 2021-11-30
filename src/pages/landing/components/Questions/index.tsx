import React, { useEffect, useState } from 'react'
import Styles from './styles.module.scss'

import { Answer1 } from './components/Answer1'
import { Answer2 } from './components/Answer2'
import { Answer3 } from './components/Answer3'
import { Answer4 } from './components/Answer4'
import { QuestionsMobile } from './QuestionsMobile'

import { VectorIcon } from '@icons/VectorIcon'
import { useTranslation } from 'react-i18next'

export const Questions: React.FC = () => {
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

  const [activeItem, setActiveItem] = useState({ id: null, title: '' })

  useEffect(() => {
    setActiveItem(() => {
      return activeItem.id ? array[activeItem.id - 1] : array[0]
    })
  }, [t])

  return (
    <>
      <section id='questions' className={`${Styles.questions} ${Styles.questions_desktop}`}>
        <div className={Styles.wrapper}>
          <h3 className={Styles.caption}>{t('qa_title')}</h3>
          <div className={Styles.container}>
            <ul className={Styles.question}>
              {array &&
                array.map((item) => (
                  <li
                    key={item.id}
                    className={activeItem.id === item.id ? `${Styles.item} ${Styles.item_active}` : `${Styles.item}`}
                    onClick={() => setActiveItem(item)}
                  >
                    <p>
                      {item.title} <VectorIcon />
                    </p>
                  </li>
                ))}
            </ul>
            <ul className={Styles.info}>
              <h5 className={Styles.title}>{activeItem.title}</h5>
              {activeItem.id === 1 && <Answer1 />}
              {activeItem.id === 2 && <Answer2 />}
              {activeItem.id === 3 && <Answer3 />}
              {activeItem.id === 4 && <Answer4 />}
            </ul>
          </div>
        </div>
      </section>
      <section className={`${Styles.questions} ${Styles.questions_mobile}`}>
        <QuestionsMobile />
      </section>
    </>
  )
}
