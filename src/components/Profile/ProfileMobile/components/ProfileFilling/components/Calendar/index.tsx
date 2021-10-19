import React, { useState } from 'react'
import Styles from './styles.module.scss'

import leftIcon from '@icons/arrow-left.svg'
import rightIcon from '@icons/arrow-right.svg'

export const Calendar: React.FC = () => {
  const [view, setView] = useState('years')
  const [title, setTitle] = useState('1984 – 1989')

  return (
    <>
      <div className={Styles.select}>
        <img src={leftIcon} alt='Иконка' />
        <span className={Styles.title}>{title}</span>
        <img src={rightIcon} alt='Иконка' />
      </div>
      <>
        {view === 'years' && (
          <div className={Styles.grid}>
            <span className={Styles.item}>1979</span>
            <span className={Styles.item}>1980</span>
            <span className={Styles.item}>1981</span>
            <span className={Styles.item}>1982</span>
            <span className={Styles.item}>1983</span>
            <span className={Styles.item}>1984</span>
            <span className={Styles.item}>1985</span>
            <span className={`${Styles.item} ${Styles.item_active}`}>1986</span>
            <span className={Styles.item}>1987</span>
            <span className={Styles.item}>1988</span>
            <span className={Styles.item}>1989</span>
            <span className={Styles.item}>1990</span>
          </div>
        )}
        {view === 'months' && (
          <div className={Styles.grid}>
            <span className={Styles.item}>Янв</span>
            <span className={Styles.item}>Фев</span>
            <span className={Styles.item}>Мар</span>
            <span className={Styles.item}>Апр</span>
            <span className={Styles.item}>Май</span>
            <span className={Styles.item}>Июн</span>
            <span className={`${Styles.item} ${Styles.item_active}`}>Июл</span>
            <span className={Styles.item}>Авг</span>
            <span className={Styles.item}>Сен</span>
            <span className={Styles.item}>Окт</span>
            <span className={Styles.item}>Ноя</span>
            <span className={Styles.item}>Дек</span>
          </div>
        )}
        {view === 'days' && (
          <div className={Styles.container}>
            <div className={Styles.head}>
              <span className={Styles.daytime}>Пн</span>
              <span className={Styles.daytime}>Вт</span>
              <span className={Styles.daytime}>Ср</span>
              <span className={Styles.daytime}>Чт</span>
              <span className={Styles.daytime}>Пт</span>
              <span className={Styles.daytime}>Сб</span>
              <span className={Styles.daytime}>Вс</span>
            </div>
            <div className={Styles.body}>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={`${Styles.day} ${Styles.day_active}`}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
              <span className={Styles.day}>07</span>
            </div>
          </div>
        )}
      </>
    </>
  )
}
