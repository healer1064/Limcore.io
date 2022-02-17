import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CollapsibleRow } from './parts/CollapsibleRow/index'
import { StyledHeadCell } from './parts/StyledHeadCell/index'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import React, { useState } from 'react'
import styles from './style.module.scss'
import { ExpandButton } from './parts/ExpandButton'
import { ProgressBar } from './parts/ProgressBar'
import { RatingPopOver } from './parts/RatingPopOver'

export interface IGraphs {
  current: number
  limit: number
}

export interface IInfo {
  dates: string
  size: string
  graphs: IGraphs
}
export interface IData {
  rating: string
  address: string
  tokens: string
  days: string
  info: IInfo[]
}

export interface IOwnersTable {
  data: IData[]
}

export const OwnersTable: React.FC<IOwnersTable> = ({ data }) => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])

  return (
    <>
      <TableContainer className={styles.table_container}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadCell className={styles.head_cell}>
                <RatingPopOver text='Рейтинг в таблице зависит от количества купленных терабайт.' />
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>Адрес кошелька</StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>
                <div className={styles.icon_wrapper}>
                  Объем токенов <YellowArrowUp className={styles.icon_arrow} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>До старта майнинга</StyledHeadCell>
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
              Загрузить еще 10 кошельков
            </ExpandButton>
          </div>
        )}
      </div>
    </>
  )
}
