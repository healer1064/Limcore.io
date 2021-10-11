import React from 'react'
import styles from './style.module.scss'

import minus from '@icons/minus.svg'
import plus from '@icons/plus.svg'
import classNames from 'classnames/bind'
// eslint-disable-next-line import/named
import { CountType } from '../../pages/catalog/redux/catalogSlicer'

interface InputCountProps {
  changeCount: (itemId: number, value: CountType.decrement | CountType.increment) => void
  onItemCountChange: (itemId: number, value: number) => void
  inputValue?: number
  itemId?: number
}

export const InputCount: React.FC<InputCountProps> = (props) => {
  return (
    <div className={styles.count}>
      <div
        onClick={() => props.changeCount(props.itemId, CountType.decrement)}
        className={classNames(styles.count__minus_container, styles.count__image)}
      >
        <img src={minus} alt='i' />
      </div>
      <div className={styles.count__input_container}>
        <input
          onChange={(e) => props.onItemCountChange(props?.itemId, Number(e.target.value))}
          className={styles.count__number_input}
          type='number'
          id={String(props?.itemId)}
          value={props?.inputValue || 1}
        />
      </div>
      <div
        onClick={() => props.changeCount(props.itemId, CountType.increment)}
        className={classNames(styles.count__plus_container, styles.count__image)}
      >
        <img src={plus} alt='i' />
      </div>
    </div>
  )
}
