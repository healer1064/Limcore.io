import React from 'react'
import styles from './styles.module.scss'

const NoneActiveBtn = ({ chengAndClose, item }) => {
  const visualizationStyle = (current, capacity, active) => {
    const colors = active ? { a: '#FEFFA7', b: '#A2AA76' } : { a: '#D7ECEE', b: '#A4C8CB' }
    const percent = (current / capacity) * 100
    return { background: `linear-gradient(90deg, ${colors.a} ${percent}%, ${colors.b} ${percent}%)` }
  }
  return (
    <button
      onClick={() => chengAndClose(item.id)}
      style={visualizationStyle(item.current, item.capacity, false)}
      className={`${styles.btn} ${styles.btn__nonactive}`}
    >
      <h3 className={styles.item__title}>{item.name}</h3>
      <p className={styles.item__desc}>
        {item.current}/{item.capacity}TB
      </p>
    </button>
  )
}

export default NoneActiveBtn
