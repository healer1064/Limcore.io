import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '@app/redux/hooks'
import { ArrowRight } from '@icons/ArrowRight'
import { useTranslation } from 'react-i18next'

interface IStatisticsProps {
  onClick?: () => void
}

export const Statistics = ({ onClick }: IStatisticsProps) => {
  const [t] = useTranslation()
  const balanceLimc = useAppSelector((state) => state.auth.walletConnectLimc)

  return (
    <div className={styles.statistics}>
      <div className={styles.header}>
        <h3 className={styles.title}>{t('purse_mainingBefore')}</h3>
        <button type='button' className={styles.tooltip} onClick={onClick}>
          <ArrowRight />
        </button>
      </div>
      <div className={styles.progressbar}>
        <span className={styles.progressbar__track} />
      </div>
      <div className={styles.details}>
        <data className={styles.details__days}>80 {t('purse_mainingDateLast')}</data>
        <data className={styles.details__memory}>0 TB / {Number(balanceLimc).toFixed(2)} TB</data>
      </div>
    </div>
  )
}
