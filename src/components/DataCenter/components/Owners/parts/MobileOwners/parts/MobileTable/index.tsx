import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { IData } from '../../../OwnersTable'
import { ExpandButton } from '../../../OwnersTable/parts/ExpandButton'
import { ProgressBar } from '../../../OwnersTable/parts/ProgressBar'
import { StyledHeadCell } from '../../../OwnersTable/parts/StyledHeadCell'
import styles from './style.module.scss'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import { MobileRows } from './parts/MobileRows'

export interface IMobileTable {
  data: IData[]
}

export const MobileTable = ({ data }) => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadCell>
                <div className={styles.head_cell}>Адрес кошелька</div>
              </StyledHeadCell>
              <StyledHeadCell>
                <div className={styles.head_cell}>
                  Объем <YellowArrowUp className={styles.icon} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((el, index) => (
              <MobileRows
                info={el.info}
                key={index}
                address={el.address}
                days={el.days}
                tokens={el.tokens}
                rating={el.rating}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.bottom_wrapper}>
        <ProgressBar isMobile current={rows} limit={data.length} />
        <div className={styles.button_container}>
          <ExpandButton isMobile data={data} setRows={setRows} rows={rows} arr={arr} setArr={setArr}>
            Загрузить еще 10 кошельков
          </ExpandButton>
        </div>
      </div>
    </>
  )
}
