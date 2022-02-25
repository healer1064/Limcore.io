import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './style.module.scss'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import { MobileRows } from './parts/MobileRows'
import { formatNumerals } from '@helpers/formatNumerals'
import { TableModal } from './parts/TableModal'
import { StyledHeadCell } from '../WalletsTable/parts/StyledHeadCell'
import { ProgressBar } from '../WalletsTable/parts/ProgressBar'
import { ExpandButton } from '../WalletsTable/parts/ExpandButton'

export interface IForkData {
  id: number
  name: string
  emission: number
}

export interface IDataMobile {
  rating: string
  address: string
  tokens: string
  percent: string
  forkData: IForkData[]
}

export interface IMobileWalletsTable {
  data: IDataMobile[]
}

export const MobileWalletsTable: React.FC<IMobileWalletsTable> = ({ data }) => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<IDataMobile>({
    rating: '',
    address: '',
    tokens: '',
    percent: '',
    forkData: [
      { id: 1, name: '', emission: 162.54 },
      { id: 2, name: '', emission: 0.0196 },
      { id: 3, name: '', emission: 0.2823 },
      { id: 4, name: '', emission: 0.0196 },
      { id: 5, name: '', emission: 12.54 },
      { id: 6, name: '', emission: 162 },
      { id: 7, name: '', emission: 162 },
      { id: 8, name: '', emission: 162 },
      { id: 9, name: '', emission: 162 },
      { id: 10, name: '', emission: 162 },
      { id: 11, name: '', emission: 162 },
      { id: 12, name: '', emission: 162 },
      { id: 13, name: '', emission: 162 },
      { id: 14, name: '', emission: 162 },
      { id: 15, name: '', emission: 162 },
    ],
  })

  function sortHandler() {
    setArr([...arr].sort((a, b) => (a.tokens > b.tokens ? 1 : -1)))
  }

  return (
    <div className={styles.mobileTableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadCell>
                <div className={styles.head_cell}>Адрес кошелька</div>
              </StyledHeadCell>
              <StyledHeadCell>
                <div onClick={() => sortHandler()} className={styles.head_cell}>
                  Объем <YellowArrowUp className={styles.icon} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((el, index) => {
              return (
                <MobileRows
                  onClick={() => {
                    setModal(el)
                    setIsOpen(true)
                  }}
                  data={el}
                  key={index}
                />
              )
            })}
            <TableModal
              address={modal.address}
              forkData={modal.forkData}
              active={isOpen}
              setActive={() => setIsOpen((prev) => !prev)}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.bottom_wrapper}>
        <ProgressBar isMobile current={rows} limit={data.length} />
        {rows !== data.length && (
          <div className={styles.button_container}>
            <ExpandButton isMobile data={data} setRows={setRows} rows={rows} arr={arr} setArr={setArr}>
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
    </div>
  )
}
