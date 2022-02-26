import React from 'react'
import styles from './styles.module.scss'

export interface IDiskSlideProps {
  data: {
    id: number
    name: string
    current: number
    capacity: number
  }
  active?: boolean
  onClick?: () => void
}

export const DiskSlide = ({ data, active = false, onClick }: IDiskSlideProps) => {
  const { current, capacity, name } = data
  const visualizationStyle = (current, capacity, active) => {
    const colors = active ? { a: '#FEFFA7', b: '#A2AA76' } : { a: '#D7ECEE', b: '#A4C8CB' }
    const percent = (current / capacity) * 100
    return { background: `linear-gradient(90deg, ${colors.a} ${percent}%, ${colors.b} ${percent}%)` }
  }

  return (
    <div className={styles.disk__item} style={visualizationStyle(current, capacity, active)} onClick={onClick}>
      <h3 className={styles.item__title}>{name}</h3>
      <p className={styles.item__desc}>
        {current}/{capacity}TB
      </p>
    </div>
  )
}
