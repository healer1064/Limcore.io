import React, { useState } from 'react'
import { TableRow } from '@material-ui/core'
import styles from './style.module.scss'
import { StyledCollapseCell } from '../StyledCollapseCell/index'
import { StyledCell } from '../StyledCell/index'
import { ReactComponent as ThreeDotsIcon } from '@icons/threeDotsIcon.svg'
import { RatingCell } from '../RatingCell'
import { AddressCell } from '../AddressCell'
import { Fork } from '../../../ForksTableChart/parts/Table/Fork'
import { ReactComponent as InfoGold } from '@icons/infoGoldIcon.svg'

export const CollapsibleRow = ({ data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow onClick={() => setOpen((prev) => !prev)} className={styles.row}>
        <RatingCell rating={data.rating} open={open} className={styles.cell} />
        <AddressCell className={styles.cell} open={open} address={data.address} />
        <StyledCell open={open} className={styles.cell}>
          {data.tokens} LIMC
        </StyledCell>
        <StyledCell open={open} className={styles.cell}>
          {data.percent} %
        </StyledCell>
        <StyledCell open={open} className={styles.cell}>
          <div className={styles.icon_wrapper}>
            <ThreeDotsIcon />
          </div>
        </StyledCell>
      </TableRow>
      <TableRow>
        {open && (
          <StyledCollapseCell index={1} length={2} colSpan={99}>
            <div className={styles.text_wrapper}>
              <div className={styles.fork_text}>24h зачисления</div>
              <div className={styles.dot_icon} />
              <div className={styles.fork_text}>
                Комиссия 15% <InfoGold className={styles.info_icon} />
              </div>
            </div>
            <div className={styles.fork_element}>
              {data.forkData.map((fork) => {
                return (
                  <div className={styles.element} key={fork.id}>
                    <Fork fork={fork} />
                  </div>
                )
              })}
            </div>
          </StyledCollapseCell>
        )}
      </TableRow>
      {!open && <tr style={{ height: 10 }} />}
    </>
  )
}
