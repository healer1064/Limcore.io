import React, { useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Fork } from './Fork'
import { BottomModal } from '@components/Modal/BottomModal'
import { ReactComponent as Calendar } from '../../../../../../../../assets/icons/calendar.svg'
import { ReactComponent as Arrow } from '../../../../../../../../assets/icons/calendarArrow.svg'

export const ForksModal: React.FC<any> = ({ forksData, active, setActive }) => {
  const [timeView, setTimeView] = useState(false)
  return (
    <BottomModal style={{ zIndex: 9999 }} active={active} setActive={setActive}>
      <div className={styles.container}>
        <button
          className={clsx(styles.calendarBtn, timeView && styles.active)}
          onClick={() => setTimeView((prev) => !prev)}
        >
          <span>
            <Calendar />
            <Arrow className={styles.arrow} />
          </span>
        </button>
        <ul className={styles.list}>
          {forksData.length > 0 &&
            forksData.map((fork, i) => (
              <li key={i} className={styles.item}>
                <Fork fork={fork} />
              </li>
            ))}
        </ul>
      </div>
    </BottomModal>
  )
}
