import React from 'react'
import { ForksTableChart } from './parts/ForksTableChart/ForksTableChart'
import { WalletsTable } from './parts/WalletsTable/WalletsTable'
import styles from './styles.module.scss'
import { data } from './mockData'
import { ExternalLink } from '@components/ExternalLink'
import { ForksTableChartMobile } from './parts/ForksTableChartMobile/ForksTableChartMobile'
import { Search } from '../Search/Search'
import { MobileWalletsTable } from './parts/MobileWalletsTable'
import { ReactComponent as SearchIcon } from '@icons/searchGlass.svg'

export interface IEmission {
  desktop: boolean
}

export const Emission: React.FC<IEmission> = ({ desktop }) => {
  return (
    <>
      {desktop ? (
        <div className={styles.emissionContainer}>
          <h3 className={styles.title}>
            Намайнено <span className={styles.title_blue}>всего</span>
          </h3>
          <ForksTableChart />
          <div className={styles.owners_container} />
          <div className={styles.table}>
            <div className={styles.table__header}>
              <p className={styles.table__wallets_number}>Всего кошельков: {data.owners}</p>
              <div className={styles.dot} />
              <ExternalLink link='https://bscscan.com' text='BscScan' />
              <Search />
            </div>
            <div className={styles.table__container}>
              <WalletsTable data={data.data} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className={styles.title}>
            Намайнено <span className={styles.title_blue}>всего</span>
          </h3>
          <ForksTableChartMobile />
          <div className={styles.table__mobile_header}>
            <p className={styles.table__mobile_wallets_number}>Всего кошельков: {data.owners}</p>
            <div className={styles.dot} />
            <ExternalLink isMobile link='https://bscscan.com' text='BscScan' />
            {/* TODO make a search component */}
            <button type='button' className={styles.mobile_search_button}>
              <SearchIcon />
            </button>
            {/* TODO make a search component */}
          </div>
          <MobileWalletsTable data={data.data} />
        </>
      )}
    </>
  )
}
