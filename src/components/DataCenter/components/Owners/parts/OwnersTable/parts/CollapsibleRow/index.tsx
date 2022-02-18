import React, { useState } from 'react'
import { TableRow } from '@material-ui/core'
import styles from './style.module.scss'
import { StyledCollapseCell } from '../StyledCollapseCell/index'
import { StyledCell } from '../StyledCell/index'
import { ReactComponent as ThreeDotsIcon } from '@icons/threeDotsIcon.svg'
import { RatingCell } from '../RatingCell'
import { AddressCell } from '../AddressCell'
import { CircleDiagram } from '../CircleDiagram'

export const CollapsibleRow = ({ data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow onClick={() => setOpen((prev) => !prev)} className={styles.row}>
        <RatingCell rating={data.rating} open={open} className={styles.cell} />
        <AddressCell className={styles.cell} open={open} address={data.address} />
        <StyledCell open={open} className={styles.cell}>
          {data.tokens}
        </StyledCell>
        <StyledCell open={open} className={styles.cell}>
          {data.days} дней
        </StyledCell>
        <StyledCell open={open} className={styles.cell}>
          <div className={styles.icon_wrapper}>
            <ThreeDotsIcon />
          </div>
        </StyledCell>
      </TableRow>
      {open &&
        data.info.map((infos, index, arr) => {
          return (
            <TableRow className={styles.collapse_row} key={index}>
              <StyledCollapseCell index={index} length={arr.length} className={styles.collapse_cell} />
              <StyledCollapseCell index={index} length={arr.length} className={styles.collapse_cell}>
                {infos.dates}
              </StyledCollapseCell>
              <StyledCollapseCell index={index} length={arr.length} className={styles.collapse_cell}>
                {infos.size}
              </StyledCollapseCell>
              <StyledCollapseCell index={index} length={arr.length} className={styles.collapse_cell}>
                <div className={styles.graph_container}>
                  {infos.graphs.current + ' из ' + infos.graphs.limit}
                  <CircleDiagram className={styles.donut} current={infos.graphs.current} limit={infos.graphs.limit} />
                </div>
              </StyledCollapseCell>
              <StyledCollapseCell index={index} length={arr.length} className={styles.collapse_cell} />
            </TableRow>
          )
        })}
      {!open && <tr style={{ height: 10 }} />}
    </>
  )
}
