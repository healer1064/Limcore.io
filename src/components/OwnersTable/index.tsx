import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CollapsibleRow } from './parts/CollapsibleRow/index'
import { StyledHeadCell } from './parts/StyledHeadCell/index'
import { ReactComponent as OliveInfoIcon } from '@icons/oliveInfoIcon.svg'
import { ReactComponent as YellowArrowUp } from '@icons/yellowArrowUp.svg'
import React, { useState } from 'react'
import styles from './style.module.scss'

export const OwnersTable = ({ data }) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledHeadCell className={styles.head_cell}>
                <div className={styles.icon_wrapper}>
                  Рейтинг <OliveInfoIcon className={styles.icon} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>Адрес кошелька</StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>
                <div className={styles.icon_wrapper}>
                  Объем токенов <YellowArrowUp className={styles.icon} />
                </div>
              </StyledHeadCell>
              <StyledHeadCell className={styles.head_cell}>До старта майнинга</StyledHeadCell>
              <StyledHeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return <CollapsibleRow data={row} key={index} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.button_container}>
        <button onClick={() => console.log('extend table')} className={styles.button} type='button'>
          Загрузить еще 10 кошельков
        </button>
      </div>
    </>
  )
}
