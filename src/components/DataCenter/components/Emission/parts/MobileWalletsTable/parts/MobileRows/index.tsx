import { TableRow } from '@material-ui/core'
import React from 'react'
import styles from './style.module.scss'
import { ReactComponent as ThreeDotsIcon } from '@icons/threeDotsIcon.svg'
import { MobileCell } from '../MobileCell'
import { MobileAddress } from '../MobileAddress'
import { IDataMobile } from '../..'

export interface IMobileRows {
  data: IDataMobile
  onClick?: () => void
}

export const MobileRows: React.FC<IMobileRows> = ({ data, onClick }) => {
  return (
    <>
      <TableRow onClick={onClick}>
        <MobileCell>
          <MobileAddress address={data.address} percent={data.percent} rating={data.rating} />
        </MobileCell>
        <MobileCell>
          <div className={styles.tokens}>{data.tokens} LIMC</div>
        </MobileCell>
        <MobileCell>
          <div className={styles.icon_wrapper}>
            <ThreeDotsIcon className={styles.icon} />
          </div>
        </MobileCell>
      </TableRow>
      <tr style={{ height: '10px' }} />
    </>
  )
}
