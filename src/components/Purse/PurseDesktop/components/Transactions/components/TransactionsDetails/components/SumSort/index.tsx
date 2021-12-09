import React from 'react'
import styles from './styles.module.scss'

export const SumSort = ({
  fromSum,
  handleFromChange,
  toSum,
  handleToChange,
  handleResetSumInputsClick,
  handleApplySumInputsClick,
}) => {
  return (
    <>
      <div className={styles.inputs}>
        <div className={styles.when}>
          <span className={styles.whenSubtitle}>От</span>
          <input className={styles.input} value={fromSum} onChange={handleFromChange} />
        </div>
        <span className={styles.between} />
        <div className={styles.when}>
          <span className={styles.whenSubtitle}>До</span>
          <input className={styles.input} value={toSum} onChange={handleToChange} />
        </div>
      </div>
      <div className={styles.sumBtns}>
        <button className={styles.reset} onClick={handleResetSumInputsClick}>
          Сбросить
        </button>
        <button className={styles.apply} onClick={handleApplySumInputsClick}>
          Применить
        </button>
      </div>
    </>
  )
}
