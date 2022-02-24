import { formatNumerals } from '@helpers/formatNumerals'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import clsx from 'clsx'
import React, { useState } from 'react'
import { CollapsibleRow } from './parts/CollapsibleRow/index'
import { ExpandButton } from './parts/ExpandButton'
import { PercentPopOver } from './parts/PercentPopOver'
import { ProgressBar } from './parts/ProgressBar'
import { RatingPopOver } from './parts/RatingPopOver'
import { StyledHeadCell } from './parts/StyledHeadCell/index'
import styles from './style.module.scss'

export const WalletsTable: React.FC<any> = ({ data }) => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])
  const [sort, setSort] = useState(false)

  function sortHandler() {
    setArr([...arr].sort((a, b) => (a.tokens > b.tokens ? 1 : -1)))
    setSort((prev) => !prev)
  }

  return (
    <>
      <TableContainer className={styles.table_container}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadCell className={styles.head_cell}>
                <RatingPopOver />
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>Адрес кошелька</StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>
                <div onClick={() => sortHandler()} className={styles.icon_wrapper}>
                  Объем токенов <YellowArrowUp className={clsx(styles.icon_arrow, sort && styles.sort)} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>
                <PercentPopOver />
              </StyledHeadCell>
              <StyledHeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row, index) => {
              return <CollapsibleRow data={row} key={index} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.bottom_wrapper}>
        <ProgressBar current={rows} limit={data.length} />
        {rows !== data.length && (
          <div className={styles.button_container}>
            <ExpandButton data={data} setRows={setRows} rows={rows} arr={arr} setArr={setArr}>
              Загрузить еще {data.length - rows > 10 ? 10 : data.length - rows}
              {formatNumerals(data.length - rows > 10 ? 10 : data.length - rows, [
                ' кошелек',
                ' кошелька',
                ' кошельков',
              ])}
            </ExpandButton>
          </div>
        )}
      </div>
    </>
  )
}
