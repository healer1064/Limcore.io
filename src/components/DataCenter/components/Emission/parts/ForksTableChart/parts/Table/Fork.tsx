import React from 'react'
import chia from '../../../../../../../../assets/icons/chia.svg'
import flax from '../../../../../../../../assets/icons/flax.png'
import nChain from '../../../../../../../../assets/icons/nChain.png'
import styles from './styles.module.scss'

export const Fork: React.FC<any> = ({ fork }) => {
  // FIXME limit захардкожен нужно сделать динамическим
  const visualizationStyle = (num, limit = 100) => {
    const percent = (num / limit) * 100
    return { background: `linear-gradient(90deg, #26DFF8 ${percent}%, #36585C ${percent}%)` }
  }

  const forkImage = (fork) => {
    switch (fork.name.toLowerCase()) {
      // FIXME нужны иконки
      case 'chia':
        return chia
      case 'flax':
        return flax
      case 'hddcoin':
        return nChain
      case 'n-chain':
        return nChain
      case 'greendoge':
        return nChain
      case 'silicoin':
        return chia
      default:
        break
    }
  }

  return (
    <>
      <span className={styles.forkLogoContainer} style={{ backgroundImage: `url(${forkImage(fork)})` }} />
      <div className={styles.forkContainer}>
        <div className={styles.fork}>
          <div className={styles.forkWrapper}>
            <span className={styles.forkName}>{fork.name}</span>
            <span className={styles.forkEmission}>{fork.emission}</span>
          </div>
        </div>
        <span className={styles.progressBar} style={visualizationStyle(fork.emission)} />
      </div>
    </>
  )
}
