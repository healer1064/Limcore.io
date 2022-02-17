import { TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { IInfo } from '../../../../../OwnersTable'
import styles from './style.module.scss'
import { ReactComponent as ThreeDotsIcon } from '@icons/threeDotsIcon.svg'
import { MobileCell } from '../MobileCell'
import { MobileAddress } from '../MobileAddress'
import { TableModal } from '../TableModal'

export interface IMobileRows {
  address: string
  days: string
  tokens: string
  rating: string
  info: IInfo[]
}

export const MobileRows: React.FC<IMobileRows> = ({ address, days, tokens, rating, info }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <TableModal
        address={address}
        days={days}
        rating={rating}
        tokens={tokens}
        active={isOpen}
        info={info}
        setActive={() => setIsOpen((prev) => !prev)}
      />
      <TableRow onClick={() => setIsOpen((prev) => !prev)}>
        <MobileCell>
          <MobileAddress address={address} days={days} rating={rating} />
        </MobileCell>
        <MobileCell>
          <div className={styles.tokens}>{tokens}</div>
        </MobileCell>
        <MobileCell>
          <div className={styles.icon_wrapper}>
            <ThreeDotsIcon />
          </div>
        </MobileCell>
      </TableRow>
      <tr style={{ height: '10px' }} />
    </>
  )
}
