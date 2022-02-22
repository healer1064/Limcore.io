import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { IData } from '../../../OwnersTable'
import { ExpandButton } from '../../../OwnersTable/parts/ExpandButton'
import { ProgressBar } from '../../../OwnersTable/parts/ProgressBar'
import { StyledHeadCell } from '../../../OwnersTable/parts/StyledHeadCell'
import styles from './style.module.scss'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import { MobileRows } from './parts/MobileRows'
import { formatNumerals } from '@helpers/formatNumerals'
import { TableModal } from './parts/TableModal'

export interface IMobileTable {
  data: IData[]
}

export const MobileTable = ({ data }) => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<IData>({
    rating: '',
    address: '',
    tokens: '',
    days: '',
    info: [
      { dates: '', size: '', graphs: { current: 0, limit: 1 } },
      { dates: '', size: '', graphs: { current: 0, limit: 1 } },
      { dates: '', size: '', graphs: { current: 0, limit: 1 } },
    ],
  })

  function sortHandler() {
    setArr([...arr].sort((a, b) => (a.tokens > b.tokens ? 1 : -1)))
  }

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
              days={modal.days}
              rating={modal.rating}
              tokens={modal.tokens}
              active={isOpen}
              info={modal.info}
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
    </>
  )
}
