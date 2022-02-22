import React from 'react'
import styles from './styles.module.scss'
import { Footer } from '@components/Footer'
import { DataCenter } from '@components/DataCenter/DataCenter'
import useWindowSize from '@helpers/useWindowSizeHook'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { Spinner } from '@components/Spinner'

export const DataCenterPage: React.FC = () => {
  const { width } = useWindowSize()
  const desktop = width > 971

  return (
    <div className={styles.dataCenterPage}>
      {width === undefined ? (
        <Spinner />
      ) : (
        <>
          <DataCenter className={styles.dataCenter} />
          {desktop ? <Footer /> : <FooterMobile />}
        </>
      )}
    </div>
  )
}
