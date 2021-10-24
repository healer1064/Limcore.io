import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { TableContent } from './components/TableContent/index'

export const CalcTable = () => {
  const [activeItem, setActiveItem] = useState(0)

  const handleOpenItem = (event) => {
    setActiveItem(+event.target.dataset.index)
  }

  const autumn = [
    { date: '21.05.21', startSum: '$10', endSum: '$1' },
    { date: '20.05.21', startSum: '$11', endSum: '$0.5' },
    { date: '19.05.21', startSum: '$11.5', endSum: '$0.5' },
    { date: '18.05.21', startSum: '$12', endSum: '$0.5' },
  ]
  const winter = [
    { date: '25.06.21', startSum: '$110', endSum: '$12' },
    { date: '06.03.21', startSum: '$115', endSum: '$5' },
    { date: '18.05.21', startSum: '$1200', endSum: '$500' },
  ]
  const spring = [
    { date: '06.10.22', startSum: '$572', endSum: '$1' },
    { date: '05.10.22', startSum: '$571', endSum: '$1' },
    { date: '04.10.22', startSum: '$570', endSum: '$1' },
    { date: '03.10.22', startSum: '$569', endSum: '$0.5' },
    { date: '02.10.22', startSum: '$568', endSum: '$0.5' },
    { date: '01.10.22', startSum: '$567', endSum: '$0.5' },
  ]
  const items = [
    { title: '01.09 – 30.11.2021', content: autumn },
    { title: '01.12 – 28.02.2022', content: winter },
    { title: '01.03 – 31.05.2022', content: spring },
  ]

  return (
    <div className={styles.calcTable}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <button
            className={classNames(i === activeItem ? styles.item__active : styles.item)}
            onClick={handleOpenItem}
            data-index={i}
            key={i}
          >
            {item.title}
          </button>
        ))}
      </ul>

      <table className={styles.calcTable}>
        {items[activeItem] && <TableContent data={items[activeItem].content} />}
      </table>
    </div>
  )
}
