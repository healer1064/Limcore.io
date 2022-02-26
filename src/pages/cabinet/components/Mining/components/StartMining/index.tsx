import React, { useState } from 'react'

import styles from './styles.module.scss'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'
import { StartMiningModal } from './components/StartMiningModal'
import { useAppSelector } from '@app/redux/hooks'
import { countDaysDifference } from '@lib/utils/countDaysDifference'

export const StartMining: React.FC = () => {
  const unlockedLimcBalance = useAppSelector((state) => state.auth.unlockedLimcBalance)
  const lockedLimcBalance = useAppSelector((state) => state.auth.lockedLimcBalance)
  const passedTB = Math.round(unlockedLimcBalance + lockedLimcBalance)

  const allTB = 2000
  const percentageLoading = Math.round((passedTB / allTB) * 100)

  const allDays = 80
  const remainingDays = countDaysDifference()

  const [modalOpened, setModalOpened] = useState(false)
  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)

  return (
    <div className={styles.startMining}>
      <div className={styles.startMining__beforeStart} onClick={openModal}>
        <p>До старта майнинга</p>
        <img src={arrowWhiteRight} />
        <StartMiningModal
          modalOpened={modalOpened}
          closeModal={closeModal}
          allDays={allDays}
          allTB={allTB}
          remainingDays={remainingDays}
          passedTB={passedTB}
          percentageLoading={percentageLoading}
        />
      </div>
      <div className={styles.startMining__loadingBlock}>
        <div className={styles.startMining__loading}>
          <p className={styles.startMining__line} style={{ width: `${percentageLoading}%` }} />
        </div>
      </div>
      <div className={styles.startMining__stats}>
        <p>
          Осталось {remainingDays} дня из {allDays}
        </p>
        <p>
          {passedTB} TB / {allTB} TB
        </p>
      </div>
    </div>
  )
}
