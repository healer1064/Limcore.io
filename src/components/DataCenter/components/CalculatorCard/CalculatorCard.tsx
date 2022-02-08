import clsx from 'clsx'
import React from 'react'
import { TooltipIcon } from '../../../../assets/icons/TooltipIcon'
import styles from './styles.module.scss'

interface ICalculatorCardProps {
  data: string
  children: string
  tooltip?: boolean
  active?: boolean
  onClick: () => void
}

export const CalculatorCard = ({ data, children, tooltip = false, active = false, onClick }: ICalculatorCardProps) => {
  return (
    <div className={clsx(styles.container, active && styles.container_active)} onClick={onClick}>
      <h3 className={clsx(styles.calculator__title, active && styles.calculator__title_active)}>{children}</h3>
      <p className={clsx(styles.calculator__desc, active && styles.calculator__desc_active)}>
        {data}
        {tooltip && (
          <button className={styles.tooltip}>
            <TooltipIcon />
          </button>
        )}
      </p>
      <span className={clsx(styles.calculator__circle, active && styles.calculator__circle_active)} />
    </div>
  )
}
