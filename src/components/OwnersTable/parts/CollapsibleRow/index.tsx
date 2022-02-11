import React, { useState } from 'react'
import { TableRow } from '@material-ui/core'
import styles from './style.module.scss'
import { StyledCollapseCell } from '../StyledCollapseCell/index'
import { StyledCell } from '../StyledCell/index'
import { ReactComponent as ThreeDotsIcon } from '@icons/threeDotsIcon.svg'
import { ReactComponent as RatingGray } from '@icons/raitingGrey.svg'
import { ReactComponent as RatingPurple } from '@icons/raitingPurple.svg'
import { ReactComponent as RatingOrange } from '@icons/raitingOrange.svg'

export const CollapsibleRow = ({ data }) => {
  const [open, setOpen] = useState(false)

  function ratingPicker(rating: string) {
    switch (rating) {
      case '1':
        return <RatingGray className={styles.rating_icon} />
      case '2':
        return <RatingOrange className={styles.rating_icon} />
      case '3':
        return <RatingPurple className={styles.rating_icon} />
    }
  }

  function adressFormatter(adress: string) {
    if (adress.length > 26) {
      return adress.substr(0, 16) + '...' + adress.substr(adress.length - 10, adress.length)
    }
    return adress
  }

  return (
    <>
      <TableRow onClick={() => setOpen(!open)} className={styles.row}>
        <StyledCell
          className={`${!open ? styles.primary_color : styles.secondary_color} ${styles.cell}`}
          align='center'
        >
          <div className={styles.rating_wrapper}>{ratingPicker(data.rating)}</div>
        </StyledCell>
        <StyledCell className={`${!open ? styles.primary_color : styles.secondary_color} ${styles.cell}`}>
          {adressFormatter(data.adress)}
        </StyledCell>
        <StyledCell className={`${!open ? styles.primary_color : styles.secondary_color} ${styles.cell}`}>
          {data.tokens}
        </StyledCell>
        <StyledCell className={`${!open ? styles.primary_color : styles.secondary_color} ${styles.cell}`}>
          {data.days} дней
        </StyledCell>
        <StyledCell className={`${!open ? styles.primary_color : styles.secondary_color} ${styles.cell}`}>
          <div className={styles.icon_wrapper}>
            <ThreeDotsIcon />
          </div>
        </StyledCell>
      </TableRow>
      {!open && <tr style={{ height: 10 }} />}
      {open &&
        data.info.map((infos, index, arr) => {
          return (
            <TableRow className={styles.collapse_row} key={index}>
              <StyledCollapseCell
                className={styles.collapse_cell}
                id={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : null}
              />
              <StyledCollapseCell
                className={styles.collapse_cell}
                id={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : null}
              >
                {infos.dates}
              </StyledCollapseCell>
              <StyledCollapseCell
                className={styles.collapse_cell}
                id={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : null}
              >
                {infos.size}
              </StyledCollapseCell>
              <StyledCollapseCell
                className={styles.collapse_cell}
                id={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : null}
              >
                {infos.graphs.current + ' из ' + infos.graphs.limit}
              </StyledCollapseCell>
              <StyledCollapseCell
                className={styles.collapse_cell}
                id={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : null}
              />
            </TableRow>
          )
        })}
      <tr style={{ height: 10 }} />
    </>
  )
}
