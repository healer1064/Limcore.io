import { ExternalLink } from '@components/ExternalLink'
import useWindowSize from '@helpers/useWindowSizeHook'
import { ReactComponent as SearchIcon } from '@icons/searchGlass.svg'
import React from 'react'
import { OwnersCounter } from './parts/OwnersCounter'
import { OwnersTable } from './parts/OwnersTable'
import styles from './styles.module.scss'
import { MobileOwners } from './parts/MobileOwners'

const data = {
  owners: 400,
  data: [
    {
      rating: '1',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 30, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 40, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 10, limit: 60 } },
      ],
    },
    {
      rating: '3',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55a',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 60, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55b',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '3',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55c',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '1',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55e',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55f',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55s',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55q',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55t',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55k',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55g',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55h',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55j',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      address: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55r',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
  ],
}

export const Owners = () => {
  const { width } = useWindowSize()
  const desktop = width > 807

  return desktop ? (
    <>
      <div className={styles.owners_container}>
        <OwnersCounter number={data.owners} />
        <div className={styles.text_wrapper}>
          <p className={styles.owners_heading}>Владельцы</p>
          <p className={styles.owners_description}>С lock up периодом</p>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.table__header}>
          <p className={styles.table__wallets_number}>Всего кошельков: {data.owners}</p>
          <div className={styles.dot} />
          <ExternalLink link='*' text='BscScan' />
          {/* TODO make a search component */}
          <button type='button' className={styles.search_button}>
            <SearchIcon />
          </button>
          {/* TODO make a search component */}
        </div>
        <div className={styles.table__container}>
          <OwnersTable data={data.data} />
        </div>
      </div>
    </>
  ) : (
    <MobileOwners data={data.data} number={data.owners} />
  )
}
