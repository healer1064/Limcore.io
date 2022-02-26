import React from 'react'
import styles from './styles.module.scss'
import HarvesterArrow from '@icons/HarvesterArrow'
import cn from 'classnames'

const ActiveBtn = ({ active, setIsOpen, view, setView }) => {
  const visualizationStyle = (current, capacity, active) => {
    const colors = active ? { a: '#FEFFA7', b: '#A2AA76' } : { a: '#D7ECEE', b: '#A4C8CB' }
    const percent = (current / capacity) * 100
    return { background: `linear-gradient(90deg, ${colors.a} ${percent}%, ${colors.b} ${percent}%)` }
  }
  return (
    <button
      style={visualizationStyle(active.current, active.capacity, active)}
      className={cn(styles.btn, {
        [styles.active]: view,
      })}
      onClick={() => {
        setIsOpen(true)
        setView((prev) => !prev)
      }}
    >
      {active.name}
      <HarvesterArrow className={styles.arrow} />
    </button>
  )
}

export default ActiveBtn
