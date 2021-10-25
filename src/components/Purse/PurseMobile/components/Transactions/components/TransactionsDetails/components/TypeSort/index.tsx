import React from 'react'
import styles from './styles.module.scss'
import { Label } from '../../../../../../../../../ui-kit/Label/index'

export const TypeSort = ({ onChange }) => {
  return (
    <ul className={styles.modalList}>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Покупка' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Покупка
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Продажа' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Продажа
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Обмен' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Обмен
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Пополнение' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Пополнение
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Вывод' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Вывод
          </div>
        </Label>
      </li>
      <li className={styles.modalItem}>
        <Label className={styles.label}>
          <div className={styles.block}>
            <input className={styles.input} type='checkbox' data-title='Перевод' onChange={onChange} />
            <span className={styles.checkbox}>{}</span>
            Перевод
          </div>
        </Label>
      </li>
    </ul>
  )
}
