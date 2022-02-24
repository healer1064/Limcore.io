import clsx from 'clsx'
import React, { useState } from 'react'
import { TooltipIcon } from '../../../../assets/icons/TooltipIcon'
import { PopOver } from '../PopOver'
import styles from './styles.module.scss'

interface ICalculatorCardProps {
  data: string
  children: string
  tooltip?: boolean
  active?: boolean
  onClick: () => void
}

export const CalculatorCard = ({ data, children, tooltip = false, active = false, onClick }: ICalculatorCardProps) => {
  const [popover, setPopover] = useState(false)
  return (
    <div className={clsx(styles.container, active && styles.container_active)} onClick={onClick}>
      <h3 className={clsx(styles.calculator__title, active && styles.calculator__title_active)}>{children}</h3>
      <p className={clsx(styles.calculator__desc, active && styles.calculator__desc_active)}>
        {data}
        {tooltip && (
          <button
            className={styles.tooltip}
            onMouseEnter={() => setPopover(true)}
            onMouseLeave={() => setPopover(false)}
          >
            <TooltipIcon />
            <PopOver isHover={popover}>
              <h3 className={styles.popOverTitle}>Почему формула может не сходиться? </h3>
              <p className={styles.popOverText}>
                Обновление эмиссии происходит каждые сутки в 21:00 по МСК,а обновление рабочего объема — в реальном
                времени. Поэтому,на некоторое время формула может не сходится
              </p>
            </PopOver>
          </button>
        )}
      </p>
      <span className={clsx(styles.calculator__circle, active && styles.calculator__circle_active)} />
    </div>
  )
}
