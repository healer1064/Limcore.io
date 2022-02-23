import React, { useState } from 'react'

import styles from './styles.module.scss'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'
import { StartMiningModal } from './components/StartMiningModal'

export const StartMining: React.FC = () => {
  const [passedTB] = useState<number>(120)
  const [allTB] = useState<number>(2000)
  const [percentageLoading] = useState<number>(Math.floor((passedTB / allTB) * 100))

  const [remainingDays] = useState<number>(4)
  const [allDays] = useState<number>(60)

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
